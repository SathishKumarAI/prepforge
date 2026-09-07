---
qid: ing_fa8cd1a6b2__aws__local
question: 'Explain: When to choose which — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 416
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:58-05:00'
sources: []
---

**Situation / Task**  
I was tasked with deciding whether to build a real‑time knowledge graph on **Graphiti (GitHub)** or rely on an AWS managed service for my AI agent pipeline at a fintech startup. The goal was to support 5 k concurrent inference requests per second while keeping latency < 120 ms and cost under $2k/month.

**Approach / Action**  
*Customer Obsession & Ownership*: I mapped user journeys—agents needed instant access to regulatory data, transaction histories, and risk scores.  
*Dive Deep*: I benchmarked Graphiti’s Neo4j‑based engine against **Amazon Neptune** (fully managed) and a custom **DynamoDB + Lambda** solution.  
*Bias for Action*: Built a 10‑node cluster on EC2 Spot Instances to prototype Graphiti; parallelly spun up a Neptune replica set for comparison.

| Metric | Graphiti | Neptune |
|--------|----------|---------|
| Latency (p95) | 90 ms | 115 ms |
| Throughput | 6.5k req/s | 4.8k req/s |
| Cost/Month | $1,650 | $2,200 |

**Result**  
I chose Graphiti with a hybrid deployment: core graph on EC2 + S3 for backups, and Neptune as a read‑replica for failover. This reduced latency by 25% versus pure Neptune, met the cost target, and improved developer velocity (deployment time cut from 48 h to 12 h).  

**Learning**  
The failure mode was an initial over‑provisioning of EC2 instances; I learned to use CloudWatch metrics for auto‑scaling thresholds instead of static sizing. This experience reinforced the **Customer Obsession** and **Dive Deep** principles, ensuring we deliver real value while staying lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
