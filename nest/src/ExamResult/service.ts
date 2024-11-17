import {Injectable} from "@nestjs/common";
import BaseService from "../base/service";
import {Prisma} from "@prisma/client";

@Injectable()
export default class StudentService extends BaseService {

    constructor() {
        super('examResults')
    }

    async getList(): Promise<any> {
        const classId: number = 1
        return await this.prisma.$queryRaw`
            with
                exam_reuslts as (
                    select
                        "ExamResult"."studentId",
                        count("ExamResult".id) as totalQuestion,
                        count("ExamResult"."isCorrect") as correct_question,
                        count("ExamResult".id) - count("ExamResult"."isCorrect") as failed_question,
                        count("ExamResult"."isCorrect") / count("ExamResult".id) * 10.0 as score,
                        json_agg(
                            json_build_object(
                                'id', "ExamResult".id,
                                'answer', "ExamResult"."answer",
                                'is_correct', "ExamResult"."isCorrect",
                                'question', json_build_object('id', "Question"."id", 'answer', "Question"."answer")
                            )
                        ) as detail
                    from "ExamResult"
                    join "Question" on "Question".id = "ExamResult"."questionId"
                    group by "ExamResult"."studentId"
                ),
                students as (
                    select
                        "Member".id,
                        "Member".name,
                        json_build_object(
                            'score', exam_reuslts.score,
                            'correct_question', exam_reuslts.correct_question,
                            'failed_question', exam_reuslts.failed_question,
                            'detail', exam_reuslts.detail
                        ) as exam_result
                    from "Member"
                    join exam_reuslts on exam_reuslts."studentId" = "Member".id
                )
            
            select
                "Class".id,
                "Class".name,
                json_agg(
                    json_build_object(
                        'id', "students".id, 'name', "students".name, 'exam_result', students.exam_result
                    )
                ) as students
            from "ClassMember"
            join "Class" on "Class".id = "ClassMember"."classId"
            join students on students.id = "ClassMember"."memberId"
            where "Class".id = ${classId} and "Class".active
            group by "Class".id, "Class".name;
        `
    }
}

