import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {Badge} from 'primeng/badge';
import {NgClass} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Toast} from 'primeng/toast';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'thepriceisright-ui';

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
      this.authenticationService.restore().subscribe(() => {})
  }



}
