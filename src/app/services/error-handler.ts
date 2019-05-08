import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {

        let err;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            err = error;
            console.log(`Server Error occurred: ${error.message}`);

        } else {
            // Client Error
            err = error;
            console.log(`Client Side Error occurred: ${error.message}`);
        }
        console.error(error);
    }
}
