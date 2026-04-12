import { Injectable, NotFoundException } from '@nestjs/common';

import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task ID "${id}" not found.`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  deleteTask(id: string): Promise<Task> {
    return this.taskRepository.deleteTask(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus) {
    const task = await this.getTaskById(id);
    task.status = status;

    await this.taskRepository.save(task);

    return task;
  }
}
