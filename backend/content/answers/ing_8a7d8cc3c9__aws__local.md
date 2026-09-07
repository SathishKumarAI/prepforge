---
qid: ing_8a7d8cc3c9__aws__local
question: 'Explain: Blob Storage — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 570
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:33-05:00'
sources: []
---

**Situation**  
While leading a data‑engineering team at a streaming startup, we had to build a highly‑available, cost‑efficient “Blob Storage” layer for user‑generated audio clips (up to 3 GB each). The goal was to support 200 M daily uploads with sub‑second retrieval latency and 99.999% durability.

**Task**  
Design an end‑to‑end storage system that:  
1) scales horizontally to petabytes of data,  
2) guarantees strong consistency for writes,  
3) provides fine‑grained access control, and  
4) keeps CAPEX & OPEX below $0.02 per GB/month.

**Action**  
- **Architecture** – Adopted a multi‑region S3‑compatible service (Amazon S3 + Glacier Deep Archive for cold data).  
  - *Ingestion*: API Gateway → Lambda (validation, metadata extraction) → DynamoDB (metadata table, global secondary index on user ID).  
  - *Storage*: S3 Standard-IA for active blobs; S3 One Zone‑Ia for low‑cost tier.  
  - *Replication*: Cross‑region replication to a secondary region for DR and latency reduction.  
- **Security** – Used IAM roles + bucket policies + S3 Object Lambda to enforce encryption (SSE‑KMS) and audit via CloudTrail.  
- **Cost Control** – Implemented lifecycle rules: after 30 days move to Glacier; after 365 days delete.  
- **Scalability & Availability** – Leveraged S3’s automatic sharding; used CloudFront for edge caching, reducing origin fetches by ~70%.  
- **Monitoring** – CloudWatch metrics + Lambda alerts on latency spikes; automated remediation via Step Functions.

**Result**  
- 99.9999% durability (S3), 99.99% availability across regions.  
- Cost reduced from $0.12/GB to $0.018/GB/month, saving ~$4M annually for a 10 PB dataset.  
- Retrieval latency dropped from 1.8 s to <300 ms for 90th percentile requests.

**Learning**  
The first prototype over‑provisioned EC2 storage and suffered a 5% outage during peak traffic. By shifting to managed S3 services, we eliminated single points of failure and achieved true “Ownership”—we owned the entire data lifecycle from ingestion to archival. This experience reinforced *Dive Deep* (analyzing S3 metrics) and *Bias for Action* (moving quickly to Lambda + DynamoDB).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
