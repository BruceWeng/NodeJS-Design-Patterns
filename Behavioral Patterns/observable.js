/**
 * Observable acts as a container for an item or collection of items. But the items,
 * in the Observable are not stored in memory. Rather the items are added in
 * asynchronous fashion. Like Events.
 *
 * Whenever the Observer subscribes(Observable owns subscribe method), it can access
 * to the existing items in the Observable. Later the Observer can manipulate the
 * received items.
 */
 let observerA = {
   next: function(value) {
       console.log(value);
   },

   error: function(error) {
       console.log(error);
   },

   complete: function() {
       console.log("Completed");
   }
 }

let observable = Rx.Observable.create(function(observer) {
 observer.next("Hello");
 observer.next("World");
 observer.error("Error"); // Observable stops after throw error, not calling complete.
})
.subscribe(observerA);

// Clear all subscription after 5 seconds.
setTimeout(() => observable.unsubscribe(), 5000);
