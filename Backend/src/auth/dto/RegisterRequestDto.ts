import { IsArray, IsEmail, IsInt, isInt, IsString } from "class-validator";
import { course } from "src/courses/models/course.schema";


export class RegisterRequestDto {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  name: string;

  @IsInt()
  age: Number;
@IsArray()
  courses: course[]

  @IsString()
  password: string
  
  @IsString()
  role: string = "student"
}