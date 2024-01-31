import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WorkerService {
    private worker: Worker;

    constructor() {
        this.worker = new Worker(new URL('./excell-refactor.worker', import.meta.url));
    }

    runTask(data: any): Promise<any> {
        return new Promise((resolve) => {
            this.worker.onmessage = (event) => {
                resolve(event.data);
            };
            this.worker.postMessage(data);
        });
    }
}
