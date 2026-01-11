// apps/storefront/src/app/pages/profile/profile-wrapper.component.ts
import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
    selector: 'app-profile-wrapper',
    template: '<div #profileContainer></div>',
    standalone: true,
})
export class ProfileWrapperComponent implements OnInit, OnDestroy {
    @ViewChild('profileContainer', { static: true })
    containerRef!: ElementRef;

    private root: any;

    async ngOnInit() {
        // Dynamic import React component từ remote
        const { default: ProfilePage } = await import('./profile-page');

        // Render React component vào Angular container
        this.root = ReactDOM.createRoot(this.containerRef.nativeElement);
        this.root.render(React.createElement(ProfilePage));
    }

    ngOnDestroy() {
        if (this.root) {
            this.root.unmount();
        }
    }
}
