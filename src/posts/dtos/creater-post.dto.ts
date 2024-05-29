import { IsNotEmpty, IsString, MaxLength, MinLength }  from "class-validator";

export default class CreatePostDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(2500, 
        {message: 'La descripción debe tener al menos 2500 caracteres'}
    )
    description: string;
}