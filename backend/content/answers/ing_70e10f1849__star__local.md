---
qid: ing_70e10f1849__star__local
question: Why is redundancy needed when using LB’s? How does this redundancy works?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 301
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:06-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time fraud detection model for a payment gateway that had to handle 15 k transactions per second. The system’s latency budget was only 10 ms, so any drop in throughput could trigger SLA violations.

**Task:**  
I needed to guarantee high availability of the prediction service while keeping inference time within limits, even when one or more nodes failed or experienced spikes.

**Action:**  
We deployed a lightweight logistic‑regression ensemble across three identical GPU instances. To achieve redundancy, I introduced a “load balancer” layer that hashed each transaction ID and routed it to two out of the three models (using consistent hashing). If one model timed out or returned an error, the other would immediately provide the prediction. Additionally, we stored intermediate feature vectors in Redis so any node could recompute missing values on demand. I also set up a health‑check circuit breaker that removed a node from rotation if its latency exceeded 12 ms for more than three consecutive requests.

**Result:**  
The system achieved 99.8 % uptime during a week of simulated node outages and maintained average inference time at 9.4 ms, well below the SLA. I learned that redundancy in LB’s is not just about replication; it’s about intelligent routing and fail‑over logic that keeps latency predictable while providing fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
