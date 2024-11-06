import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import StudentService from "./service";


@Controller('students')
@ApiTags('Student')
export default class Student {

    constructor(private studentService: StudentService) {}

    @Get()
    async getList() {
        console.log('1243')
        return await this.studentService.getList()
    }
}