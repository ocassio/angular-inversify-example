import { MessagerService } from './messager.service.api';
import { injectable, inject } from "inversify";
import { HelloServiceType, HelloService } from '../hello/hello.service.api';

@injectable()
export class MessagerServiceImpl implements MessagerService {

  constructor(
    @inject(HelloServiceType) private helloService: HelloService
  ) {
  }

  getMessage(): string {
    return this.helloService.getHelloMessage();
  }

}
