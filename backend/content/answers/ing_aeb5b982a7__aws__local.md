---
qid: ing_aeb5b982a7__aws__local
question: 'Explain: Production Design Considerations — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:40-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to launch an edge‑AI inference pipeline that streamed sensor telemetry from thousands of IoT devices into SageMaker for real‑time anomaly detection. The design had to choose between TCP and UDP for data transport, balancing reliability, latency, and cost.

**Action (Technical)**  
1. **Requirements** – Low‑latency (<50 ms) ingestion; 0.1 % packet loss tolerance; cost per GB < $0.02.  
2. **Design** – Adopted **UDP** for bulk telemetry, wrapped each payload in a custom sequence header and checksum.  
3. Implemented a lightweight **deduplication layer** on an **Amazon Kinesis Data Streams** shard that re‑ordered out‑of‑sequence packets and dropped duplicates.  
4. For control traffic (model updates, health checks), we used **TCP** over **AWS IoT Core** TLS sockets to guarantee delivery.  
5. Added a **CloudWatch anomaly detector** on packet loss metrics; if loss >0.2 % for 10 min, the system automatically falls back to TCP.

**Result**  
- Reduced end‑to‑end latency by 35 % (from 78 ms to 51 ms).  
- Maintained packet loss <0.05 %, well below SLA.  
- Cut data transport costs by 22 % compared with a pure‑TCP design.  

**Reflection** – Ownership: I championed the hybrid protocol strategy, diving deep into packet‑level metrics and iterating on the fallback logic after a production outage caused by burst traffic. Learned that coupling UDP with a small re‑ordering buffer can deliver both speed and reliability when paired with AWS managed services.  

*Leadership Principles*: **Customer Obsession** (ensuring low latency for end users) & **Dive Deep** (analyzing protocol trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
