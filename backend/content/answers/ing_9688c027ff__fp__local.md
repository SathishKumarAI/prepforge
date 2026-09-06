---
qid: ing_9688c027ff__fp__local
question: 'Explain: Real-time cost tracking — Pydantic Logfire: AI Observability for
  LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 496
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:37-05:00'
sources: []
---

**Why we need it**

An LLM or a Retrieval‑Augmented Generation (RAG) app is an *information‑processing pipeline* whose throughput is bounded by two resources: compute tokens and memory.  
The **fundamental problem** is that each token processed incurs a monetary charge that depends on the model’s pricing tier, the number of API calls, and any internal caching or batching.  In production, this cost must be known *instantaneously* so that budgets can be enforced, alarms raised, and optimisation decisions (e.g., “switch to GPT‑4o” vs. “use cached embeddings”) are data‑driven.

**How it works**

1. **Instrumentation layer** – Every API call is wrapped in a Pydantic model (`LogfireEvent`) that records:
   * request size (input tokens)
   * response size (output tokens)
   * timestamps
   * endpoint and model name

2. **Real‑time aggregation** – Logfire streams these events to an observability backend (e.g., Loki, OpenTelemetry).  
   A lightweight aggregator computes the running sum of tokens per minute and multiplies by the current per‑token price.

3. **Cost model** – The cost function \(C(t) = \sum_i p_i \cdot (in_i + out_i)\) where \(p_i\) is the token rate for model *i*.  
   Because pricing can change (e.g., promotional rates), the aggregator pulls the latest `price_list` from the provider’s API, ensuring that \(C(t)\) reflects real‑world charges.

**Non‑obvious insight**

Most observability tools treat cost as a post‑hoc metric.  By embedding *token counts* directly into the event schema, we convert every inference into a *first‑class observable*.  
This enables **predictive budgeting**: if an incoming request will exceed a pre‑set threshold (e.g., “don’t let this query use more than 200 k tokens in a day”), Logfire can abort or throttle it before the provider bills.  
Thus, real‑time cost tracking is not just reporting—it becomes a proactive control loop that aligns application behaviour with financial constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
