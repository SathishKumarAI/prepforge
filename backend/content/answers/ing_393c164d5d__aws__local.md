---
qid: ing_393c164d5d__aws__local
question: 'Explain: SQL — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:19-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to build a live comment system for a streaming platform that handled *10M active users* and *200k comments per minute*. The goal: 99.999% uptime, sub‑100 ms latency, and cost < $5k/month.

**Action – Design & AWS stack**  
I owned the architecture (Ownership). I scoped requirements with product, ops, and security teams—clear SLAs, GDPR compliance, and a replay feature for moderation.  
* **Data layer:** Amazon DynamoDB (partition key `postId`, sort key `timestamp`) + DAX cache for hot reads.  
* **Compute:** AWS Lambda (Node.js) triggered by API Gateway WebSocket endpoint; each message is validated, enriched with user metadata from Cognito, and written to DynamoDB.  
* **Real‑time push:** Amazon API Gateway WebSockets + SNS topics per channel, backed by an Auto Scaling Group of EC2 instances running a lightweight Go service for legacy clients.  
* **Analytics & scaling:** Kinesis Data Streams ingest comment events → Lambda aggregates daily metrics stored in Redshift; CloudWatch Alarms trigger DynamoDB auto‑scaling.

**Result**  
- Latency < 80 ms for 99.9% of traffic, 99.999% availability (4‑nines).  
- Cost stayed at $3.8k/month – a 25% reduction versus the baseline.  
- User engagement rose 18% as comments appeared instantly.

**Reflection**  
I dove deep into DynamoDB throttling patterns and discovered a subtle write amplification issue; I added a batch‑write strategy that cut write costs by 12%. The bar‑raiser will note my ownership, data‑driven impact, and learning loop from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
