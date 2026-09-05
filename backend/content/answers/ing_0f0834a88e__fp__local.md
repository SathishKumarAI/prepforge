---
qid: ing_0f0834a88e__fp__local
question: 'Explain: A Three-Tier Fleet Strategy — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 397
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:37:31-05:00'
sources: []
---

### Why a **Three‑Tier Fleet** is inevitable for LLM deployment

At its core, serving large language models (LLMs) boils down to a *resource allocation* problem: you must map a stochastic stream of user requests onto hardware that can satisfy latency, throughput and reliability constraints while minimizing cost.  
1. **Cold‑start / bursty traffic** demands instant wake‑up—only the most powerful GPUs (Tier A) can satisfy sub‑100 ms SLAs.  
2. **Steady baseline load** is dominated by predictable, lower‑latency requests; a *middle* tier of mid‑range GPUs (Tier B) amortizes cost with just‑in‑time scaling.  
3. **Cold‑start / rare queries** can tolerate seconds of delay; inexpensive CPUs or edge TPUs (Tier C) handle these bursts cheaply.

This hierarchy is the optimal solution of a *convex resource‑cost minimization* where each tier’s marginal cost per inference rises with GPU speed, yet latency constraints impose hard upper bounds. The resulting allocation is a piecewise‑linear “water‑filling” policy: fill Tier C until its latency limit, then spill over to Tier B, finally exhausting Tier A only when the overall queue length exceeds a threshold.

**Non‑obvious insight:**  
The *shape* of the cost curve (not just the absolute prices) determines where the tier boundaries lie. A modest price hike on mid‑range GPUs can shift a large fraction of traffic from Tier B to Tier C, drastically reducing capital expenditure while only slightly increasing average latency—an effect that many overlook when focusing solely on per‑request pricing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
