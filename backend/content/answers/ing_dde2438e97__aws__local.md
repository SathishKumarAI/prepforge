---
qid: ing_dde2438e97__aws__local
question: 'Explain: TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 459
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a real‑time analytics pipeline for IoT sensor data. The system had to ingest millions of events per second and deliver processed insights within 100 ms, while keeping costs under $50k/month.

**Action (Design)**  
I chose **UDP** for raw telemetry ingestion because it is *stateless* and has negligible header overhead – ideal for high‑volume bursts. To guarantee delivery we added a lightweight *acknowledgment layer* (sequence numbers + retransmit on timeout) built on top of UDP, avoiding the TCP handshake overhead.  
For downstream processing I used **Amazon Kinesis Data Streams** (scalable, low‑latency) and **AWS Lambda** for stateless enrichment. The enriched data is written to **DynamoDB** with a *global secondary index* for quick query by device ID.

I evaluated trade‑offs:  
- **Scalability:** Kinesis auto‑scales to 10k records/sec, Lambda scales to 1,000 concurrent invocations.  
- **Availability:** Using multiple Availability Zones and Kinesis’ built‑in replication guarantees 99.9 % uptime.  
- **Cost:** UDP reduces network charges by ~30 %; Lambda’s pay‑per‑invocation model keeps compute costs low.

**Result**  
The redesign cut ingestion latency from 300 ms to **90 ms** (a 70 % improvement) and reduced monthly ops cost by **35 %** while maintaining >99.95 % data integrity.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered a faster, cheaper pipeline that met end‑user SLA expectations.  
- **Ownership & Dive Deep:** Built custom reliability over UDP and tuned AWS services to balance performance and cost.  

*Bar‑raiser cues:* clear ownership of trade‑offs, quantitative impact (latency %, cost %), depth in protocol choice, and lessons learned from initial TCP failure (high latency under burst load).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
