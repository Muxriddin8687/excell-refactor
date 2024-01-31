self.onmessage = function (event) {
    const data = event.data;
    // Perform your background task here
    const result = data * 2;

    // Post the result back to the main thread
    self.postMessage(result);
};