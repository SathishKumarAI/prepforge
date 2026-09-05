---
qid: ing_12b0f21aa4__fp__local
question: 'Explain: API vs Self-Hosted — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 437
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:24-05:00'
sources: []
---

**API‑vs‑Self‑Hosted LLMs: a systems‑theoretic view**

At its core an LLM is a *probabilistic map* \(p(y|x)\) that assigns likelihoods to next tokens given input context. Deploying this map involves two orthogonal choices:

1. **API (cloud‑hosted)**  
   - The model’s parameters and inference engine live on provider servers.  
   - Your application sends a request, the provider runs the forward pass, returns the sampled text.  
   - *Why it works*: Centralised resources amortise expensive GPU/TPU costs across many tenants; providers can continuously optimise the inference pipeline (quantisation, caching) and update weights without user intervention.

2. **Self‑Hosted**  
   - You copy the model weights onto local hardware, run inference yourself.  
   - *Why it works*: Full control over data locality, compliance, and custom fine‑tuning; you bear the compute cost but gain freedom to experiment with novel architectures or pruning strategies that cloud APIs may forbid.

**Deeper principle: Latency–Cost Pareto frontier**  
The trade‑off is governed by a convex curve where moving left (lower latency) costs more compute, while moving down (cheaper) increases latency. Cloud APIs sit on the right‑most point of this frontier; self‑hosting can dip leftwards if you invest in high‑end GPUs or cluster optimisation.

**Non‑obvious insight**  
When fine‑tuning, *parameter sharing* across multiple task heads is cheaper to host locally than paying per‑head API calls. A single hosted model with multi‑task adapters can serve many downstream services at a fraction of the cost, yet still leverage the same inference engine that APIs expose.

In short: APIs offer elasticity and minimal ops overhead; self‑hosting gives you the knobs for latency, cost, and privacy—each choice reshapes the same underlying probabilistic engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
