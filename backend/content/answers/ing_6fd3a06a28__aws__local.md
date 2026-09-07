---
qid: ing_6fd3a06a28__aws__local
question: What is Database Sharding? — A Crash Course on Database Sharding
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 522
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:53-05:00'
sources: []
---

**What is database sharding?**  
In my last role I led the migration of a 2‑TB monolithic user table into a horizontally partitioned architecture—essentially what we call *sharding*. The goal was to keep query latency under 50 ms for 99.9% of traffic while allowing us to scale out without hitting MySQL’s row‑limit wall.

**Situation / Task**  
We had >30 M active users, and the single instance hit a 10 s read latency spike during peak hours. I owned the redesign, choosing sharding as the most cost‑effective solution (vs vertical scaling or moving to a NoSQL store).

**Action**  
1. **Define shard key** – chose `user_id` hash modulo 64 to evenly spread load.  
2. **Design** – each shard was an RDS MySQL instance behind an Application Load Balancer that routed by hash.  
3. **Automation** – used Terraform + AWS CloudFormation to provision, patch and snapshot shards automatically.  
4. **Failover** – enabled Multi‑AZ for each shard; the ALB handled failover with health checks.  
5. **Monitoring** – CloudWatch metrics (latency, CPU) fed into an SNS alarm that triggered a Lambda to auto‑scale read replicas when needed.

**Result**  
- Query latency dropped from 10 s to <30 ms for 99.9% of requests.  
- Read throughput increased by 12× without any overprovisioning.  
- Operational cost fell 18% because we could use smaller instance types per shard instead of a single large one.

**AWS services used:** RDS, ALB, CloudWatch, Lambda, Terraform (IaC).  

**Leadership Principles highlighted**  
- **Ownership** – I drove the end‑to‑end solution and maintained responsibility for uptime.  
- **Dive Deep** – I analysed query plans, shard hit rates, and failure modes to fine‑tune distribution.  
- **Bias for Action** – Deployed a pilot in 2 weeks, then rolled out globally within a month.

**Bar‑raiser takeaways**  
- Quantified impact (latency & cost) shows ownership.  
- Deep dive into shard key choice and scaling strategy demonstrates technical depth.  
- Reflecting on the initial latency spike as a learning point illustrates continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
