---
qid: ing_0936778c7a__think__local
question: 'Explain: Local setup 💻 — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 595
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:19:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “Local setup” referring to?*  
  Assume the user wants instructions on how to run **langwatch** locally from its GitHub repo.  
- *Audience level:* Some familiarity with command‑line tools but not deep dev experience.  
- *Environment constraints:* Likely a Unix‑like system (Linux/macOS) with Python available; if Windows, mention WSL.

**2️⃣ Mental model / framework**

Use the classic **“Goal → Constraints → Steps”** pattern:

1. Goal: Install and run langwatch locally.  
2. Constraints: Dependencies (Python 3.x, pip), optional GPU usage, network access for LLM APIs.  
3. Steps: Clone repo → Create virtual environment → Install requirements → Configure API keys → Run tests / demo.

**3️⃣ Reasoning step‑by‑step**

1. **Clone the repository** – explain `git clone https://github.com/langwatch/langwatch.git`.  
2. **Navigate into the folder** – `cd langwatch`.  
3. **Create & activate a virtual environment** – show both `python -m venv .venv` and activation commands for different shells.  
4. **Install dependencies** – `pip install -r requirements.txt`; mention optional GPU extras (`torch==...+cu118`).  
5. **Set up configuration** – copy `.env.example` to `.env`, edit API keys (OpenAI, Anthropic, etc.).  
6. **Run the test harness** – `python -m langwatch.run_tests` or a specific demo script.  
7. **Optional: Run the web UI / agent tests** – explain `streamlit run app.py` if applicable.

Include quick troubleshooting tips: missing Python version, pip not found, network blocks.

**4️⃣ Common traps & how to avoid them**

- *Assuming global Python installation is fine*: remind to use a virtual environment.  
- *Forgetting to activate the env before installing*: show activation step explicitly.  
- *API key mis‑placement*: emphasize `.env` and not committing keys.  
- *GPU vs CPU mismatch*: warn if CUDA drivers aren’t installed but GPU extras are requested.

**5️⃣ Sanity‑check & communication**

- Run through a quick mental “dry run” of the commands on your own machine to ensure syntax is correct.  
- Summarize each step with a one‑sentence takeaway so the user can verbalize it: “Clone, env, install, configure, run.”  
- Offer a concise FAQ snippet at the end for common errors (e.g., “Why does `pip install` fail?”).  

This structured approach lets you explain the local setup cleanly while anticipating pitfalls and making the process reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
