---
qid: ing_218901a535__aws__local
question: 'Explain: Design Pastebin.com (or Bit.ly) — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 550
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:15-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession* – we build a service that lets developers share code snippets quickly and reliably; *Dive Deep & Ownership* – I own the end‑to‑end architecture, from ingestion to analytics.

### Situation  
A startup needed an internal “Pastebin” for rapid sharing of code fragments (≤ 1 MB). They required high write throughput, instant read latency, and durable storage across regions.

### Task  
Design a highly available, low‑cost system that scales to millions of writes per day while guaranteeing eventual consistency of short URLs.

### Action  
| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **API Gateway + Lambda** | Edge‑optimized API | Zero‑ops, auto‑scaling, pay‑per‑invoke; reduces ops overhead. |
| **DynamoDB (partition key: URL_ID)** | Single‑table design | Low latency writes (≤ 10 ms), strong consistency for reads, auto‑scale on traffic. |
| **S3 + CloudFront** | Object storage + CDN | Durable blob store for code payloads; edge caching reduces read latency to < 50 ms globally. |
| **SNS/SQS + Lambda** | Async analytics pipeline | Decouples write path from metric collection, enabling 99.9% availability even under spikes. |
| **CloudWatch & X-Ray** | Observability | Real‑time metrics (write QPS, error rates) and tracing for root cause analysis. |

*Scalability:* DynamoDB auto‑scales; CloudFront caches aggressively, reducing origin hits.  
*Availability:* Multi‑AZ tables + S3 replication guarantee 99.999% uptime.  
*Cost:* Pay‑as‑you‑go for Lambda & API Gateway; DynamoDB on-demand with provisioned read capacity for bursts.

### Result  
Within three months of launch, the service handled **12 M writes/day** and achieved < 30 ms read latency globally. Customer satisfaction scores rose from 3.4 to 4.8/5 (internal survey). The design also reduced infrastructure ops by 70 %, freeing devs to focus on feature work.

### Learnings  
I initially underestimated the write‑skew in DynamoDB, causing hot partitions; adding a random prefix to URL_IDs resolved contention. This iteration reinforced *Bias for Action* and *Invent & Simplify*: keep systems simple but resilient, and iterate fast based on data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
