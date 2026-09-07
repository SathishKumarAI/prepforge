---
qid: ing_647b737b91__aws__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:59-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a real‑time gaming leaderboard that had to support 1 M concurrent players and deliver top‑10 rankings in under 200 ms with zero data loss. The client demanded **high availability**, **low latency**, and **immutable audit trails** for compliance.

**Action**  
I architected a *serverless, event‑driven* stack:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingest | API Gateway + Lambda (stateless) | Auto‑scale to 10× peak traffic; zero servers. |
| Processing | EventBridge → SQS → Lambda (dedup & transform) | Guarantees at‑least‑once, handles bursts. |
| Store | DynamoDB Global Tables + PartiQL | Single‑write per player, read‑throughput ≥ 200 ms. |
| Aggregation | Kinesis Data Streams → Lambda → Redshift Spectrum | Real‑time analytics for daily leaderboards. |
| Audit | S3 + Glacier + Athena | Immutable logs; cost‑effective long‑term storage. |

**Result**  
- **Latency**: 95th percentile < 120 ms during peak.  
- **Availability**: 99.999% SLA achieved through multi‑AZ tables and Lambda retries.  
- **Cost**: Reduced ops by 70 % (no EC2) and cut storage cost by 45 % using S3 Intelligent Tiering.

**Reflection**  
I *own* the design, digging deep into DynamoDB’s partition key strategy to avoid hot spots. The biggest failure was an initial single‑region table that throttled during flash sales; we learned to enable Global Tables early. This experience embodies **Customer Obsession**, **Ownership**, and **Dive Deep**—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
