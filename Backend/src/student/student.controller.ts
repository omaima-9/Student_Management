import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { student } from './models/student.schema';
import { createStudentDTo } from './dto/createstudent.dto';
import { updateStudentDTo } from './dto/updateStudent.dto';
import { AuthGuard } from 'src/auth/guards/authentication.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role, Roles } from 'src/auth/decorators/roles.decorator';
import { authorizationGaurd } from 'src/auth/guards/authorization.gaurd';

// @UseGuards(AuthGuard) //class level
@Controller('students') // it means anything starts with /student
export class StudentController {
    constructor(private studentService: StudentService) { }
    @Public()
    @Get() 
    // Get all students
    async getAllStudents(): Promise<student[]> {
        return await this.studentService.findAll();
    }
    @UseGuards(AuthGuard)// handler level

    @Get('currentUser')
    async getCurrentUser(@Req() {user}): Promise<student> {
        const student = await this.studentService.findById(user.userid);
        console.log(student)
        return student;
    }


    @Roles(Role.User)
    @UseGuards(authorizationGaurd)
    @Get(':id')// /student/:id
    // Get a single student by ID
    async getStudentById(@Param('id') id: string):Promise<student> {// Get the student ID from the route parameters
        const student = await this.studentService.findById(id);
        return student;
    }
    // Create a new student
    @Post()
    async createStudent(@Body()studentData: createStudentDTo) {// Get the new student data from the request body
        const newStudent = await this.studentService.create(studentData);
        return newStudent;
    }
    // Update a student's details
    @Put(':id')
    async updateStudent(@Param('id') id:string,@Body()studentData: updateStudentDTo) {
        const updatedStudent = await this.studentService.update(id, studentData);
        return updatedStudent;       
    }
    // Delete a student by ID
    @Delete(':id')
    async deleteStudent(@Param('id')id:string) {
        const deletedStudent = await this.studentService.delete(id);
       return deletedStudent;
    }
}
