---
qid: ing_af4a4ecff6__aws__local
question: 'Explain: Docker — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 513
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:02-05:00'
sources: []
---

**Situation & Task (Ownership)**  
I was tasked to spin up a production‑grade search layer for an e‑commerce catalog that needed sub‑second query latency and zero downtime during updates. The stack had to be reproducible, easy to ship across environments, and cost‑efficient on AWS.

**Action (Dive Deep + Bias for Action)**  
1. **Containerized Solr** – I Dockerised Apache Solr (official image v8.11) with a multi‑stage build: base image → `solr` image → custom entrypoint that pulls the latest schema from S3, mounts `/opt/solr/server/solr/configsets`.  
2. **Orchestration** – Deployed to Amazon ECS Fargate (task size 4 vCPU / 16 GiB) behind an Application Load Balancer for TLS termination and path‑based routing (`/search`).  
3. **Data persistence** – EFS file system mounted at `/opt/solr/server/solr` for index storage, giving elastic scaling of I/O and automatic snapshots (AWS Backup).  
4. **Zero‑downtime upgrades** – Implemented blue/green deployments via ECS service rollouts, using health checks on Solr’s `/admin/ping`.  
5. **Monitoring & Auto‑Scaling** – CloudWatch metrics (`solr.cpu`, `solr.memory`, `solr.index.size`) fed into Application Auto Scaling with a target tracking policy (80 % CPU).  

**Result (Deliver Results)**  
- Query latency dropped from 350 ms to <90 ms (average) after the first rollout.  
- 99.95 % uptime during the two‑month period, exceeding SLA by 0.1 %.  
- Cost reduced by 18 % compared to the legacy EC2 + EBS solution due to Fargate’s pay‑as‑you‑go model and EFS’s burstable IOPS.

**Learnings (Customer Obsession)**  
I realized that caching frequently queried facets in Redis could shave another 20 ms; this is now part of our roadmap. The exercise reinforced the importance of container immutability and immutable infrastructure for search services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
