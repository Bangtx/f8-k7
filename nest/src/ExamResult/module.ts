import {Module} from "@nestjs/common";
import Controller from './controller'
import {PrismaService} from "../prisma.service";
import Service from './service'

@Module({
    controllers: [Controller],
    providers: [Service, PrismaService]
})
export default class ExamResult {}
