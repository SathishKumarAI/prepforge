#!/usr/bin/env bash
# Start PrepForge backend + frontend together. Ctrl-C stops both.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$ROOT/backend"
[ -d .venv ] || { python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt; }
./.venv/bin/uvicorn main:app --reload --port 8000 &
BACK=$!

cd "$ROOT/frontend"
[ -d node_modules ] || npm install
npm run dev &
FRONT=$!

trap 'kill $BACK $FRONT 2>/dev/null || true' INT TERM
wait
