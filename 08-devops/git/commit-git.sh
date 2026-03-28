#!/usr/bin/env bash
set -euo pipefail

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "ERR: not a git repo"; exit 1; }
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo 'Usage: ./08-devops/git/commit-git.sh "message"'
  exit 1
fi

STAGE_ARGS=(
  "08-devops"
  "site"
)

git add -A -- "${STAGE_ARGS[@]}"

if git diff --cached --quiet; then
  echo "Aucun changement eligible a commit dans 08-devops ou site."
  git status -sb
  exit 1
fi

echo "Fichiers qui seront commit:"
git diff --cached --name-status
git commit -m "$MSG"
git status -sb
