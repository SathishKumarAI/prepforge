---
qid: ing_74495ecd69__faang__local
question: 'Explain: Your LLM bill tripled this quarter. Design a cost-engineering
  programme - attribution, cascades, context management.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 471
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:54-05:00'
sources: []
---

**Clarify**

The client’s LLM spend has surged 3× this quarter.  
Assumptions to verify:  
1. Billing is based on token usage (inference & training).  
2. The model mix and deployment topology (on‑prem vs cloud) are known.  
3. SLA requirements (latency, availability) must be maintained.

**Approach**

1. **Attribution** – instrument every inference to capture request size, prompt length, chosen engine, and context reuse.  
2. **Cascades** – build a tiered model hierarchy: small‑capability models for low‑value queries, larger ones only when needed.  
3. **Context Management** – cache embeddings and conversation turns; purge stale sessions to avoid repeated token consumption.

**Depth**

*Instrumentation:* Add middleware that tags each request with `prompt_tokens`, `response_tokens`, `model_type`, and `session_id`. Push metrics to a time‑series DB (e.g., Prometheus).  
*Cascading logic:* Route a query first to the “light” model; if confidence < threshold or SLA breached, re‑route to a heavier model. Use A/B testing to calibrate thresholds.  
*Context reuse:* Store recent prompt–response pairs in Redis with LRU eviction. For follow‑ups, prepend cached context instead of full conversation each time. This cuts token count by ~30‑50 % for multi‑turn interactions.  
*Billing analysis:* Aggregate metrics quarterly; compute cost per user segment and per model tier to pinpoint leaks.

**Edge Cases**

- High‑volume bursts could overload the light tier → auto‑scale.  
- Cached context may become stale → implement TTL or versioning.  
- Multi‑tenant workloads might leak data if cache is shared → isolate per tenant.

**Optimize & Communicate**

Present a dashboard showing real‑time token‑to‑cost ratios and predicted savings from cascades. Recommend a pilot of the cascade logic on 10 % traffic; measure 20 % cost reduction with < 1 ms latency impact. Emphasize that this framework is data‑driven, modular, and aligns with SLA commitments while enabling continuous refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
