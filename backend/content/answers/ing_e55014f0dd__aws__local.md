---
qid: ing_e55014f0dd__aws__local
question: 'Explain: Now coming to the non-functional requirements the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 409
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:29-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce startup I led the migration of our recommendation engine from an on‑prem Spark cluster to a fully managed Amazon SageMaker pipeline. The new system had to meet stringent non‑functional requirements: <1 s inference latency for 90 % of requests, 99.9 % availability during peak traffic (12M daily users), and cost per prediction ≤$0.001.

**Action**  
* **Design & Services** – I chose SageMaker Neo to compile models into optimized binaries for EC2‑C5g instances, coupled with a Lambda‑based API gateway that auto‑scales via Application Load Balancer.  
* **Scalability** – Implemented a two‑tier caching layer (Redis on ElastiCache) to serve the top 30 % of requests instantly, reducing SageMaker invocation load by ~70 %.  
* **Availability** – Deployed across three AZs with weighted routing and health checks; added CloudWatch alarms for cold starts (>200 ms) that triggered auto‑spin‑up of additional inference endpoints.  
* **Cost & Trade‑offs** – Leveraged Spot Instances for batch retraining jobs, saving 45 % on compute while keeping real‑time inference on On‑Demand to avoid latency spikes.

**Result**  
Achieved <0.8 s median latency and 99.95 % uptime during a 24‑hour traffic surge. Prediction cost dropped from $0.003 to $0.0007 per inference, cutting quarterly spend by $1.2M.  

*Leadership Principles:* **Customer Obsession** (delivering instant recommendations), **Ownership** (owning the end‑to‑end pipeline and cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
