---
qid: ing_ebb09a1694__aws__local
question: 'Explain: Connection Setup — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was leading a data‑pipeline team that needed to ingest real‑time telemetry from thousands of edge devices into an ML model in AWS. The choice between TCP and UDP for the transport layer would dictate latency, reliability, and cost.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements** – Each packet contained 1 kB sensor data; loss tolerance <0.5 %; throughput ≈ 10 Gbps.  
2. **Design** –  
   * **UDP + Custom Retransmission**: Lightweight header, lower latency (≈ 1 ms). We added a sequence‑number field and an ACK mechanism in the application layer.  
   * **TCP**: Built‑in reliability but higher RTT (~5 ms) and head‑of‑line blocking.  
3. **AWS Services** – Use **Amazon Kinesis Data Streams** (shards tuned to 1 Gbps each) as the ingest layer, backed by **EC2 Auto Scaling** for processing workers.  
4. **Trade‑offs** – UDP saved ~30 % on EC2 CPU usage and reduced packet loss by 0.3 %. TCP would have doubled cost due to higher latency and more back‑pressure handling.

**Result (Deliver Results)**  
We deployed the UDP‑based pipeline in production; latency dropped from 5 ms to 1.2 ms, throughput increased by 25 %, and overall cost fell by 18 % within three months. The ML model’s inference accuracy improved because of higher data fidelity.

**Learning (Bar‑raiser)**  
The key insight was that a lightweight custom reliability layer can outperform TCP when the application can tolerate minor packet loss, showing ownership over trade‑offs and deep dive into protocol internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
