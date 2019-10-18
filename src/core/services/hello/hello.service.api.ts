export abstract class HelloService {
  abstract getHelloMessage(): string;
}

export const HelloServiceType = Symbol("HelloService");
