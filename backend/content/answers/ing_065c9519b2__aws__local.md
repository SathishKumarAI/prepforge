---
qid: ing_065c9519b2__aws__local
question: 'Explain: More HLL details — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:14-05:00'
sources: []
---

**Situation / Task**  
While leading a fraud‑detection team at my previous company, we needed to count unique user sessions in real time for risk scoring. The dataset was ~5 TB/day and the latency budget was <200 ms per request.

**Action**  
I chose **HyperLogLog (HLL)** because it offers ≈1.6 % error with only 12 KB per register, meeting our memory constraints. I built a distributed HLL pipeline on AWS:

| Service | Role |
|---------|------|
| **Amazon Kinesis Data Streams** | Ingest raw session events |
| **AWS Lambda** (10 k concurrent) | Update HLL sketch per shard |
| **Amazon DynamoDB** (Global Tables) | Persist 64‑bit HLL registers, auto‑replicated for high availability |
| **Amazon API Gateway + Lambda** | Expose a fast query endpoint that merges sketches from all shards in O(1)** |

*Scalability*: Each Lambda scales with Kinesis shard count; DynamoDB handles >10 k writes/sec with <5 ms latency.  
*Availability*: Global Tables give multi‑AZ resilience; Lambda retries mitigate transient failures.  
*Cost*: ~\$0.25 per million events, under \$3 k/month for our load.

**Result**  
We reduced unique‑user count latency from 1.2 s to 180 ms (7× faster) while cutting storage costs by 90%. The fraud‑risk score accuracy improved by 4% due to more precise cardinality estimates, leading to a \$1.8 M annual uplift in revenue.

**Reflection**  
I learned that choosing the right probabilistic data structure can dramatically lower operational cost and latency. I now routinely audit sketch errors against ground truth to keep metrics within SLA—an example of *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
