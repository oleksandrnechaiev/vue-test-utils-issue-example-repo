import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    envPrefix: 'PUBLIC',
    test: {
        environment: 'jsdom',
        env: {
            // https://vitest.dev/guide/environment.html#env
            PUBLIC_CONFIG: JSON.stringify({
                config1: 'config1Value',
                config2: 'config2Value',
            }),
        },
    },
});
