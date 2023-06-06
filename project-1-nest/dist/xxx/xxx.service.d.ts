import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';
export declare class XxxService {
    create(createXxxDto: CreateXxxDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateXxxDto: UpdateXxxDto): string;
    remove(id: number): string;
}
