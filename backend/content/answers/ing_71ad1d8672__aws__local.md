---
qid: ing_71ad1d8672__aws__local
question: 'Explain: a user has modified the client copy — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 435
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous firm we built a real‑time collaborative editor that stored documents in S3 and served them via CloudFront. A client requested a feature to let users *modify the “client copy”* (the UI text shown to collaborators) without breaking operational transformation (OT) consistency. The goal was 99.9 % latency under 10k concurrent editors.

**Approach (Dive Deep + Bias for Action)**  
1. **Requirements & Constraints** – OT must still converge; client copy changes are read‑only, versioned, and cached.  
2. **Design** –  
   * Store base document in S3, user edits in DynamoDB Streams → Lambda → Kinesis Data Stream → Step Functions orchestrating OT.  
   * Client copy stored as a JSON blob in Parameter Store (SSM) with version tags; served via API Gateway + CloudFront edge caching.  
   * On update, a “copy‑update” Lambda invalidates the edge cache and writes a new version to SSM.  
3. **Scalability & Availability** – DynamoDB autoscaling + Kinesis shard auto‑scale keeps 10k TPS; API GW + CloudFront guarantees low‑latency global access.  
4. **Cost** – Using SSM for small metadata (≈$0.02/1 000 requests) and Lambda for cache invalidation keeps spend < $200/month versus a full DynamoDB table.

**Result (Deliver Results)**  
Implemented in 3 sprints; latency dropped from 250 ms to 80 ms, and the OT conflict rate fell below 0.01 %. The feature was adopted by 12 clients within two months, increasing revenue by $350k annually.  

**Reflection** – I learned that separating mutable UI state from core OT logic reduces complexity; future iterations will move copy storage into AppSync for real‑time sync and further cut latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
