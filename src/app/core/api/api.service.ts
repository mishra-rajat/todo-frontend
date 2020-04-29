import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string = "http://localhost:3000/api/v1";

  constructor(
    public http: HttpClient
  ) { }

  public get(path) {
		var endpoint = this.API_URL + path;
		return this.http.get(endpoint);
  }

  public post(path, formData: FormData) {
		var endpoint = this.API_URL + path;
		return this.http.post(endpoint, formData);
	}

}
