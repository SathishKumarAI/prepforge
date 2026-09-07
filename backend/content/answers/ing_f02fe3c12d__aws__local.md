---
qid: ing_f02fe3c12d__aws__local
question: 'Explain: Layer 3: Network — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 721
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:18-05:00'
sources: []
---

**Scenario (S)**  
While leading a fraud‑prevention ML pipeline for a global e‑commerce platform, I was asked to redesign the data ingestion layer so that model training could run on fresh transaction streams without compromising latency or cost.

**Task (T)**  
I had to build a highly available, low‑latency Layer 3 network architecture that would route billions of transactions per day from our on‑premise POS terminals to an S3 lake for downstream ML processing, while keeping egress costs under 5 % of the total spend.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| **Edge routing** | Amazon CloudFront + Global Accelerator | Provides sub‑10 ms latency to any region and automatically routes traffic over healthy endpoints. |
| **Secure transport** | TLS 1.3 on EC2 instances behind ALB | Guarantees confidentiality and integrity; ALB handles scaling and health checks. |
| **Throughput & buffering** | Amazon Kinesis Data Streams (shard = 4) | Handles >200k TPS with auto‑scaling, decouples producers from consumers. |
| **Data lake** | S3 Intelligent‑Tiering + S3 Object Lambda | Stores raw events; Lambda transforms to Parquet for ML without extra compute cost. |
| **Cost control** | Reserved Capacity on Kinesis + Lifecycle policies on S3 | Locks in 30 % price reduction and auto‑archival after 90 days. |

*Scalability*: Kinesis shards scale horizontally, CloudFront caches static payloads; no single point of failure.  
*Availability*: Multi‑AZ deployments for ALB & EC2, CloudFront edge caching, S3’s 99.999999999% durability.  
*Cost*: With reserved capacity and Intelligent‑Tiering, total monthly spend dropped from **$1.8M to $1.2M** (33 % reduction) while maintaining <5 ms latency.

**Result (R)**  

- Achieved **99.997 % throughput success** for 200 k TPS across 10 regions.  
- Reduced data ingestion cost by **$600K annually**.  
- Enabled real‑time fraud models to train on 24‑hour windows, improving detection accuracy from **82 % to 91 %**.

---

### Leadership Principles Highlighted  

1. **Customer Obsession** – I focused on keeping latency low for merchants and end users while cutting costs that would otherwise be passed down.  
2. **Ownership & Dive Deep** – I personally benchmarked every service, iterated shard sizing, and tuned lifecycle policies until the numbers met our SLA.  
3. **Bias for Action & Deliver Results** – Deployed a fully automated pipeline in 4 weeks, with continuous monitoring that prevented any downtime.

### Bar‑raiser Checklist  

- Demonstrated end‑to‑end ownership of the network layer.  
- Showed deep dive into performance metrics (latency, throughput) and cost analysis.  
- Quantified impact: 33 % cost savings, 9 pp increase in fraud detection accuracy.  
- Learned from an earlier failure where a single shard bottleneck caused a 10 % drop in success rate; now I pre‑emptively scale based on traffic forecasts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
