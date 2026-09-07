---
qid: ing_1d40724924__aws__local
question: 'Explain: HLL in the wild — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 407
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:27-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the “Audience‑Insight” platform that needed to count unique users per campaign in real time. The dataset was ~1 billion events/day and the latency budget was <200 ms for a dashboard query. We had to keep storage costs under $5k/month while maintaining 99.9% accuracy.

**Action & Design**  
I chose **HyperLogLog (HLL)** because it offers *sub‑1% relative error* with only ~12 KB per counter, ideal for cardinality estimation at scale.  
- **Implementation:** I wrapped the HLL in a stateless Lambda function that ingests event streams from Kinesis Data Streams and updates an HLL sketch stored in DynamoDB (one item per campaign).  
- **Scalability:** Each Lambda processes 100 k events/s; horizontal scaling is automatic, and DynamoDB’s provisioned capacity handled the write load with minimal throttling.  
- **Availability & Cost:** Using DynamoDB Global Tables gave multi‑region read latency <20 ms. The total cost stayed $3.8k/month—30% below the projected budget.  
- **Accuracy Check:** We ran an offline validation against a ground‑truth set and achieved 0.73% error, well within SLA.

**Result & Learning**  
The dashboard now updates in <150 ms with real‑time cardinality, reducing manual reporting by 80%. I documented the trade‑offs (HLL vs Bloom filters) so the team could revisit when data volume grows beyond 10 billion events/day.  

*Leadership Principles:* **Ownership** – I drove the end‑to‑end solution; **Dive Deep** – I benchmarked error rates and cost profiles to justify HLL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
