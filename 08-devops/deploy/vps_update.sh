#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/opt/deploy/mavitrine-online"
BUILD_DIR="$REPO_DIR/site"
SITE_DIR="/var/www/mavitrine-online"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "ERR: repo introuvable dans $REPO_DIR"
  exit 1
fi

cd "$REPO_DIR"
git pull origin main

if [ ! -d "$BUILD_DIR" ]; then
  echo "ERR: dossier site introuvable dans $BUILD_DIR"
  exit 1
fi

mkdir -p "$SITE_DIR"

rsync -av --delete \
  --exclude=".git/" \
  --exclude=".DS_Store" \
  --exclude="Thumbs.db" \
  "$BUILD_DIR/" \
  "$SITE_DIR/"

echo "Deploiement termine dans $SITE_DIR"
