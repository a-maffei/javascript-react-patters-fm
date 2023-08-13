const dbConnection = (uri) =>
  Object.freeze({
    uri,
    connect: () => console.log(`DB ${uri} has been connected!`),
    disconnect: () => console.log(`DB ${uri} has been diconnected!`),
  });

export default dbConnection;

/* Class:

let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
        throw new Error ("you're not allowed create more instances of this class")
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = Object.freeze(new DBConnection("mongodb://..."));

export default connection;
 */
