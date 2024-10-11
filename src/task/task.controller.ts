import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import mongoose from 'mongoose';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new BadRequestException('Invalid id');
    const foundTask = await this.taskService.findOneTask(id);
    if (!foundTask) throw new NotFoundException('Task not found');
    return foundTask;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new BadRequestException('Invalid id');
    const updatedTask = await this.taskService.updateTask(id, updateTaskDto);
    if (!updatedTask) throw new NotFoundException('Task not found');
    return updatedTask;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new BadRequestException('Invalid id ');
    const deletedTask = await this.taskService.removeTask(id);
    if (!deletedTask) throw new NotFoundException('Task not found');
    return deletedTask;
  }
}
