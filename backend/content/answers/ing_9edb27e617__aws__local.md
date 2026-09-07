---
qid: ing_9edb27e617__aws__local
question: 'Explain: Forces — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:52-05:00'
sources: []
---

**Situation / Task**  
At my previous startup we built a recommendation engine for a multi‑tenant e‑commerce platform. The monolith’s single PostgreSQL instance grew to 10 TB and caused latency spikes during promotion launches, hurting the *Customer Obsession* goal.

**Action**  
I championed a **database‑per‑service** pattern: each microservice owns its own Aurora Serverless cluster (PostgreSQL) and exposes data via a REST/GraphQL API.  

- **AWS services:** Amazon Aurora Serverless v2 for elastic scaling, AWS App Mesh for secure inter‑service communication, DynamoDB for high‑throughput lookup tables, CloudWatch + X-Ray for observability.  
- **Design choices:**  
  - *Scalability:* Aurora’s on‑demand capacity eliminated contention; each tenant’s write traffic is isolated.  
  - *Availability:* Multi‑AZ replicas and automatic failover keep SLA > 99.999%.  
  - *Cost:* Serverless billing + per‑request pricing cut database spend by **35%** during off‑peak periods.  
  - *Trade‑offs:* Added operational overhead; mitigated with Terraform IaC and automated backups.

**Result**  
After deployment, query latency dropped from 350 ms to < 30 ms (90th percentile), and promotion‑time traffic handled a 4× surge without throttling. Revenue uplift of **12%** in the first quarter was directly attributable to faster recommendations.

**Bar‑raiser takeaways**  
- Demonstrated *Ownership* by driving cross‑team buy‑in.  
- Showed *Dive Deep* through performance benchmarks and cost analysis.  
- Quantified impact (latency, cost, revenue).  
- Learned from initial rollback of a single‑tenant DB: emphasized clear data ownership boundaries to prevent “shared‑state” bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
