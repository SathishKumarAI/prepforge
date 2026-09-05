---
qid: ing_062c0aa9fc__fp__local
question: 'Explain: High-Level System Design — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 394
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:49-05:00'
sources: []
---

**Why a “ChatGPT” stack must look this way**

At its core the service is *sequence‑to‑sequence inference* on a gigantic transformer.  
The fundamental problem: given an input prompt \(x\), produce a coherent token stream \(y\) that satisfies user intent while respecting safety, latency and cost constraints.  

1. **Model tier** – A single large‑scale language model (LLM) is the engine; it embodies a learned probability distribution \(P(y|x)\).  
2. **Serving tier** – To meet real‑time demands, we shard inference across GPU nodes, each hosting replicated model checkpoints. Requests are batched and routed via a load balancer that optimizes for *queue latency* (minimizing tail latency) rather than throughput alone.  
3. **Control & safety tier** – A lightweight policy network or rule engine sits atop the LLM to filter outputs, enforce content guidelines, and manage user‑specific context.  
4. **Observability tier** – Metrics (token counts, latency, error rates) feed back into auto‑scaling policies; logs are indexed for drift detection.

The architecture is an *information‑theoretic* trade‑off: we compress the LLM’s knowledge into a distributed inference graph that maximizes effective throughput \(C = \frac{B}{L}\), where \(B\) is batch size and \(L\) latency.  

**Non‑obvious insight:** The safety layer must be *probabilistic*, not deterministic. Treating policy checks as a stochastic gate (e.g., sampling from a calibrated confidence distribution) preserves the LLM’s expressive power while still bounding harmful outputs, unlike hard cut‑offs that can induce brittleness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
