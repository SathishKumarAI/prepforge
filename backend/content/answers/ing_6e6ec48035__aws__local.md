---
qid: ing_6e6ec48035__aws__local
question: 'Explain: Where TCP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 401
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:46-05:00'
sources: []
---

**Situation / Task**  
In a recent project I led the design of an IoT telemetry platform that ingested millions of sensor streams from edge devices. The requirement was to guarantee *exact‑once* delivery for critical diagnostics while keeping latency low for bulk analytics.

**Action**  
I evaluated TCP and UDP, then chose **TCP** for control & diagnostic packets because it offers built‑in reliability, ordering, and congestion control—essential for safety data. For high‑volume telemetry I kept UDP but wrapped each payload with a lightweight sequence number and checksum, sending acknowledgments via TCP back to the edge node.  
I deployed this on **Amazon Kinesis Data Streams** (shards per device type) and used **AWS Lambda** for real‑time enrichment. To ensure scalability I set shard count to 200 initially, auto‑scaling with CloudWatch alarms; availability was achieved by replicating shards across AZs. Cost was controlled by selecting **On‑Demand** instances for edge gateways and using **S3 Glacier Deep Archive** for long‑term storage of raw logs.

**Result**  
The system processed 12 M records/second, achieving <50 ms latency for analytics streams while maintaining 99.999% delivery accuracy for diagnostics—up from the previous 97%. The design reduced operational overhead by 30% and cut data egress costs by 25%.

---

### Leadership Principles Anchored
- **Customer Obsession** – Prioritized reliability for safety‑critical data.  
- **Ownership** – Took full responsibility for end‑to‑end delivery guarantees.

> **Bar‑raiser takeaways:** Depth of protocol trade‑offs, quantified throughput & accuracy, and a clear learning loop (e.g., “we switched to TCP after the first 3 failures with UDP”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
