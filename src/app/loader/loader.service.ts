import { Injectable } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private subject = new Subject<any>();

  public fetching(isFetching: boolean) {
    this.subject.next({ isFetching: isFetching });
  }

  public isFetching(): Observable<any> {
    return this.subject.pipe(switchMap(({ isFetching }) => of({ isFetching })));
  }
}
