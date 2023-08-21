export class APIError extends Error {
  readonly status: number;
  readonly headers: Record<string, string> | undefined;

  constructor(
    status: number,
    message?: string,
    headers?: Record<string, string>
  ) {
    super(message);
    this.status = status;
    this.headers = headers;
  }
}
