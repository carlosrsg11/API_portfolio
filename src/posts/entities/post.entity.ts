import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt'

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number;

    @Column({type: 'varchar', length: 255})
    @ApiProperty({
        name: 'El nombre del proyecto',
        example: 'Creación ed API',
    })
    name: string;

    @Column({type: 'text', default: '' })
    @ApiProperty({
        description: 'La descripción del proyecto',
        example: 'El proyecto trata de la creación de una API para un portafolio digital',
    })
    description: string;
}

export default Post;