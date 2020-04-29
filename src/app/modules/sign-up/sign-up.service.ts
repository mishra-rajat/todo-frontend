import { Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private api: ApiService
  ) { }

  registerUser(signUpFormData: FormData) {
    return this.api.post('/users', signUpFormData)
  }
}
