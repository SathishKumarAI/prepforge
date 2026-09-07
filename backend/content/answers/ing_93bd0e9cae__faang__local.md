---
qid: ing_93bd0e9cae__faang__local
question: 'Explain: Cross-account, cross-region data replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 518
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:41-05:00'
sources: []
---

**Clarify**  
You’re asking how an ML pipeline can keep its training and inference datasets synchronized when the source buckets live in different AWS accounts or regions. I’ll assume:  
1. The data is immutable blobs (S3/Blob).  
2. You need eventual consistency, not real‑time.  
3. Access control must be respected across accounts.

**Approach**  
1. **Replication strategy** – use S3 cross‑region replication (CRR) or Azure Data Lake Gen2’s “copy” API.  
2. **Identity & permissions** – create a dedicated IAM role in the destination account with `s3:PutObject` on the target bucket; grant the source account permission to assume it via trust policy.  
3. **Triggering** – enable event notifications (S3 EventBridge or Azure Event Grid) to fire a Lambda/Function that copies the new object.  
4. **Idempotence & versioning** – keep source bucket versioned and copy only the latest, using `x-amz-copy-source-version-id`.  

**Depth**  
- In AWS: enable CRR on the source bucket; set destination region, role ARN, and optional filter (prefix/suffix). CRR handles multipart uploads automatically.  
- In Azure: use Data Factory or Storage Blob copy with a managed identity that has `Storage Blob Data Contributor` in the target account.  

Complexity is O(1) per object copy; throughput limited by S3/Blob’s request rate and network bandwidth. Costs accrue from cross‑region data transfer and PUT requests.

**Edge Cases**  
- Large objects (>5 GB): ensure multipart copy or use `CopyObject` with `x-amz-copy-source`.  
- Permission drift: if the role is revoked, replication fails silently; monitor CloudWatch logs.  
- Latency spikes: CRR can delay up to 24 h for large files; plan for eventual consistency.

**Optimize & Communicate**  
- Use bucket policies to restrict source‑to‑destination access strictly to the replication role.  
- Enable S3 Lifecycle rules on the destination to delete stale versions after a retention window, saving storage costs.  
- In interviews, I’d explain how this pattern scales horizontally—each new region just adds another CRR rule—and how it decouples data ingestion from model training pipelines, ensuring consistent datasets across global deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
