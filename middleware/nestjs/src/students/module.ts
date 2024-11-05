import {Module} from "@nestjs/common";
import Controller from './controller'


@Module({
    controllers: [Controller],
    providers: []
})
export default class Student {}
