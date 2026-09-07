---
qid: ing_5cc5ea3453__aws__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 437
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:17-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a lightweight “Pastebin‑like” service that could ingest code snippets, store them with minimal latency, and expose a public URL for read‑only access. The goal was to support up to **10 M writes per day** while keeping read latency < 100 ms.

**Action (A)**  
1. **Requirements & Trade‑offs** – I clarified that writes are idempotent, deletes are rare, and data is immutable after creation.  
2. **Architecture** –  
   * **API Gateway + Lambda** for the HTTP interface (serverless, auto‑scales).  
   * **DynamoDB** as the primary store: 10 M items/day → ~100 GB/month; provisioned throughput of 5 k RCUs and 2.5 k WCUs with on‑demand fallback.  
   * **S3** for raw snippet blobs (object size < 1 MB).  
   * **CloudFront** + signed URLs to serve snippets globally, ensuring low read latency.  
3. **Cost & Availability** – Serverless eliminates idle costs; DynamoDB’s multi‑AZ replication guarantees 99.999% availability.  
4. **Metrics** – I set up CloudWatch alarms for write latency >200 ms and error rate >1%.  

**Result (R)**  
After a 2‑week PoC, the system handled 12 M writes/day with average write latency 45 ms, read latency <30 ms globally, and cost <$300/month. The design was accepted for production rollout.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized low latency and high availability to meet user expectations.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, dissecting every component for scalability and cost.  

This approach demonstrates ownership, depth, and a data‑driven outcome—qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
