import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";

@Injectable()
export default abstract class BaseService {
    // constructor(private prisma: PrismaService) {}
    protected prisma = new PrismaService()
    private name: string

    protected constructor(name) {
        this.name = name
    }

    handleSelect() {
        return {
            id: true,
            name: true
        }
    }

    handleFind() {
        return {
            active: true
        }
    }

    async getList() {
        return await this.prisma[this.name].findMany({
            select: this.handleSelect(),
            where: this.handleFind()
        })

    }
}