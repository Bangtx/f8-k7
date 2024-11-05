import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";


@Controller('classes')
@ApiTags('classes')
export default class Classes {

    @Get()
    getList1() {
        console.log('getList')
        return {msg: 'test'}
    }
}