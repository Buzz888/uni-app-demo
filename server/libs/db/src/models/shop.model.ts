import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class shop {
    @ApiProperty({
        description: '商品名'
    })
    @prop()
    name: string
    @ApiProperty({
        description: '发货地'
    })
    @prop()
    city: string
    @ApiProperty({
        description: '商品详细'
    })
    @prop()
    content: string
    @ApiProperty({
        description: '价格'
    })
    @prop()
    price: string
    @ApiProperty({
        description: '数量'
    })
    @prop()
    num: string
    @ApiProperty({
        description: '封面图片'
    })
    @prop()
    cover: string
    
}