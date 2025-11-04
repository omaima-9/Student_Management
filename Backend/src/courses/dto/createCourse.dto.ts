import { IsString } from "class-validator";

export class createCourseDTo {
    @IsString()
    id: string;
    @IsString()
    name: string;
  }