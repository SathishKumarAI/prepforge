---
qid: ing_70ed3d0eac__aws__local
question: 'Explain: Real-World Examples — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 563
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:50-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team to launch an IoT telemetry platform for smart factories, I had to decide whether to use TCP or UDP for device‑to‑gateway data streams. The goal was to deliver > 99.9 % uptime while keeping latency < 10 ms and minimizing egress costs.

**Action (Design)**  
I scoped the requirements:  
- **Reliability:** 1 % packet loss acceptable but retransmissions must not congest the network.  
- **Latency:** sub‑10 ms end‑to‑end for real‑time dashboards.  
- **Cost & Scale:** millions of devices, 10 TB/month traffic.

I proposed a hybrid architecture:

| Layer | Service | Rationale |
|-------|---------|-----------|
| Edge | **AWS IoT Core** (MQTT over TLS) | Handles device auth, lightweight QoS 1 for “at‑least‑once” delivery. |
| Ingest | **Amazon Kinesis Data Streams** | Durable buffer, auto‑scales to millions of records per second; supports both TCP and UDP via Lambda edge. |
| Processing | **AWS Lambda** (stateless) | Parses payloads, writes to DynamoDB for fast lookup. |
| Storage | **Amazon S3 Glacier Deep Archive** | Cost‑effective long‑term retention. |

We used **UDP** from devices to IoT Core only for high‑frequency telemetry where occasional loss is tolerable; **TCP** was reserved for configuration updates and firmware pushes.

**Result**  
After deployment, we achieved 99.97 % availability, reduced average latency to 6 ms, and cut egress costs by 28 % versus a pure TCP baseline. The solution also allowed us to scale from 10k to 1M devices without code changes.

**Learnings (Bar‑Raiser Lens)**  
- **Ownership:** I owned the full lifecycle—from requirement gathering to cost analysis.  
- **Dive Deep:** Conducted packet‑level experiments and cost simulations.  
- **Quantified Impact:** Delivered measurable uptime, latency, and cost savings.  
- **Learning from Failure:** Early trials with pure TCP revealed burst traffic spikes; switching to UDP for telemetry mitigated the issue.

**Leadership Principles Anchored**  
- *Customer Obsession* – Ensured low‑latency dashboards that meet operator needs.  
- *Ownership* – Took end‑to‑end responsibility and iterated on feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
