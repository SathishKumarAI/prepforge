---
qid: ing_3776d2560c__faang__local
question: Your platform must support multiple LLM providers, including deployments
  in restricted environments where only some models are available. How do you architect
  model selection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 494
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:57-05:00'
sources: []
---

**Clarify**  
We need a runtime that can pick the best available LLM per request while honoring *environment constraints* (e.g., on‑prem, edge) and *provider policies*.  
Assumptions:  
1. Each provider exposes a uniform API or we have adapters.  
2. Constraints are static per environment but may change at deploy time.  
3. We can query providers for model health/latency.

**Approach**  
1. **Metadata registry** – store per‑environment capabilities (supported models, quotas, latency SLA).  
2. **Policy engine** – encode business rules (e.g., prefer GPT‑4 if available, fallback to Claude‑3).  
3. **Dynamic scoring** – combine metadata + real‑time telemetry (latency, error rate) into a score per model.  
4. **Selection service** – given a request, the policy engine queries the registry, scores candidates, and returns the top choice.

**Depth**  
- Registry: key = environment ID, value = set of `{model_id, provider, max_tokens, cost}`.  
- Policy engine: rule‑based (e.g., “if model in env & latency < 200ms → choose”) plus machine‑learning fallback for fine‑grained ranking.  
- Selection service is stateless; it pulls latest telemetry from a lightweight metrics store (Prometheus or an internal cache).  
Complexity: O(n) per request where *n* = number of candidate models in the environment (typically <10).  
Trade‑offs: Centralized registry simplifies updates but adds a single point of failure; mitigated by eventual consistency and local caching.

**Edge Cases**  
- No model satisfies constraints → return a clear error or route to a default safe model.  
- Rapid provider outages → metrics lag → fallback to last known good score.  
- Mixed‑model requests (e.g., few-shot prompt requiring larger context) → policy must consider token limits.

**Optimize & Communicate**  
Introduce **adaptive learning**: periodically retrain the scoring model on observed latency/cost outcomes.  
Explain architecture in a diagram, highlight how the selection service decouples from provider APIs, and stress that adding new providers only requires updating the registry and adapters—no code change downstream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
