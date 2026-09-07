---
qid: ing_9e822a54b0__aws__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 403
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:07-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a global e‑commerce catalog from a single‑region database to an **Active‑Active** architecture so that customers could browse and purchase in real time from any region without latency spikes.  

**Action**  
- Adopted *Amazon Aurora Global Database* (read replicas in 5 regions) for low‑latency reads.  
- Implemented *DynamoDB Global Tables* with per‑region write capacity to keep writes local, using **Conflict Resolution** via timestamps.  
- Deployed *AWS Route 53 latency‑based routing* and *Global Accelerator* for traffic steering.  
- Added *S3 Cross‑Region Replication* for static assets, backed by CloudFront edge caches.  
- Built a health‑check microservice that pushes metrics to *CloudWatch*; when a region lagged >200 ms the service rerouted traffic automatically (Bias for Action).  

**Result**  
- 99.999% uptime across all regions during the first six months post‑migration, up from 99.95%.  
- Average read latency dropped from **350 ms to 45 ms** globally.  
- Transaction volume increased by **18%** without any additional cost because DynamoDB’s on‑demand capacity scaled automatically.  

**Reflection**  
Ownership was key: I owned the end‑to‑end rollback plan and drove cross‑team alignment. I dove deep into consistency models to avoid write conflicts, learning that *eventual consistency* can be acceptable for catalog data but not for inventory counts. The bar‑raiser looks for measurable impact—here we quantified uptime, latency, and revenue lift—and a clear lesson: design for failure early, not as an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
