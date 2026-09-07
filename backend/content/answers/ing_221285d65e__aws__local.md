---
qid: ing_221285d65e__aws__local
question: Ready to move forward? — Official Elastic Cloud pricing \u2014 compare serverless
  and hosted offerings | Elastic
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 614
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:15-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked with migrating an on‑prem Elasticsearch stack that served a recommendation engine for 12 M active users to the cloud. The business required zero downtime, sub‑5 s query latency, and cost predictability while keeping data residency within the EU.

**Task (T)**  
I had to decide between **Elastic Cloud’s serverless offering** (Amazon OpenSearch Serverless) and a fully managed **hosted cluster** on EC2 with Auto Scaling. The decision would impact latency, scalability, and quarterly spend.

**Action (A)**  

| Design | AWS Services | Trade‑offs |
|--------|--------------|------------|
| **Serverless** | Amazon OpenSearch Serverless, IAM, CloudWatch | • 1‑click scaling – no ops<br>• Pay per GB‑hour + request count (≈$0.04/GB‑hr)<br>• Limited cluster configuration (no custom plugins) |
| **Hosted** | EC2 Auto Scaling Groups, EBS General Purpose SSD, Amazon FSx for Lustre, CloudWatch, S3 for snapshots | • Full control over node size, shards, and custom ingest pipelines<br>• Elastic IPs for stable endpoints<br>• Higher baseline cost ($0.12/EC2‑hr) but predictable when traffic is steady |

I performed a **cost‑volume analysis**:  
- Expected peak 200 GB index size, 3 k queries/sec, 1 k indexing ops/sec.  
- Serverless would cost ≈$18 k/month (peak).  
- Hosted cluster with m5.large nodes (2 nodes + 1 warm node) would be $13 k/month but offered latency <4 ms.

I built a **proof‑of‑concept** on both platforms, measuring query latency and indexing throughput. Serverless met SLA for read‑heavy traffic but lagged by ~20 % on write spikes due to cold starts. Hosted cluster handled burst writes with 10× higher throughput.

**Result (R)**  
We chose the hosted solution, deployed it in a **dual‑AZ architecture**, and achieved:  
- **99.98 % uptime** over 12 months.  
- **Avg query latency 3.2 ms** (vs target 5 ms).  
- **Cost savings of 22 %** compared to the serverless baseline, while retaining full control for custom pipelines.

**Leadership Principles**  
- **Ownership** – I drove the end‑to‑end migration, from requirement gathering to post‑launch monitoring.  
- **Dive Deep** – Detailed cost and performance analysis ensured data‑driven decisions.  

**Bar‑raiser takeaway** – Demonstrated ownership, quantitative impact, and learning: serverless is great for unpredictable workloads but can be costly; a hosted cluster provides predictability when traffic patterns are known.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
