import { IsInt, IsString } from "class-validator";
import { course } from "src/courses/models/course.schema";

export class updateStudentDTo {
  @IsString()
  name?: string;

  @IsInt()
  age?: Number;
  courses?: course[];
}