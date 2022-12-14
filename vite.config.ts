import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        preact(),
        VitePWA({
            manifest: {
                name: 'Tic Tac Toe',
                short_name: 'Tic Tac Toe',
                description: 'Tic Tac Toe',
                icons: [
                    {
                        src: 'logo16.png',
                        type: 'image/png',
                        sizes: '16x16'
                    },
                    {
                        src: 'logo32.png',
                        type: 'image/png',
                        sizes: '32x32'
                    },
                    {
                        src: 'logo192.png',
                        type: 'image/png',
                        sizes: '192x192'
                    },
                    {
                        src: 'logo512.png',
                        type: 'image/png',
                        sizes: '512x512'
                    }
                ],
                start_url: '.',
                theme_color: '#000000',
                background_color: '#000000'
            },
            registerType: 'autoUpdate'
        })
    ]
})
