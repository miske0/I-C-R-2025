import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  public bootstrapClasses = {
    cancelButton: `btn btn-danger`,
    denyButton: `btn btn-secondary`,
    confirmButton: `btn btn-primary`
  }

  public showDialog(text: string, callback: Function)  {

  }
  
}
