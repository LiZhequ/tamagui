import { tamaguiPlugin } from '@tamagui/vite-plugin'
import type { UserConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { vxs } from 'vxs/vite'

const resolve = (path: string) => {
  const resolved = import.meta.resolve?.(path)
  if (!resolved) {
    throw new Error(`Not found: ${path}, maybe on wrong node version`)
  }
  return resolved.replace('file:/', '')
}

export default {
  resolve: {
    alias: [
      {
        find: '@docsearch/react',
        replacement: resolve('@docsearch/react'),
      },
    ],

    dedupe: [
      'react',
      'react-dom',
      '@tamagui/core',
      '@tamagui/web',
      '@tamagui/animations-moti',
      '@tamagui/toast',
      'tamagui',
      '@tamagui/use-presence',
      'react-native-reanimated',
      '@tamagui/react-native-web',
    ],
  },

  ssr: {
    noExternal: true,
    external: ['@tamagui/mdx'],
  },

  define: {
    'process.env.TAMAGUI_DISABLE_NO_THEME_WARNING': '"1"',
    'process.env.TAMAGUI_SKIP_THEME_OPTIMIZATION': '"1"',
  },

  plugins: [
    vxs({
      // setupFile: './config/setupTamagui.ts',

      server: {
        compression: true,
      },
    }),

    ViteImageOptimizer(),

    // removeReactNativeWebAnimatedPlugin(),

    tamaguiPlugin({
      optimize: true,
      disableServerOptimization: true,
      useReactNativeWebLite: process.env.NODE_ENV === 'production',
      components: ['tamagui'],
      config: './config/tamagui.config.ts',
      outputCSS: './app/tamagui.css',
      themeBuilder: {
        input: './config/themes.ts',
        output: './config/themesOut.ts',
      },
    }),
  ],
} satisfies UserConfig
