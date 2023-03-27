import {
  Body,
  Controller,
  Delete,
  Get,
  HostParam,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { notifications } from '@prisma/client';
import { NotificationService } from 'src/services/notification.service';
import { CreateNotification } from 'src/validators/create-notification';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  async getAll(): Promise<notifications[]> {
    return this.notificationService.getAll();
  }

  @Post()
  async create(@Body() body: CreateNotification): Promise<notifications> {
    return this.notificationService.create(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: CreateNotification,
  ): Promise<notifications> {
    return this.notificationService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<notifications> {
    return this.notificationService.delete(id);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<notifications> {
    return this.notificationService.getOne(id);
  }
}
