// an axios service with configurable base url and interceptors for error handling and logging
//

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class BaseService {
    private axiosInstance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config);
        this.axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    public getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }

    private handleSuccess = (response: AxiosResponse) => {
        return response;
    };

    private handleError = (error: any) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error('Unauthorized');
            } else if (error.response.status === 403) {
                console.error('Forbidden');
            } else if (error.response.status === 404) {
                console.error('Not Found');
            } else if (error.response.status === 500) {
                console.error('Internal Server Error');
            } else if (error.response.status === 503) {
                console.error('Service Unavailable');
            } else {
                console.error('An error occurred');
            }
        } else {
            console.error('An error occurred');
        }
        return Promise.reject(error);
    };
}
