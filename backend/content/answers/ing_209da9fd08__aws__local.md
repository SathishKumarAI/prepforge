---
qid: ing_209da9fd08__aws__local
question: 'Explain: Preserves numbers, temperatures, measurements'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 501
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was asked to build a lightweight sensor‑data pipeline that could ingest and persist *precise* measurements—temperature, pressure, humidity—at 1 Hz from thousands of IoT devices in real time while guaranteeing zero data loss.

**Action (Ownership + Dive Deep)**  
1. **Edge buffering** – each device writes locally to a small SQLite DB; on connectivity, it streams via MQTT over TLS to **AWS IoT Core**.  
2. **Ingest layer** – IoT Core forwards to an **Amazon Kinesis Data Streams** shard per region (max 5 M events/sec).  
3. **Processing & persistence** – a Lambda function (Python 3.12) reads the stream, validates numeric ranges and timestamp freshness, then writes idempotently to **DynamoDB Global Tables** (partition key = device_id + epoch bucket).  
4. **Cold‑start resilience** – for high latency devices, an SQS DLQ captures failed messages; a scheduled Lambda retries every 5 min.  
5. **Monitoring** – CloudWatch Alarms on Kinesis lag and DynamoDB write capacity; automated scaling via *DynamoDB Auto Scaling*.

**Result (Deliver Results)**  
- 99.999% data durability, verified by audit logs across 3 AZs.  
- Latency from device to DB < 200 ms for 95th percentile.  
- Cost: $0.15 per million records (Kinesis + Lambda), <$1/month for a 10‑k device fleet.

**Bar‑raiser takeaways**  
- **Ownership**: I owned the full stack and rolled my own retry logic instead of relying on third‑party libs.  
- **Dive Deep**: Chose DynamoDB Global Tables after profiling read/write patterns; avoided RDS due to scaling limits.  
- **Quantified impact**: 99.999% uptime directly translates to 0.01 h of lost data per year—critical for compliance.  
- **Learning from failure**: Early tests with a single shard caused back‑pressure; we migrated to multiple shards and added SQS DLQ, demonstrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
