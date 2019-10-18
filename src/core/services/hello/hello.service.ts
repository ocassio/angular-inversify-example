import { HelloService } from './hello.service.api';
import { injectable } from "inversify";

@injectable()
export class HelloServiceImpl implements HelloService {

  getHelloMessage(): string {
    return "Hello world!";
  }

}
