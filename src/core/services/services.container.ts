import { Container } from "inversify";
import { HelloService, HelloServiceType } from "./hello/hello.service.api";
import { HelloServiceImpl } from './hello/hello.service';
import { MessagerService, MessagerServiceType } from "./messager/messager.service.api";
import { MessagerServiceImpl } from "./messager/messager.service";

const container = new Container();

container.bind<HelloService>(HelloServiceType).to(HelloServiceImpl);
container.bind<MessagerService>(MessagerServiceType).to(MessagerServiceImpl);

export default container;
