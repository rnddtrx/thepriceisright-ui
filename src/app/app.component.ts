import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thepriceisright-ui';



}
