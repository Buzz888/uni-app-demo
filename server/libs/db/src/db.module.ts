import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { admin } from './models/admin.model';

const models = TypegooseModule.forFeature([admin])
@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/demoshop',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    models,
  ], 
  providers: [DbService],
  exports: [DbService,models],
}) 
export class DbModule {}
 