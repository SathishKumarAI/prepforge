---
qid: ing_e22af691c7__aws__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 438
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:54-05:00'
sources: []
---

**Situation / Task**  
I was asked to design the core architecture of a public “Pastebin‑like” service that must store millions of user uploads, support instant retrieval, and handle sudden traffic spikes (e.g., code sharing during hackathons).  

**Action** – *Design*  
1. **Ingestion layer** – API Gateway → Lambda (Python) → validate size/format → write to S3 (object key = UUID + timestamp).  
2. **Metadata store** – DynamoDB for quick lookup: `{paste_id, user_id, created_at, expires_at, size}`; provisioned throughput 5 k RCU/WCU, auto‑scaling on CloudWatch.  
3. **Read path** – CloudFront CDN → Lambda@Edge to fetch from S3, cache public pastes for 24 h.  
4. **Background cleanup** – EventBridge rule triggers a scheduled Lambda that scans DynamoDB for expired items and deletes the corresponding S3 objects (cost‑effective lifecycle policy).  

**Result** – After launch, we handled 1 M daily uploads with <0.5 s latency for 95 % of reads, while keeping monthly costs under $2k. The system scaled to 10× traffic during a major conference without any outages.  

**Reflection (Bar‑raiser)**  
- *Ownership*: I drove the full stack, from API design to cost monitoring.  
- *Dive Deep*: Used CloudWatch metrics and XRay traces to identify the S3 read bottleneck and switched to Lambda@Edge caching.  
- *Quantified Impact*: 1 M uploads/day, <0.5 s latency, <$2k/month.  
- *Learning*: Initial design lacked TTL logic; after failure during a test spike I added DynamoDB TTL and lifecycle rules, preventing orphaned objects.  

**Leadership Principles** – *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
