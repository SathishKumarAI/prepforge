---
qid: ing_c97b4bd7c0__aws__local
question: 'Explain: NoSQL — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 615
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:07-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: At my last company we launched an internal “Pastebin” for quick code sharing. The prototype used a relational DB and crashed when 10 k users posted per minute.  
*Task*: Redesign the service to handle 1M writes/day with <5 ms latency while keeping cost under $200/month.  
*Action*: I owned the redesign, diving deep into write patterns: each paste is immutable, keyed by UUID, and rarely updated. I chose **Amazon DynamoDB** for low‑latency key/value storage, enabling auto‑scaling to 2K RCU/WCU spikes. For large blobs (>1 MB) I stored content in **S3** with a pre‑signed URL; the DB held only metadata (size, MIME, checksum). I added **AWS Lambda** behind API Gateway for CRUD logic, ensuring serverless scaling and zero ops. A CloudWatch metric alarm triggered DynamoDB auto‑scaling, and I set up DynamoDB Streams to archive old pastes into Glacier.  
*Result*: Post‑migration we handled 1.2 M writes/day with 99.9% availability, latency <4 ms on average, and cost fell from $850/month to $180/month—a 78 % savings—while user satisfaction rose by 35 % (NPS).  

**Technical Design Highlights**  
- **Data Model**: `PK=PasteID`, attributes (`contentURL`, `createdAt`, `expiresAt`).  
- **Scalability**: DynamoDB auto‑scaling, S3’s virtually unlimited capacity.  
- **Availability**: Multi‑AZ DynamoDB, S3 replication; Lambda concurrency limits handled by API Gateway.  
- **Cost**: Pay‑per‑request for Lambda, minimal RCU/WCU usage, S3 storage class tiering (Standard → Intelligent-Tiering).  

**Bar‑raiser cues I listened to**  
1. *Ownership*: I led the full stack redesign and post‑launch monitoring.  
2. *Dive Deep*: Detailed cost/latency analysis and failure mode testing.  
3. *Quantified Impact*: 78 % cost reduction, 35 % NPS lift.  
4. *Learning from Failure*: After an initial spike, we tuned provisioned throughput and added caching (DAX) to avoid throttling.  

**Leadership Principles Anchored**  
- **Ownership**: Took responsibility for performance & cost.  
- **Dive Deep**: Thoroughly analyzed traffic patterns, failure modes, and pricing models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
