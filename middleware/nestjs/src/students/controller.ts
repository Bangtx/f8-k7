import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";


@Controller('students')
@ApiTags('Student')
export default class Student {

    @Get()
    getList1() {
        console.log('getList')
        return {msg: 'test student'}
    }
}