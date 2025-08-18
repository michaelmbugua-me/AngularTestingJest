import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: 'LoginComponent.html',
  styleUrl: 'LoginComponent.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    NgOptimizedImage,
    MatInput,
    MatFormField,
    MatLabel
  ]
})
export class LoginComponent {

  protected readonly title = signal('jest');

  constructor(private router: Router) {
  }

  goToPostsList() {
    this.router.navigateByUrl('/post-list').then();
  }
}
