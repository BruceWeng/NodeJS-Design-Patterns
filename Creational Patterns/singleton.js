/**
 * Intent: Ensure a class only has one instance, and provide a global point of
 * access to it
 */
 class Logger {
     constructor() {
         this.logs = [];
     }

     get count() {
         return this.logs.length;
     }

     log(message) {
         const timestamp = new Date().toISOString();
         this.logs.push({ message, timestamp });
         console.log(`${timestamp} - ${message}`);
     }
 }

 class Singleton {
     consturctor() {
         if (!Singleton.instance) {
             Singleton.instance = new Logger();
         }
     }

     getInstance() {
         return Singleton.instance;
     }

 }

module.exports = Singleton;
