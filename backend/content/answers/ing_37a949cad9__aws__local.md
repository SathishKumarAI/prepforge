---
qid: ing_37a949cad9__aws__local
question: 'Explain: How to prepare — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 542
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:19-05:00'
sources: []
---

**Situation**  
I was tasked to launch *Cognition‑Devin*, a conversational AI that could surface relevant product data for our sales team in real time. The goal was to reduce the average call‑to‑solution time from **12 min** to under **3 min** while keeping latency below **200 ms**.

**Task**  
Design an end‑to‑end pipeline that ingests live chat logs, runs intent classification and entity extraction, then returns actionable insights—all within the constraints above.

**Action**  
1. **Data ingestion & preprocessing** – Kinesis Data Streams captured 50 k messages/second; Lambda functions cleaned and tokenized in real time.  
2. **Model inference** – A pre‑trained Transformer (Amazon SageMaker Neo) was containerised and deployed behind an Application Load Balancer with a target group of 4 EC2 Spot instances (t3.medium). Auto‑Scaling kept CPU < 70 % and memory < 60 %.  
3. **Knowledge base** – DynamoDB tables stored product attributes; a global secondary index allowed O(log n) lookups.  
4. **Caching** – ElastiCache Redis held the top 5 k most frequent intent‑entity pairs, cutting downstream latency by ~30 %.  
5. **Observability** – CloudWatch metrics and X-Ray traces were used to monitor SLA compliance; a Lambda function automatically throttled traffic if latency exceeded 200 ms.

**Result**  
- Call‑to‑solution time dropped from **12 min → 2.8 min** (a **77 %** reduction).  
- Latency stayed below **180 ms** for 99.5 % of requests.  
- Cost per inference fell to **$0.002**, a **60 %** savings versus the legacy on‑prem GPU cluster.

**Reflection**  
*Ownership*: I owned the entire stack, from ingestion to observability, and iterated based on real‑time metrics.  
*Dive Deep*: The performance bottleneck was in Redis evictions; by adjusting eviction policy (LRU → LFU) I improved hit rate from 85 % to 92 %.  
*Learned*: Early assumptions about scaling Spot instances caused cold starts; adding a small warm pool resolved this.

> **Leadership Principles**: Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
