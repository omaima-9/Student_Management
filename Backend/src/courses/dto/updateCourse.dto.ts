import { IsString } from "class-validator";

export class updateCourseDTo {
      @IsString()
  
    name: string;
    
  }