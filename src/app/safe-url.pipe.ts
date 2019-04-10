import { Pipe, Injectable} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'SafeUrlPipe'
})
@Injectable()
export class SafeUrlPipe {

  constructor(private dom : DomSanitizer){
  }

  transform(value, args) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
