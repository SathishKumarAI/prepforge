---
qid: ing_dd1bc0119f__star__local
question: 'Explain: That would too complicated to run a — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 330
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:13-05:00'
sources: []
---

**Situation:**  
During my senior year capstone I was asked to present a full‑stack prototype for a location‑based service in the “Google Maps System Design” interview mock. The client wanted real‑time routing, traffic prediction, and offline map caching all in one microservice.

**Task:**  
I had to design an architecture that could handle millions of concurrent users while keeping latency under 200 ms and storage costs below $5k/month.

**Action:**  
I mapped out the data flow: ingesting GPS streams into a Kafka cluster, processing them with Spark Streaming for traffic heatmaps, then serving routes via a stateless Go service backed by Redis for caching and PostgreSQL for persistence. I added a CDN layer for static tiles and used protobufs to shrink payloads. After drafting this diagram, my team reviewed it; we discovered the real‑time analytics component would require a cluster of 10+ GPUs, pushing costs far beyond budget. We pivoted to pre‑computing most routes with a MapReduce job and only computing dynamic detours on demand.

**Result:**  
The revised design cut projected monthly spend from $18k to under $4k while keeping response times within 180 ms for 95% of requests. I learned that in system design, early cost–benefit analysis can prevent over‑engineering and keep the solution realistic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
