module.exports = {
  apps: [{
    name: 'boganto-backend-dev',
    script: 'php',
    args: ['-S', '127.0.0.1:8000', 'server.php'],  // ✅ Localhost HTTP for development
    cwd: './backend',
    instances: 1,
    autorestart: true,
    watch: ['./'],
    watch_delay: 1000,
    ignore_watch: ['node_modules', 'uploads', 'logs', '.env'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    note: 'LOCAL DEVELOPMENT ONLY - Use Nginx for production'
  }]
}
