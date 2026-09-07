---
qid: ing_6d62838959__aws__local
question: 'Explain: What TCP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 585
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:04-05:00'
sources: []
---

**SITUATION & TASK**  
When I was leading the *Real‑Time Analytics* team at my previous employer, we had to ingest IoT sensor streams (≈ 50 M events/day) into a downstream ML pipeline for anomaly detection. The upstream devices used raw UDP sockets because they were low‑cost and required minimal latency. However, our ML model demanded **exactly once** semantics and **ordered** data. I had to decide whether to keep UDP or switch to TCP.

**ACTION**  
I performed a quick *Dive Deep* on the trade‑offs:

| Feature | UDP | TCP |
|---------|-----|-----|
| Ordering | ❌ | ✅ |
| Reliability | ⚠️ (packet loss) | ✅ |
| Throughput | ~10 Gbps (no handshake) | ~8 Gbps (handshake + congestion control) |
| Latency | <1 ms | 5–10 ms (initial SYN/ACK) |

I built a lightweight **proxy layer** in **AWS Lambda@Edge** that:

1. Listens on UDP, buffers packets per device ID.
2. Sends buffered data over TCP to an **Amazon Kinesis Data Streams** shard (using the *PutRecord* API).
3. Uses **Kinesis Enhanced Fan‑Out** for low‑latency consumption by our ML workers.

This architecture gave us:

- **Ordering & exactly‑once delivery** via Kinesis.
- **Cost savings**: 30 % lower Egress than a pure TCP solution, because we only used TCP for the downstream path.
- **Scalability**: Each shard scales to 1 M records/second; we added 8 shards as traffic grew.

I also set up CloudWatch alarms on *SequenceNumber* gaps and integrated automated retries in Lambda to handle transient network hiccups—an example of **Bias for Action** and **Ownership**.

**RESULT**  
Within two weeks, the ML pipeline achieved **99.9 % data integrity** and a 40 % reduction in false‑positive alerts compared to the UDP baseline (from 12 % to 7 %). Our cost per MB dropped from $0.07 to $0.05. The design was later adopted company‑wide for all real‑time ingestion workloads.

**LEADERSHIP PRINCIPLES**  
- **Customer Obsession** – We delivered more accurate predictions, directly improving end‑user trust in our anomaly alerts.  
- **Dive Deep & Ownership** – I dissected protocol details, built a custom proxy, and owned the post‑deployment monitoring and optimization.  

Bar‑raisers look for clear ownership, depth of analysis, measurable impact, and learning from failures—exactly what this solution demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
