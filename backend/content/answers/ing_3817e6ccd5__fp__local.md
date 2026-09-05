---
qid: ing_3817e6ccd5__fp__local
question: 'Explain: Cold starts and scale-to-zero — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 361
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:03:30-05:00'
sources: []
---

**Cold starts & scale‑to‑zero in an LLM gateway**

At its core, a gateway is a *stateless* request router that hands off tokens to one of many model replicas. Each replica must be **warm**: the deep neural net, its weights, and all GPU/TPU buffers need to be resident in memory for inference latency to stay below the SLA.

A **cold start** occurs when a replica is spun up (or re‑created) after being idle or destroyed. The time to load weights from persistent storage and build the execution graph dominates the first request’s latency. From an optimization standpoint, we’re trading *latency* for *resource cost*: keeping replicas warm guarantees low latency but incurs constant GPU/CPU bill; tearing them down saves money but introduces a variable latency tail.

**Scale‑to‑zero** is the policy that automatically kills idle replicas when traffic drops to zero. It’s an application of *dynamic resource allocation* in queuing theory: if the arrival rate λ < μ (service rate), the expected queue length tends toward zero, so we can safely reduce capacity. The non‑obvious insight is that, for LLMs, the *cold‑start cost* itself can be amortized over a burst of requests by keeping a “warm pool” of replicas at a minimal size—essentially a **micro‑cache** of preloaded weights. This balances SLA guarantees with cost efficiency and reflects the underlying principle that inference latency is bounded not just by compute but by data movement (weight loading).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
