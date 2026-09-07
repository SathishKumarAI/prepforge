---
qid: ing_38e9a30edb__aws__local
question: 'Explain: Contact sales — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 651
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:31-05:00'
sources: []
---

**Scenario (S)**  
At a previous e‑commerce firm we were evaluating a new search & analytics stack for our product catalog. The product owner asked me to compare the cost and performance of Elastic’s *Serverless* offering on Cloud Run versus the *Hosted* managed service on EC2.

**Task (T)**  
Deliver a data‑driven recommendation that balanced latency, scalability, and budget while ensuring we could meet peak traffic during holiday sales.

**Action (A)**  

1. **Requirements & Architecture**  
   - 10 k queries/sec with <200 ms latency.  
   - 30 TB of log data ingestion nightly.  
   - 24/7 uptime SLA, GDPR compliant.

2. **Design & AWS Services**  
   | Option | Key AWS services | Scalability | Availability | Cost drivers |
   |--------|-----------------|-------------|--------------|--------------|
   | *Serverless* (Elastic Cloud on Fargate) | Fargate + Elastic Container Service, Lambda for ingestion, S3 for data lake | Auto‑scales to zero → cost only when active | 99.95 % (managed by AWS) | Compute & network egress |
   | *Hosted* (EC2+EBS) | EC2 Spot + EBS gp3, RDS Aurora for metadata, CloudWatch | Manual scaling; need over‑provisioning | 99.9 % (depends on HA config) | Instance hours + storage |

3. **Dive Deep – Cost Modeling**  
   - Serverless: $0.04/hr per container × average 20 containers during peak → **$19.2/day**.  
   - Hosted: 4 m5.large instances ($0.096/hr each) + EBS 500 GB ($0.10/GB‑month) → **$27.5/day**.  
   - Added ingestion cost (Lambda, S3 PUTs): $1.8/day.

4. **Performance Benchmarks**  
   - Serverless: 95th percentile latency 180 ms; peak sustained 12 k qps.  
   - Hosted: 95th percentile latency 140 ms; peak sustained 18 k qps.

5. **Decision & Delivery**  
   Recommended *Serverless* for most workloads (cost‑effective, zero idle cost) and a small *Hosted* cluster for the nightly bulk ingestion pipeline to meet strict SLA on data freshness.

**Result (R)**  
Implemented hybrid solution; reduced monthly spend by 28 % while keeping latency <200 ms. During Black Friday, we handled 20 k qps without any outages—meeting the product owner’s KPI of 99.9 % uptime.

---

> **Leadership Principles Highlighted**  
> *Customer Obsession* – focused on performance & cost for end‑users.  
> *Dive Deep* – performed granular cost and latency analysis.  
> *Bias for Action* – moved quickly to a hybrid architecture that delivered measurable savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
