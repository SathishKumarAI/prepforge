---
qid: ing_3d3eb9e46b__star__local
question: 'Explain: Run on dataset — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 385
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:40-05:00'
sources: []
---

**Situation** – In a recent sprint I was tasked with validating the safety of our new language‑model API before it hit production. The team had already built an internal evaluation framework, but we needed a repeatable way to run thousands of test prompts and capture detailed metrics across different model versions.

**Task** – My goal was to set up an end‑to‑end pipeline that could automatically execute the evals on our curated dataset, store results in a central dashboard, and flag any regressions or safety violations. I also had to make sure the process was lightweight enough for nightly runs without overloading the GPU cluster.

**Action** – I chose Langwatch as the orchestrator: it lets you define evaluation jobs declaratively in YAML, pulls prompts from our shared dataset, sends them to the model via the API, and streams raw responses back. For telemetry, I integrated Langfuse—its real‑time event tracking captures each prompt/response pair, latency, token usage, and custom safety tags. I wrote a small Python wrapper that feeds the Langwatch job config into our CI pipeline, then pushes the aggregated results to a Grafana dashboard using Langfuse’s REST API. We also added an automated Slack alert if any safety score dropped below 0.8.

**Result** – The new pipeline processed 12,000 prompts per run in under 30 minutes, with latency metrics dropping by 15% after the GPU tuning tweak I introduced. Our safety flagging rate improved from 2.3 % to 0.4 %. I learned that coupling Langwatch’s declarative job system with Langfuse’s fine‑grained event logging gives a transparent, auditable eval process that scales with model iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
