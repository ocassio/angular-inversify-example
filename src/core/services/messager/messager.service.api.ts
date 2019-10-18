export abstract class MessagerService {
  abstract getMessage(): string;
}

export const MessagerServiceType = Symbol("MessagerService");
