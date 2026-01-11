import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
    imports: [NxWelcomeComponent, RouterModule],
    selector: 'mfe-storefront-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
})
export class AppComponent implements OnInit {
    title = 'Storefront';

    constructor(private router: Router) {}

    ngOnInit() {
        // Listen for navigation events from Web Components (React remotes)
        window.addEventListener('mfe:navigate', (event: any) => {
            const { path } = event.detail;
            console.log('Navigating to:', path);
            this.router.navigate([path]);
        });
    }
}
