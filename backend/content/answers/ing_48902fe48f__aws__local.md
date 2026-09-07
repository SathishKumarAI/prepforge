---
qid: ing_48902fe48f__aws__local
question: 'Explain: an end number of different copies of — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 495
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:35-05:00'
sources: []
---

**S**ituation – In 2023 I led a cross‑functional team that built an *Operational Transformation (OT)* engine for a cloud‑based collaborative editor, similar to Google Docs. The goal was to support **10 M concurrent users** while keeping latency < 50 ms and data loss < 0.01%.  

**T**ask – Design the real‑time sync layer that merges divergent edits from millions of replicas without central locking, ensuring eventual consistency and offline resilience.

**A**ction –  
1. Adopted **AWS AppSync + DynamoDB Streams** for event sourcing; each edit is a stream record with vector clocks.  
2. Implemented an OT algorithm in Lambda (Node.js) that runs on the fly, producing *transformation functions* stored in **DynamoDB**.  
3. Used **Amazon SQS FIFO queues** per document to serialize operations locally before broadcasting via **WebSocket API Gateway**.  
4. Employed **AWS Global Accelerator** + edge‑cache (CloudFront) for sub‑30 ms RTT worldwide, and leveraged **S3 Intelligent‑Tiering** for audit logs.  
5. Built a *sharding strategy* based on document ID hash to distribute load across 100 DynamoDB partitions, guaranteeing > 99.999% availability.

**R**esult – The system handled 12 M concurrent sessions with < 45 ms average latency during peak traffic, and an error rate of 0.003%. User satisfaction (CSAT) rose from 82 % to 94 % in the first month after launch.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on real‑time UX metrics that drive user retention.  
- **Ownership & Dive Deep** – architected end‑to‑end flow, tuned for cost and resilience, and iterated based on telemetry.

### Bar‑raiser Takeaway
The interview panel looked for a candidate who owns the problem, dives into data (latency, error budgets), quantifies impact (CSAT lift, cost savings via serverless), and learns from failures (e.g., early SQS throttling incidents). My solution demonstrated all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
