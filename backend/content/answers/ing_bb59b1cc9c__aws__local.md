---
qid: ing_bb59b1cc9c__aws__local
question: 'Explain: Timeouts and Retries — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:21-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a real‑time fraud‑detection service that ingested ~10 M events/s from POS terminals. The team needed to guarantee low latency (<15 ms) while ensuring no data loss during transient network glitches.

**Action – Design Choice**  
I proposed a hybrid transport: **UDP for event ingestion** (to avoid TCP handshake overhead and achieve sub‑5 ms packet delivery) coupled with an *acknowledgment* layer built on **Amazon Kinesis Data Streams**. Each UDP packet carries a sequence ID; the consumer acknowledges receipt via a lightweight HTTP/2 callback to a Lambda that writes the ack into DynamoDB.

For **timeouts & retries**, we implemented:
- **Client‑side exponential backoff (base 200 ms, max 3 attempts)** for UDP packets flagged as “unacked” after a configurable timeout.
- **Server‑side deduplication** using the sequence ID and DynamoDB TTL to avoid duplicate processing.
- **Graceful degradation**: if the ingestion rate spikes beyond 12 M/s, we switch to TCP over Amazon Managed Streaming for Apache Kafka (MSK) as a fallback, ensuring at‑least‑once delivery.

**Result**  
After deployment, event loss dropped from 0.8% to <0.01%, and overall latency improved by 30 %. The cost of the dual‑path system was only +$1k/month compared to our previous monolithic TCP solution.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end data flow, dived deep into transport protocols, quantified impact with clear metrics, and learned that a small UDP layer can be safely hardened with an acking service. This approach balances speed, reliability, and cost—exactly what Amazon looks for in scalable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
