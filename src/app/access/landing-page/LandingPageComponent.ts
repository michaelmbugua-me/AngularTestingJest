import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import {CounterService} from '../../Counter/CounterService';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'LandingPageComponent.html',
  styleUrl: 'LandingPageComponent.css',
  imports: [
    MatButton,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {

  protected readonly title = signal('jest.');

  constructor(private router: Router) {
  }

  goToLogin() {
    this.router.navigateByUrl('/login').then();
  }
}
