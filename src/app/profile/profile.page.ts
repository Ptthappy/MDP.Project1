import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  navigate(route: string) {
    this.router.navigate([route]);
  }

  constructor(private router: Router) { }

  ngOnInit() {}

}
