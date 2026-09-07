---
qid: ing_6c2f566282__aws__local
question: 'Explain: Capacity Planning — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:30-05:00'
sources: []
---

**Situation / Task**  
In a senior ML role I led the capacity‑planning effort for a large‑scale music streaming platform modeled after the Neo Kim & Hayk Spotify design. The goal was to guarantee 99.9% availability while keeping cost under $2M/month.

**Action (Technical)**  
1. **Requirements** – 10 M concurrent users, 3 TB/day of audio streams, 5× growth in 12 months.  
2. **Design** –  
   * *Compute*: Auto‑scaling EC2 Spot + EKS for containerized services; Fargate for burst workloads.  
   * *Storage*: Amazon S3 (Object storage) with S3 Transfer Acceleration; Elastic File System (EFS) for shared metadata.  
   * *Cache*: DynamoDB Accelerator (DAX) and ElastiCache‑Redis for session data.  
   * *Analytics*: Kinesis Data Streams → Lambda → Redshift Spectrum for real‑time usage metrics.  
3. **Scalability** – 100 % headroom by simulating peak traffic in CloudWatch alarms; leveraged Spot Fleet with diversified instance types to reduce cost 35%.  
4. **Availability** – Multi‑AZ deployments, Route 53 latency‑based routing, and an SQS dead‑letter queue for fault isolation.  

**Result (Metrics)**  
- Achieved 99.95% uptime during a 6‑month pilot.  
- Reduced monthly spend from $3M to $1.8M (+40 % savings).  
- Latency dropped from 300 ms to 120 ms for 90th percentile user requests.

**Learnings (Bar‑raiser focus)**  
Ownership: I owned the end‑to‑end pipeline and drove cross‑team alignment.  
Dive Deep: Continuous profiling revealed a bottleneck in DynamoDB read capacity; we re‑partitioned keys, cutting latency by 50%.  
Quantified Impact: Savings and performance gains were tracked via CloudWatch dashboards shared with executives.  

**Leadership Principles Highlighted**  
- **Ownership** – led all aspects of the rollout.  
- **Dive Deep** – iterated on data to uncover hidden costs and latency issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
