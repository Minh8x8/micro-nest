// apps/profile-app/module-federation.config.ts
import { ModuleFederationConfig } from '@nx/react/module-federation';

const config: ModuleFederationConfig = {
    name: 'profile-app',
    exposes: {
        './Module': './src/remote-entry.ts',
        './ProfilePage': './src/app/pages/profile/profile-page',
    },
};

export default config;
