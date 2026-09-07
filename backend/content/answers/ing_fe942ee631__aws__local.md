---
qid: ing_fe942ee631__aws__local
question: What is a Live Video? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:40-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our live‑video platform (≈ 10 M concurrent users) to support real‑time comments without degrading streaming latency. The goal: keep **comment latency < 200 ms** and enable **horizontal scalability** for peak events (e.g., 1 M viewers).

**Action – System Design**  
| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingest & normalize | Amazon Kinesis Data Streams + Lambda | Handles bursty writes, auto‑scales to millions of comment events. |
| Order & dedupe | DynamoDB Global Tables (partitioned by `video_id`) | Guarantees eventual consistency and low‑latency read for display. |
| Real‑time distribution | Amazon CloudFront with WebSocket API Gateway | Low‑cost edge propagation; keeps latency < 100 ms globally. |
| Persistence & analytics | S3 + Athena + Redshift Spectrum | Cost‑effective long‑term storage, supports ad‑hoc analytics on comment volume and sentiment. |
| Rate limiting & abuse control | Amazon WAF + DynamoDB TTL | Protects API from spam; TTL automatically cleans old counters. |

**Result**  
- **Latency dropped 3×** (from 650 ms to 200 ms).  
- **Throughput increased 4×**, handling 5× more concurrent viewers during live events.  
- Operational cost reduced by **27 %** through serverless components and data lifecycle policies.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, performed a deep dive into latency traces, and iterated on the design after observing a 5 % spike in comment lag during a test event. The learning: always benchmark under realistic load before launch. This solution demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—the pillars Amazon values in high‑impact engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
