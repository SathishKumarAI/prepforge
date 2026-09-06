---
qid: ing_eb08d82f1a__fp__local
question: 'Explain: 1️⃣ Create new project — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 342
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:33-05:00'
sources: []
---

**Why create a brand‑new repo?**  
Every open‑source AI stack starts as a *concatenation problem*: developers need to chain together an LLM, telemetry, prompt templates, and evaluation data, but the glue is missing or proprietary. By spawning a fresh GitHub project we can formalise this glue, expose a clean API, and let the community iterate on the same contract.

**How it must work**  
1. **Schema‑first design** – Define JSON/YAML models for prompts, datasets, and metrics so that any downstream tool (LangChain, LiteLLM) can serialise without friction.  
2. **Observability plumbing** – Wire OpenTelemetry at every boundary: token usage, latency, error rates. This turns raw logs into a *single source of truth* for model health.  
3. **Evaluation engine** – Build a lightweight, pluggable scorer that accepts any metric (BLEU, ROUGE, custom) and returns reproducible scores.  
4. **Playground + Prompt store** – Provide an in‑browser UI that persists prompt templates to the repo’s Git tree, enabling version control of conversational flows.

**Non‑obvious insight**  
By treating *prompt templates* as first‑class Git objects (commits, branches), we unlock *semantic versioning for conversations*: a change in wording can be tracked, merged, and rollbacked exactly like code. This aligns human language evolution with software engineering discipline—something most AI libraries overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
