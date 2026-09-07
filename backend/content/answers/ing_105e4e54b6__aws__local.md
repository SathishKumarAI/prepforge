---
qid: ing_105e4e54b6__aws__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:20-05:00'
sources: []
---

**Situation (S)**  
At my previous company we built a real‑time analytics pipeline for IoT telemetry. The data arrived over both **TCP** and **UDP** streams, but the UDP side was dropping packets during peak traffic, causing dashboards to lag by minutes.

**Task (T)**  
I had to design a resilient ingestion layer that preserved low latency while guaranteeing at least 95 % message delivery for critical metrics.

**Action (A)**  

1. **Clarify requirements** – Latency < 50 ms, throughput ≥ 10k msgs/s, cost ≤ $5/day.  
2. **Design** –  
   * Wrap UDP packets in a lightweight “ack‑less” wrapper that tags each payload with a monotonically increasing sequence number.  
   * Ingest via **Amazon Kinesis Data Streams** (shard key = device ID) for horizontal scaling and fault tolerance.  
   * Use **AWS Lambda** to validate sequence gaps; missing IDs trigger a retry via an SNS topic, which pushes back to the sender with minimal overhead.  
   * Store raw packets in **S3 Glacier Deep Archive** for audit and replay.  
3. **Trade‑offs** –  
   * Added 0.5 ms processing per packet vs pure UDP passthrough; still within SLA.  
   * Increased cost by ~15 % but gained 99.8 % delivery assurance, a 30 % reduction in downstream error handling.

4. **Result (R)** – After deployment:  
   * Packet loss dropped from 12 % to < 1 %.  
   * Dashboard refresh latency fell from 5 s to 0.2 s.  
   * Operational cost rose only 12 %, within budget.

**Leadership Principles**  
* **Ownership** – Took full responsibility for the end‑to‑end data flow and paid attention to edge cases.  
* **Dive Deep** – Analyzed packet loss logs, sequence gaps, and Lambda cold‑start behavior to pinpoint bottlenecks.  

The bar‑raiser will notice my clear ownership, deep metric analysis, quantifiable impact, and willingness to iterate after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
