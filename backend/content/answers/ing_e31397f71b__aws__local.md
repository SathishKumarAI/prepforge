---
qid: ing_e31397f71b__aws__local
question: 'Explain: Q118: Your agent platform runs 40-step tasks on a single frontier
  provider. That provider just logged four outages in four days. Design for provider
  failure.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 430
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:46-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading the architecture for a multi‑step AI agent platform that executed 40‑stage workflows on a single frontier provider (e.g., an external NLP API). The provider logged four outages in four days, jeopardizing SLA (99.9%) and customer experience.

**Action (A)**  
1. **Ownership & Customer Obsession** – I immediately scoped a failover strategy that kept the platform running without user‑visible lag.  
2. **Dive Deep into Failure Modes** – Logged provider latency, error codes, and retry patterns; discovered 3 ms per request was the bottleneck.  
3. **Design** –  
   * **Multi‑Provider Mesh**: Introduced a fallback provider (another LLM API) via an API Gateway routing layer with weighted traffic (80/20).  
   * **Circuit Breaker & Bulkheading** in Lambda to stop cascading failures.  
   * **Stateful Orchestration** in Step Functions, persisting intermediate results in DynamoDB so partial progress isn’t lost.  
4. **Bias for Action** – Deployed the new architecture within 12 hrs; automated monitoring (CloudWatch alarms) triggered auto‑scale on Lambda concurrency.

**Result (R)**  
- Outage‑induced downtime dropped from 3 h/month to < 30 s over the next quarter.  
- Customer satisfaction scores improved by **15 pts** (CSAT 92→107).  
- Cost increased only 4 % because the fallback provider is used sparingly; Lambda’s pay‑as‑you‑go model kept overhead low.

**Bar‑raiser notes** – I demonstrated end‑to‑end ownership, quantified impact with real metrics, and learned from failure by turning a single point of failure into a resilient, cost‑efficient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
