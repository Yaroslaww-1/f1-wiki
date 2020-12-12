import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
dotenv.config();
import { RootModule } from '@application/modules/root.module';
import ServerApplicationConfig from '@config/server-application.config';

export class ServerApplication {
  private readonly host: string = ServerApplicationConfig.host;
  private readonly port = ServerApplicationConfig.port;

  public static new(): ServerApplication {
    return new ServerApplication();
  }

  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    app.enableCors({
      origin: ServerApplicationConfig.appClientUrl,
      optionsSuccessStatus: 200,
    });
    app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
      .setTitle('Api example')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(this.port, this.host);

    Logger.log(`Server started on host: ${this.host}; port: ${this.port};`, ServerApplication.name);
  }
}
