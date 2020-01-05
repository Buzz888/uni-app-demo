import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { admin } from '@libs/db/models/admin.model';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:admin
})
@Controller('/admin/api/admin')
@ApiTags('管理用户')
export class AdminController {
    constructor(@InjectModel(admin) private readonly model){

    }
}
