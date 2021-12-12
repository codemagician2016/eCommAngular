import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 1},
    () =>
    'Hi this is dashboard'
  );

  private _mobileQueryListener: () => void;

  constructor(
      changeDetectorRef: ChangeDetectorRef, 
      media: MediaMatcher,
      private authservice: AuthService,
      private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // onLogout() {
  //   this.authservice.logout();
  //   this.router.navigateByUrl('/login');
  // }

  ngOnInit(): void {
  }

}
