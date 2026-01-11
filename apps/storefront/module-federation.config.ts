import { ModuleFederationConfig } from '@nx/module-federation';

// const config: ModuleFederationConfig = {
//     name: 'storefront',
//     remotes: [
//         ['auth-app', 'http://localhost:4202/remoteEntry.mjs'],
//         ['product-app', 'http://localhost:4203/remoteEntry.mjs'],
//         ['cart', 'http://localhost:4204/remoteEntry.js'],
//         ['shared', 'http://localhost:4205/remoteEntry.mjs'],
//         ['profile-app', 'http://localhost:4206/remoteEntry.js'],
//     ],
// };

const config: ModuleFederationConfig = {
    name: 'storefront',
    remotes: ['auth-app', 'product-app', 'cart', 'shared', 'profile-app'],
};

export default config;
