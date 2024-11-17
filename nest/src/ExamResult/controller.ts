import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import ExamResultService from './service'

@Controller('exam_results')
@ApiTags('exam_results')
export default class ExamResult {

    constructor(private examResultService: ExamResultService) {}

    @Get()
    async getList() {
        return await this.examResultService.getList()
    }
}