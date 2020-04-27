import { Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private api: ApiService
  ) { }

  getTodos() {
    return this.api.get('/tasks')
  }
}
