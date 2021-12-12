import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) { }

  intercept(req: any, next: any) {
      let authService = this.inject.get(AuthService)
      let tokenNizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenNizedReq)
  }
}
