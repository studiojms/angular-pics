import { OnInit, Component } from '@angular/core';

import { LoaderService } from './loader.service';

@Component({
  selector: 'pic-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {
  loading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.isFetching().subscribe(({ isFetching }) => (this.loading = isFetching));
  }
}
