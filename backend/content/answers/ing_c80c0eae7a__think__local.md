---
qid: ing_c80c0eae7a__think__local
question: 'Explain: Python SDK Quick Start — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 508
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:09:08-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Explain what the “Python SDK Quick Start” section in the `comet-ml/opik` GitHub repo does, why it matters for LLM/RAG/agent workflows, and how to run it.  
- *Assumptions*: The reader knows Python basics, has a virtual environment, and wants to instrument an LLM app with Opik.

**2️⃣ Mental model / framework**  
1. **Contextualize**: Opik is a tracing & evaluation platform.  
2. **Identify core components**: SDK installation, initialization, data‑capture calls (`opik.track`, `opik.evaluate`), and dashboard integration.  
3. **Sequence of steps**: 1) Install, 2) Configure credentials, 3) Wrap your code, 4) Run, 5) Inspect results.

**3️⃣ Step‑by‑step reasoning**  
- Read the README for prerequisites (Python ≥3.9, pip).  
- `pip install opik-sdk`.  
- Create a `.env` file or set environment variables (`OPIK_API_KEY`, `OPIK_PROJECT`).  
- Import `opik` in your script; call `opik.init()` before any LLM calls.  
- Wrap the LLM inference with `@opik.track(...)` or manual `opik.capture`.  
- For evaluation, use `opik.evaluate(prediction, ground_truth)` inside a loop.  
- Run locally: `python app.py`; then open the Opik dashboard URL to see traces and metrics.

**4️⃣ Common traps to avoid**  
- Forgetting to set the API key → authentication errors.  
- Placing tracking after LLM calls → missing data.  
- Using old SDK version incompatible with repo examples.  
- Ignoring rate limits or token usage in production mode.

**5️⃣ Sanity‑check & communicate**  
- Verify that a trace appears within seconds on the dashboard.  
- Check logs for `opik` messages (e.g., “Tracking session started”).  
- Explain to the user: “After these steps, every inference will be automatically logged and you can compare model outputs against baselines right in the UI.”  

By following this structured approach, you’ll confidently set up Opik’s Python SDK quick start for any LLM‑centric project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
