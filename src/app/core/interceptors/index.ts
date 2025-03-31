import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";
import { HandleErrorForBackEndInterceptor } from "./handle-error-for-back-end.interceptor";



export const HttpInterceptorProviders = [
  {
    provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,useClass:HandleErrorForBackEndInterceptor,multi:true
  },
]