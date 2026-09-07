---
qid: ing_ae528c78fc__aws__local
question: 'Explain: IoT — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 450
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:50-05:00'
sources: []
---

**Situation & Task**  
When I joined the Smart‑Home platform team, our fleet of 50 k sensors sent telemetry every second to a single RabbitMQ broker. The broker was crashing 30 % of the time during peak hours (8–10 pm), which meant we were losing critical temperature and occupancy data.

**Action**  
I owned the problem:  
1. **Dive Deep** – I ran latency traces, discovered that each device sent ~2 kB messages, but the broker’s default *prefetch* was 50, causing back‑pressure and eventual OOMs.  
2. **Invent & Simplify** – Re‑architected the ingestion pipeline:  
   - **AWS IoT Core** to authenticate devices and route data via MQTT to **Amazon SQS FIFO** (deduplication + ordering).  
   - A single **RabbitMQ cluster** (3 nodes, HA mode) now consumes from SQS using *long polling* and batches 10 kB messages into a single RabbitMQ message.  
   - Deployed **AWS Lambda** to parse the batch and publish to **Amazon SNS** for downstream analytics.  
3. **Bias for Action** – I rolled out the new pipeline in a blue‑green fashion, monitored with CloudWatch and set an SLA of < 5 % message loss.

**Result**  
- Broker uptime rose from 70 % to **99.9 %** during peak windows.  
- End‑to‑end latency dropped from 1.2 s to **200 ms** (90th percentile).  
- Cost savings of ~25 % by eliminating the expensive on‑prem hardware and reducing Lambda invocations.

**Learning**  
I learned that a single broker can be reliable if we *decouple* device authentication, queuing, and processing. Future iterations will explore **Amazon MQ for RabbitMQ** to reduce operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
