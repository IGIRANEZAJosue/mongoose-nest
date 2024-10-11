import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  createTask(createTaskDto: CreateTaskDto) {
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }

  findAllTasks() {
    return this.taskModel.find();
  }

  findOneTask(id: string) {
    return this.taskModel.findById(id);
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  removeTask(id: number) {
    return `This action removes a #${id} task`;
  }
}
