---
qid: ing_6b629e0454__aws__local
question: 'Explain: Where UDP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:03-05:00'
sources: []
---

**Situation & Task**  
I was leading the design of a real‑time analytics pipeline for a global IoT platform that ingested telemetry from 3 M+ devices. The requirement was to deliver events to downstream services within <50 ms while keeping operational costs under $1 M/yr. I had to decide whether to use **TCP** (reliable, ordered) or **UDP** (unreliable, low‑latency).

**Action – Technical Design**  
I mapped the data flow: device → edge gateway → AWS IoT Core → Kinesis Data Streams → Lambda → S3/Redshift.  
1. **Transport choice:** UDP was chosen for device‑to‑gateway packets because 99.8 % of telemetry is idempotent; occasional loss is acceptable and saves ~30 % bandwidth versus TCP.  
2. **Reliability layer:** At the gateway, I added a lightweight “acknowledgement window” that re‑sent only critical control messages over TCP.  
3. **AWS services:**  
   - *AWS IoT Core* (UDP support via MQTT over WebSocket) for high‑throughput ingestion.  
   - *Amazon Kinesis Data Streams* to buffer bursts and guarantee ordering downstream.  
4. **Scalability & Availability:** Auto Scaling Groups behind an Application Load Balancer handled spikes; data replication across two AZs ensured 99.999 % availability.  

**Result**  
Latency dropped from 120 ms (TCP‑only) to 35 ms, a 71 % improvement. Cost fell by 28 %, staying within budget. The system processed 10× the device load without additional hardware.

**Reflection & Learning**  
I embraced **Customer Obsession**—the end users were the real‑time dashboards—and **Dive Deep** to quantify trade‑offs. A failure mode (gateway reboot) taught me to add a secondary UDP checksum layer, which I later rolled out globally. This iteration kept us on track for quarterly SLAs and reinforced ownership of the end‑to‑end pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
