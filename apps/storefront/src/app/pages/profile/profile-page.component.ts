// apps/storefront/src/app/pages/profile/profile-page.component.ts
import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@nx/angular/mf';

// React
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
    selector: 'mfe-storefront-profile-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: `./profile-page.component.html`,
    styleUrls: [`./profile-page.component.css`],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
    // React
    @ViewChild('profileContainer', { static: true })
    profileContainer!: ElementRef;
    private profileRoot?: ReactDOM.Root;

    // Angular
    bestSellingComponent: any;

    async ngOnInit() {
        /* =======================
       React remote (profile)
       ======================= */
        const { default: ProfilePage } = await import(
            'profile-app/ProfilePageComponent'
        );

        this.profileRoot = ReactDOM.createRoot(
            this.profileContainer.nativeElement
        );
        this.profileRoot.render(React.createElement(ProfilePage));

        /* ==========================
       Angular remote (best selling)
       ========================== */
        const remote = await loadRemoteModule(
            'product-app',
            './BestSellingFragment'
        );

        this.bestSellingComponent = remote.BestSellingComponent;
    }

    ngOnDestroy() {
        this.profileRoot?.unmount();
    }
}
