import {Injectable} from "@nestjs/common";
import BaseService from "../base/service";

@Injectable()
export default class StudentService extends BaseService{

    constructor() {
        super('member')
    }

    handleSelect() {
        const field = super.handleSelect()
        return {
            ...field,
            mail: true,
            classes: true
        }
    }

    handleFind() {
        return {
            active: true,
            role: 'student'
        }
    }

    // async getList() {
    //     const result = await this.prisma.member.findMany({
    //         select: {
    //             id: true,
    //             name: true,
    //             mail: true
    //         },
    //         where: {
    //             active: true
    //         }
    //     })
    //
    //     return result
    // }

}