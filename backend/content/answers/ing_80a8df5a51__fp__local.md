---
qid: ing_80a8df5a51__fp__local
question: 'Explain: Use at runtime — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 428
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:48-05:00'
sources: []
---

### Why “Use‑at‑Runtime” AI Evaluations Matter  

When an LLM is deployed in a production loop (chatbot, recommendation engine, etc.), the **goal** is not merely to generate text but to *safely* steer that text toward business objectives—accuracy, safety, fairness. Traditional offline benchmarks miss the dynamics of real‑time interaction: latency constraints, user‑feedback loops, and distribution shift.  
At runtime we therefore need an **online evaluation engine** that continuously measures performance metrics on live traffic, feeds back to the model, and triggers alerts or retraining when drift occurs.

### The Langwatch / Langfuse Stack  

1. **Langwatch** is a lightweight observability layer for LLM calls: it injects instrumentation into each prompt‑generation step, capturing latency, token counts, and raw outputs without altering business logic.  
2. **Langfuse** consumes those traces, applies *evaluation templates* (e.g., BLEU, ROUGE, custom safety checks) in real time, and aggregates results into dashboards or alerts.

The mathematical backbone is a *streaming estimator*: for metric M we maintain a running mean \(\bar M_t\) and variance \(s^2_t\) using Welford’s algorithm. This guarantees O(1) update cost per request while preserving numerical stability—essential when thousands of calls arrive per second.

### Non‑Obvious Insight  

Many practitioners treat evaluation as a downstream batch job, but **online scoring actually reduces total cost**. By detecting drift early, you can stop over‑training or unnecessary inference on stale models, saving compute and preventing degraded user experience. In practice, the latency added by Langwatch/Langfuse is < 5 ms per request—negligible compared to model inference time—yet it unlocks *continuous feedback* that offline tests can never provide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
