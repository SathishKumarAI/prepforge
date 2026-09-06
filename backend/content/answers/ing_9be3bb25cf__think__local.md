---
qid: ing_9be3bb25cf__think__local
question: 'Explain: Setting Up Phoenix (Open-Source, Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 724
total_tokens: 916
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:28-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
- *What is “Phoenix” exactly?* In the AI context it usually refers to the open‑source, self‑hosted platform for building and deploying conversational agents (often built on top of LangChain or similar).  
- *Assumptions:* The user has basic Linux/Unix knowledge, a server (or local VM), and wants to run Phoenix without cloud services.  
- *Deliverable:* A step‑by‑step guide that covers prerequisites, installation, configuration, and a minimal demo.

**2️⃣ Adopt the “Setup → Configure → Test” mental model**  
- **Setup:** OS & dependencies, networking, firewall.  
- **Configure:** Clone repo, set environment variables, database migration, API keys.  
- **Test:** Run dev server, verify endpoints, run a sample chat.

**3️⃣ Reason through each phase**

| Phase | Key actions | Why it matters |
|-------|-------------|----------------|
| *Setup* | • Install Python 3.10+, Node.js, Docker (optional). <br>• Ensure `git`, `pip`, `npm` are present. <br>• Configure reverse proxy (NGINX) and SSL if exposing publicly. | Provides the runtime environment; secure networking is critical for self‑hosted deployments. |
| *Configure* | • `git clone https://github.com/yourorg/phoenix.git` <br>• Create `.env` from `.env.example`. <br>• Set `DATABASE_URL`, `OPENAI_API_KEY`, `MODEL=llama3.1`, etc. <br>• Run migrations (`python manage.py migrate`). | Establishes database, secrets, and model bindings; migrations ensure schema consistency. |
| *Test* | • Start dev server (`uvicorn app.main:app --reload`). <br>• Use Postman or curl to hit `/chat` endpoint. <br>• Verify logs show token usage, no errors. | Confirms the stack is wired together correctly and can process a request. |

**4️⃣ Avoid common pitfalls**

- **Missing dependencies:** Forgetting `ffmpeg` for audio or `redis` for caching leads to runtime failures.  
- **Wrong Python version:** Phoenix often requires 3.10+; using 3.8 will break imports.  
- **Environment variable typo:** A misspelled key (e.g., `OPENAI_API_KEY`) means the model won’t authenticate.  
- **Database not migrated:** Running the app before migrations causes “no such table” errors.  
- **Port conflicts:** Default ports 8000/8501 clash with other services; adjust or use Docker compose.

**5️⃣ Sanity‑check & communicate**

- *Run a quick sanity test:* Send a simple prompt and inspect the JSON response for `choices[0].message.content`.  
- *Explain each step aloud:* “We’re cloning the repo to get the source code… Then we set up the environment variables so the app knows where the database is and how to authenticate with OpenAI.”  
- *Summarize outcomes:* “After these steps, you should see a running Phoenix instance on `http://localhost:8000` that can accept chat messages via the `/chat` endpoint.”

Follow this structured flow, double‑check each dependency, and you’ll have a fully functional self‑hosted Phoenix ready for AI experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
