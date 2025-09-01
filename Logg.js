class Logg {
  constructor() {
    this.logs = [];
  }

  log(message, type = "info") {
    const entry = { message, type, timestamp: new Date().toISOString() };
    this.logs.push(entry);
  }

  getLogs() {
    return this.logs;
  }
}

export default new Logg();
