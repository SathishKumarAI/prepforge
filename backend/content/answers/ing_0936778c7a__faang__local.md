---
qid: ing_0936778c7a__faang__local
question: 'Explain: Local setup 💻 — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 565
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:05:55-05:00'
sources: []
---

**1️⃣ Clarify**  
You want a quick walkthrough of the *local* environment for **langwatch/langwatch**, an open‑source platform that lets you evaluate large language models (LLMs) and run AI agents.  
Assumptions:  
- You have `git`, `Python 3.9+`, and Docker installed.  
- You plan to run a single LLM locally (e.g., GPT‑4 via OpenAI API or an open‑source model).  

**2️⃣ Approach**  
1. Clone the repo.  
2. Create/activate a virtualenv, install deps.  
3. Configure API keys / model endpoints in `.env`.  
4. Spin up any required services (e.g., PostgreSQL, Redis) via Docker Compose.  
5. Run migrations and launch the web UI (`uvicorn`).  

**3️⃣ Depth**  
```bash
# 1. Clone & init
git clone https://github.com/langwatch/langwatch.git
cd langwatch

# 2. Virtualenv
python -m venv .venv && source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# 3. Env vars (example)
cp .env.example .env
# Edit .env: OPENAI_API_KEY=..., MODEL_ENDPOINT=http://localhost:8000/v1/chat/completions

# 4. Docker services
docker compose up -d db redis

# 5. Migrations & launch
alembic upgrade head   # if using Alembic for DB migrations
uvicorn src.main:app --reload
```
*Complexity*: O(1) per request; local LLM inference dominates CPU/GPU cost.  

**4️⃣ Edge Cases**  
- Missing Docker images → `docker compose pull`.  
- Port conflicts (default 8000, 5432, 6379).  
- Insufficient GPU memory for large models – fall back to a smaller checkpoint or remote API.  
- `.env` mis‑typed keys cause authentication failures; validate with a quick script.  

**5️⃣ Optimize & Communicate**  
For production, swap Docker Compose with Kubernetes, add caching (Redis), and scale workers horizontally. I’d narrate the setup as: *“We spin up a containerized DB/queue stack, seed the schema, then launch an ASGI app that proxies LLM calls to either our local model or an external API.”* This showcases clear reasoning, technical depth, and awareness of scalability concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
