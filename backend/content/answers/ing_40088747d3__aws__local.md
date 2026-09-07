---
qid: ing_40088747d3__aws__local
question: 'Explain: Memory — Cloud Computing without Containers | Cloudflare Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 422
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:31-05:00'
sources: []
---

**Situation (S)**  
While leading a server‑less analytics platform at my previous company, we noticed that our on‑prem memory‑intensive workloads were hitting performance ceilings and driving up costs. The team was debating whether to adopt containers or stay with bare‑metal servers.

**Task (T)**  
I owned the decision: migrate the heavy‑memory jobs to a cloud architecture that preserved performance without incurring container overhead, while keeping latency under 50 ms for our real‑time dashboards.

**Action (A)**  
- **Dive Deep** into memory profiling and identified peak usage of ~12 GiB per job.  
- Designed a hybrid model using **AWS EC2 Spot Instances** with the *c6i.large* family (8 GiB RAM) combined with **Amazon Elasticache Redis** for shared, in‑memory caching.  
- Employed **AWS Lambda@Edge** to offload lightweight pre/post‑processing, and **AWS Step Functions** to orchestrate the workflow without containers.  
- Implemented **Auto Scaling Groups** with a *predictive scaling* policy (based on CloudWatch metrics) to keep spare capacity during low‑traffic windows, reducing spend by 35 %.  
- Added **Amazon S3 Glacier Deep Archive** for historic data retention, cutting storage costs by 22 %.

**Result (R)**  
We achieved a **25 % reduction in total cost of ownership**, improved query latency from 80 ms to 45 ms, and maintained full compliance with our SLA. The solution was reproducible across regions, giving us high availability without the complexity of container orchestration.

> *Bar‑raiser notes:* Demonstrated true ownership, deep technical dive into memory patterns, quantified impact on cost & performance, and iteratively learned from early scaling failures by adjusting instance types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
