import { XxxService } from './xxx.service';
import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';
export declare class XxxController {
    private readonly xxxService;
    constructor(xxxService: XxxService);
    create(createXxxDto: CreateXxxDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateXxxDto: UpdateXxxDto): string;
    remove(id: string): string;
}
