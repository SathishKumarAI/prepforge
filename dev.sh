#!/usr/bin/env bash
# Start PrepForge backend + frontend together. Ctrl-C stops both.
# Works from Git Bash on Windows too: a venv there is .venv/Scripts, not .venv/bin.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

PY="$(command -v python3 || command -v python)"
[ -n "$PY" ] || { echo "No python on PATH."; exit 1; }

VENV="$ROOT/backend/.venv"
# Resolve the venv's script directory *after* any creation — it differs by platform.
venv_bin() { [ -d "$VENV/bin" ] && echo "$VENV/bin" || echo "$VENV/Scripts"; }

cd "$ROOT/backend"
if [ ! -d "$VENV" ]; then
  "$PY" -m venv "$VENV"
  "$(venv_bin)/pip" install -r requirements.txt
fi
BIN="$(venv_bin)"
[ -x "$BIN/uvicorn" ] || [ -x "$BIN/uvicorn.exe" ] || {
  echo "uvicorn missing in $BIN — run: '$BIN/pip' install -r requirements.txt"; exit 1;
}

# 8787, not 8000 — frontend/vite.config.ts proxies /api to the same port, and
# reads the same variable. Override both at once when 8787 is unusable:
#   PF_API_PORT=8788 ./dev.sh
# On Windows a listening socket can outlive its process, and then the port stays
# taken until a reboot; that is what this exists for.
API_PORT="${PF_API_PORT:-8787}"
"$BIN/uvicorn" main:app --reload --port "$API_PORT" &
BACK=$!

cd "$ROOT/frontend"
[ -d node_modules ] || npm install
export PF_API_PORT="$API_PORT"
# Vite picks the next free port if 5173 is taken — read the URL it prints.
npm run dev &
FRONT=$!

trap 'kill $BACK $FRONT 2>/dev/null || true' INT TERM
wait
