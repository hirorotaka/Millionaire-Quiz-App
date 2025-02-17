import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 音声ファイルを含むアセットの処理設定を追加
  assetsInclude: ['**/*.mp3'],
  // ビルド時の設定
  build: {
    assetsInlineLimit: 0, // アセットを常に外部ファイルとして扱う
  },
  // 必要に応じてpublicDir設定も追加
  publicDir: 'public',
});
