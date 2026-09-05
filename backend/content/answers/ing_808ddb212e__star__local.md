---
qid: ing_808ddb212e__star__local
question: 'Explain: Assumptions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 392
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:31-05:00'
sources: []
---

**Situation**  
During a mock interview for a senior backend role at a tech startup, I was asked to outline the key assumptions for designing an Airbnb‑style marketplace system. The interviewer wanted to see how I would simplify a complex problem while still covering critical business and technical constraints.

**Task**  
I needed to articulate clear, realistic assumptions that would guide my architecture—covering user scale, data consistency, latency expectations, and cost boundaries—so the design could be evaluated on feasibility and trade‑offs.

**Action**  
I began by defining a “typical” traffic profile: 10 M active users, 1 M daily listings, and peak load of 200 k concurrent requests. I assumed eventual consistency for booking data to allow horizontal scaling, while enforcing strong consistency only on payment transactions via distributed two‑phase commit. Latency targets were set at <200 ms for search queries and <500 ms for booking confirmation. For cost, I capped the cloud spend at $5M/year, which led me to choose a microservice stack on Kubernetes with autoscaling, a Redis cache layer for hot data, and a PostgreSQL cluster for durable storage. I also assumed that third‑party services (payment gateways, email) would be rate‑limited but highly available.

**Result**  
The interviewer praised the balanced assumptions—realistic traffic numbers, clear consistency trade‑offs, and cost constraints that tied directly to architecture choices. My design was later used as a benchmark in our internal hiring process, and I received positive feedback on how the assumptions guided concrete, measurable decisions. From this exercise, I learned the importance of grounding system designs in explicit, data‑driven assumptions so stakeholders can validate feasibility early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
