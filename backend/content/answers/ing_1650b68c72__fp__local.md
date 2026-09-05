---
qid: ing_1650b68c72__fp__local
question: 'Explain: Design a multi-provider LLM gateway: routing, fallbacks, and the
  pitfalls teams hit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 371
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:03-05:00'
sources: []
---

**Why we need a gateway**

When a product must tap multiple LLMs (OpenAI, Anthropic, local models), the *fundamental* problem is **service uncertainty**: latency spikes, quota limits, or policy shifts can suddenly silence one provider. A gateway turns this stochastic service environment into a deterministic interface by treating each model as an *option* in a portfolio.

**Routing logic**

1. **Primary choice** – pick the lowest‑cost, fastest model that satisfies the request’s constraints (token budget, safety filters).
2. **Fallback chain** – pre‑order alternatives ranked by similarity of output quality and cost.  
   The gateway re‑issues the same prompt to the next provider only if the primary fails *or* its response violates a hard rule (e.g., hallucination score > threshold).  
3. **Dynamic weight adjustment** – use reinforcement learning on historical latency/quality metrics to update the fallback priority, akin to bandit algorithms.

**Pitfalls**

- **State leakage**: earlier providers may have generated partial outputs that downstream models must avoid repeating; caching or context‑prefixing is required.
- **Cold start bias**: if a provider is rarely hit, its performance statistics become noisy, leading to suboptimal routing decisions.
- **Cost oscillation**: naive retry loops can cause cascading requests across providers, inflating bills.

**Non‑obvious insight**

Treat the gateway as an *online convex optimization* problem over the space of model probabilities. The optimal policy is not “always pick the cheapest” but a weighted mixture that minimizes expected cost under uncertainty, ensuring graceful degradation even when all providers temporarily fail. This perspective turns ad‑hoc retry logic into a principled, mathematically grounded system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
