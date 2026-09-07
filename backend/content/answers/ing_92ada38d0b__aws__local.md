---
qid: ing_92ada38d0b__aws__local
question: 'Explain: What UDP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 472
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:44-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science platform for real‑time fraud detection, we had to ingest high‑volume transaction streams from mobile wallets. The requirement was sub‑10 ms latency and 99.9% throughput. I chose UDP over TCP after evaluating the trade‑offs.

**Action (Technical Design)**  
1. **Protocol Choice** – UDP is connectionless; it skips handshakes, acknowledgements, and retransmissions, giving us ~50 µs lower per‑packet overhead than TCP.  
2. **AWS Services**  
   * **Amazon Kinesis Data Streams** with the **UDP ingestion API** (via a custom Lambda edge) to buffer packets before processing.  
   * **Amazon EC2 Auto Scaling Group** of stateless inference workers that consume from Kinesis, run TensorFlow models, and publish results to DynamoDB.  
3. **Reliability Layer** – Implemented an idempotent keying system (transaction ID + timestamp) in DynamoDB to dedupe lost packets; added a secondary **SQS retry queue** for critical events flagged by the model.  
4. **Scalability / Cost** – UDP drops at most 0.1% of packets under peak load, so we avoided provisioning extra EC2 capacity that would have been idle during TCP retransmissions. Estimated cost saving: $12k/month versus a comparable TCP‑based ingestion pipeline.

**Result**  
- Latency dropped from 35 ms (TCP) to 8 ms (UDP).  
- Throughput increased from 1,200 tx/s to 4,800 tx/s at peak.  
- False‑negative rate for fraud stayed <0.5% due to our deduplication layer.  

**Reflection / Learning**  
Ownership: I owned the end‑to‑end data path and pushed for a solution that balanced speed with reliability. Dive Deep: We profiled packet loss vs latency and iterated until we hit the 99.9% SLA. Bar‑raiser cues: I quantified impact, justified trade‑offs, and documented failure modes (e.g., catastrophic packet bursts) to inform future scaling plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
