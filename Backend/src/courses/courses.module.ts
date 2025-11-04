import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { course, CourseSchema } from 'src/courses/models/course.schema';

@Module({
  imports:[  MongooseModule.forFeature([{ name: course.name, schema: CourseSchema }])],
  providers: [CoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
