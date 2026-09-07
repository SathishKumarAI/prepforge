---
qid: ing_09930d531f__aws__local
question: 'Explain: 2 System Design - Trade-Offs — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 588
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:37-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I led a cross‑functional team that had to re‑architect an on‑prem ML inference pipeline for a retail recommendation engine that served ~200 k concurrent users during peak holidays.  
> **Task:** Deliver a system that could scale 10× traffic, reduce latency by >30%, and cut operational costs by 25% while maintaining data privacy.  
> **Action:**  
> 1. **Trade‑off mapping** – I created a “Top‑15 Trade‑offs” matrix (latency vs cost, consistency vs availability, batch vs real‑time). This guided decisions such as:  
>    * **Latency vs Cost:** Chose **Amazon SageMaker Endpoint + Lambda** for low‑latency inference instead of a full EC2 cluster. Pay‑as‑you‑go saved $120k/yr.  
>    * **Batch vs Real‑Time:** Off‑loaded heavy feature engineering to **AWS Glue** jobs on EMR, while real‑time features were served from **DynamoDB with TTL** (eventual consistency acceptable).  
>    * **Consistency vs Availability:** Employed **S3 EventBridge + Kinesis Data Streams** for immutable training data; read‑through caching via **ElastiCache Redis** to hit 95 % cache hit rate, reducing DB load.  
> 2. **Scalability & Availability:** Used **Auto Scaling Groups** with Spot Instances for training nodes and a **Multi‑AZ SageMaker endpoint** (5 ms SLA). Implemented health checks and Circuit Breaker patterns in the inference layer.  
> 3. **Cost vs Complexity:** Adopted **AWS Cost Explorer + Savings Plans** to forecast spend; shifted from on‑prem GPUs to Spot GPU instances, cutting GPU hours by 40%.  
> **Result:** Traffic grew from 200 k to 2 M users during the holiday season with <25 ms latency (30% improvement). Operational cost dropped 28%, and the system remained 99.9% available. Post‑mortem revealed that earlier we had over‑provisioned GPU nodes; learning led us to adopt Spot instances for non‑critical jobs, a change now standard across ML teams.  

**Leadership Principles Anchored:**  
- **Customer Obsession** – focused on end‑user latency and reliability.  
- **Dive Deep & Ownership** – built the trade‑off matrix, drove cost‑saving experiments, and owned post‑mortem learning.  

**Bar‑raiser cues I hear:** depth of trade‑off analysis, quantifiable impact (latency, cost), ownership of failure lessons, and clear alignment with Amazon’s principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
