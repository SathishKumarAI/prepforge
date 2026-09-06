---
qid: ing_f9760bed02__think__local
question: 'Explain: Run experiment — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 628
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:27:00-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
- Confirm that the user wants a *how‑to* explanation of running an AI evaluation experiment using **LangWatch** and **LangFuse**, not just a high‑level overview.  
- Assume they have a basic LangChain/LangGraph setup, Python 3.x, and access to the required libraries (`langwatch`, `langfuse`).  
- Note that “Ai Evals Complete Guide” likely refers to a structured workflow (data prep → evaluation → analysis).  

**2. Adopt a practical framework**  
1. **Environment & dependencies** – virtualenv/conda, install packages.  
2. **Data pipeline** – source prompts, ground truth, and expected metrics.  
3. **Model integration** – wrap the model in LangChain/LangGraph for consistent I/O.  
4. **LangWatch instrumentation** – capture logs, latency, token usage.  
5. **LangFuse evaluation** – send results to LangFuse, define scoring rules (accuracy, BLEU, etc.).  
6. **Result aggregation & reporting** – plot metrics, save CSV/JSON, generate dashboards.  

**3. Step‑by‑step reasoning**  
- *Set up*: create a project folder, `python -m venv`, activate, pip install.  
- *Data*: load prompts from JSONL or CSV; create `GroundTruth` class.  
- *Model wrapper*: instantiate LangChain chain, expose a `run(prompt)` method.  
- *LangWatch*: add middleware to the chain (`langwatch.middleware`) to log start/end times and token counts.  
- *Evaluation loop*: iterate prompts, get model output, compute metrics (e.g., exact match).  
- *Send to LangFuse*: use `langfuse.tracking` API to record each run with metadata.  
- *Analytics*: after all runs, pull data from LangFuse via its SDK or UI; generate plots with Matplotlib/Plotly.  

**4. Common pitfalls to avoid**  
- Forgetting to install the correct LangWatch version compatible with your LangChain release.  
- Not configuring API keys for LangFuse (env vars `LANGFUSE_SECRET_KEY`, etc.).  
- Mixing synchronous and asynchronous code—ensure consistent event loop usage.  
- Ignoring rate limits; throttle requests or batch evaluations.  

**5. Sanity‑check & communicate**  
- Run a single prompt first to confirm logs appear in LangWatch console.  
- Verify that the output is sent to LangFuse by checking the dashboard for a new run.  
- Explain each step verbally: “We start with data, wrap the model, instrument with LangWatch, evaluate via LangFuse, then aggregate.”  
- Encourage iterative testing: small dataset → full experiment.  

By following this scaffold, the user can confidently set up and execute a complete AI evaluation workflow using LangWatch for observability and LangFuse for structured scoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
