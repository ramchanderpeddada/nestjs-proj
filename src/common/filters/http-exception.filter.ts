import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionRes = exception.getResponse();

    const err =
      typeof response === 'string'
        ? { message: exceptionRes }
        : (exceptionRes as object);

    response.status(status).json({
      ...err,
      timestamp: new Date().toISOString(),
    });
  }
}
