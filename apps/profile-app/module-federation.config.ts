// apps/profile-app/module-federation.config.ts
import { ModuleFederationConfig } from '@nx/react/module-federation';

const config: ModuleFederationConfig = {
    name: 'profile-app',
    exposes: {
        './Module': './src/remote-entry.ts',
        './ProfileButtonComponent':
            './src/app/components/profile/profile-button.component.tsx',
        './ProfilePageComponent':
            './src/app/components/profile/profile.component.tsx',
    },
};

export default config;
