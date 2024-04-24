import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('videos')
  getVideos() {
    return [
      {
        title: 'Video 1',
        description: 'Description 1',
        thumbnail: 'https://via.placeholder.com/150',
      },
      {
        title: 'Video 2',
        description: 'Description 2',
        thumbnail: 'https://via.placeholder.com/150',
      },
    ];
  }
}
