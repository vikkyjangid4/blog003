#!/bin/bash
# Deploy script for Boganto Blog Backend
# This script should be run on the production server

set -e  # Exit on any error

echo "=== Boganto Blog Backend Deployment ==="

# Create necessary directories
mkdir -p logs
mkdir -p uploads
mkdir -p cache

# Set proper permissions
chmod 755 logs
chmod 755 uploads
chmod 755 cache
chmod 644 *.php

# Create logs directory with proper permissions
touch logs/error.log logs/access.log logs/security.log
chmod 644 logs/*.log

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Test PHP setup
echo "✓ Backend directories created"
echo "✓ Permissions set"
echo "✓ Ready for Nginx/Apache"

# Instructions
echo ""
echo "=== NEXT STEPS ==="
echo "1. Configure Nginx/Apache (see NGINX_CONFIG.conf)"
echo "2. Set up SSL certificate (Let's Encrypt recommended)"
echo "3. Start PHP-FPM: systemctl start php-fpm"
echo "4. Start Nginx: systemctl start nginx"
echo "5. Test: curl https://boganto.com/api/blogs"
