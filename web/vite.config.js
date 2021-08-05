import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const port = process.env.VITE_PROXY_TYPE === 'https' ? 443 : 3000;

  if (command === 'build') {
    return defineConfig({
      plugins: [reactRefresh()],
    });
  } else {
    return defineConfig({
      plugins: [reactRefresh()],
      server: {
        host: '0.0.0.0',
        watch: {
          usePolling: true,
        },
        hmr: {
          port,
        },
      },
      envDir: __dirname + '..',
    });
  }
};
