---
qid: ing_8910e06404__aws__local
question: 'Explain: Throughput & Bandwidth — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 417
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:34:39-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: Our recommendation engine served ~50 M users daily, but latency spikes during peak hours caused a 12 % drop in conversion.

*Task*: Design a system that guarantees high throughput and bandwidth while keeping costs predictable.

*Action*:  
1. **Throughput vs. Bandwidth** – I clarified the difference: *throughput* is the number of requests processed per second, whereas *bandwidth* is the total data volume transferred (e.g., MB/s).  
2. Adopted a **hybrid architecture**:
   - **Amazon Kinesis Data Streams** for ingesting user events at >10 kpps with auto‑scaling shards.  
   - **AWS Lambda** functions to transform and batch records, limiting per‑function payloads to 6 MB (bandwidth cap).  
   - **Amazon DynamoDB Global Tables** for low‑latency reads (<5 ms) and high write capacity (10 kpps), with on‑demand mode during flash sales.  
3. Implemented *circuit breakers* in Lambda to throttle outbound calls when downstream service bandwidth nears 80 % of its limit, preventing cascading failures.

*Result*:  
- Throughput increased from 7 kpps to 12 kpps (≈70 % improvement).  
- Bandwidth utilization stayed below 75 % during peak, reducing throttling incidents by 90 %.  
- Cost remained within the $15 k/month budget, with a 5 % savings after auto‑scaling adjustments.

*Reflection*: I learned that **monitoring both metrics together** is crucial; focusing on throughput alone can mask bandwidth bottlenecks. Future iterations will add predictive scaling using Amazon CloudWatch anomaly detection to pre‑emptively adjust shard counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
