console.log('Live reload is active!');
new EventSource('/esbuild').addEventListener('change', () => location.reload());
