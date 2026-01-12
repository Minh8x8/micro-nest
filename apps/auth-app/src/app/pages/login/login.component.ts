import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'mfe-auth-login-page',
    imports: [CommonModule, FormsModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="bg-cover bg-center"
            [style.backgroundImage]="'url(' + backgroundImage + ')'"
            style="background-repeat: no-repeat;background-size: cover;min-height: 100vh;"
        >
            <div
                class="container d-flex align-items-center justify-content-center"
                style="min-height: 100vh;"
            >
                <div class="card shadow w-100" style="max-width: 400px;">
                    <div class="card-body">
                        <h1 class="h3 mb-4 text-center">Login</h1>
                        <form (ngSubmit)="login()">
                            <div class="mb-3">
                                <label
                                    for="email"
                                    class="form-label fw-semibold"
                                    >Email Address</label
                                >
                                <input
                                    id="email"
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your username"
                                    [(ngModel)]="username"
                                    name="username"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="password"
                                    class="form-label fw-semibold"
                                    >Password</label
                                >
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    placeholder="Enter your password"
                                    [(ngModel)]="password"
                                    name="password"
                                    required
                                />
                                <div class="mt-2">
                                    <a href="#" class="link-secondary small"
                                        >Forgot your password?</a
                                    >
                                </div>
                            </div>
                            <div class="d-grid mb-3">
                                <button
                                    class="btn btn-primary btn-block"
                                    type="submit"
                                    [disabled]="loading"
                                >
                                    {{ loading ? 'Logging in...' : 'Login' }}
                                </button>
                            </div>
                            <div
                                *ngIf="error"
                                class="alert alert-danger text-center mb-0"
                            >
                                {{ error }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class LoginComponent {
    username = '';
    password = '';
    loading = false;
    error = '';
    images = [
        'assets/images/banner-ad-1.jpg',
        'assets/images/banner-ad-2.jpg',
        'assets/images/banner-ad-3.jpg',
    ];
    backgroundImage = '';
    constructor(private router: Router) {
        this.backgroundImage =
            this.images[Math.floor(Math.random() * this.images.length)];
    }
    login() {
        this.loading = true;
        this.error = '';
        // Simulate an API call then navigate to dashboard
        setTimeout(() => {
            if (this.username && this.password === 'password') {
                localStorage.setItem('username', this.username);
                // If running as MFE, emit event for shell/host to handle navigation
                if (window.parent !== window && window.dispatchEvent) {
                    window.dispatchEvent(
                        new CustomEvent('mfe-login-success', {
                            detail: { username: this.username },
                        })
                    );
                } else {
                    this.router.navigate(['/pages/dashboard']);
                }
            } else {
                this.error = 'Invalid username or password';
            }
            this.loading = false;
        }, 1000);
    }
}
