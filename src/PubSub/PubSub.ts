export class Subbscribable<MessageType> {
  private subscribers: Set<(msg: MessageType) => void> = new Set();

  subscribe(cb: () => void): () => void {
    this.subscribers.add(cb);
    return () => {
      this.subscribers.delete(cb);
    };
  }

  publish(msg: MessageType): void {
    this.subscribers.forEach((cb) => cb(msg));
  }
}
