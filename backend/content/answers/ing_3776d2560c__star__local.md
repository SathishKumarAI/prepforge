---
qid: ing_3776d2560c__star__local
question: Your platform must support multiple LLM providers, including deployments
  in restricted environments where only some models are available. How do you architect
  model selection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 302
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:10-05:00'
sources: []
---

**Situation:** In my last role I built a recommendation engine that had to run on both cloud and edge devices for a fintech client. The cloud could pull any OpenAI or Anthropic model, but the edge boxes were limited to only a distilled GPT‑4 variant due to licensing restrictions.

**Task:** I needed a dynamic model‑selection layer so that every user request automatically hit the best available LLM without manual reconfiguration, while respecting device constraints and SLA targets (≤ 200 ms latency).

**Action:** I designed a lightweight “Model Registry” microservice. It stores metadata per provider: token cost, inference latency, context window, and availability flag. A policy engine uses this registry to rank models for each request type. For edge requests the engine filters out non‑edge‑compatible providers; for cloud it picks the lowest‑cost model that meets a 1 second latency budget. I exposed an HTTP/JSON API with a tiny client SDK that caches the chosen model per user session, reducing lookups to <5 µs. The registry auto‑updates via webhook hooks from each provider’s health endpoint.

**Result:** Deployment cut average inference cost by 32% and maintained 95th‑percentile latency under 180 ms across both environments. I learned that coupling a declarative registry with an adaptive policy engine gives the flexibility to handle heterogeneous LLM ecosystems without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
