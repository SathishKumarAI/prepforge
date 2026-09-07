---
qid: ing_ddc520a166__aws__local
question: 'Explain: Global Reservations for latency-tolerant services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 503
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:40-05:00'
sources: []
---

**Situation –** While launching a recommendation engine for a multi‑region e‑commerce platform, we hit a bottleneck: the inference API had to serve millions of requests with sub‑100 ms latency, yet our on‑prem GPU cluster was overloaded during peak hours.

**Task –** Design an AWS‑native “Global Reservations” strategy that guarantees compute capacity for latency‑tolerant ML inference across all regions without overspending.

**Action –**  
1. **Reserved Instances + Spot Fleet**: Provisioned 30 % of the required GPU capacity on EC2 *Reserved* instances (one‑year term) to lock in predictable cost, and filled the remaining 70 % with a *Spot Fleet* that automatically scales based on CPU/GPU utilization.  
2. **AWS Global Accelerator + Route 53**: Added an accelerator so every request is routed to the nearest healthy endpoint, keeping round‑trip latency below 80 ms.  
3. **SageMaker Endpoint Auto Scaling**: Configured per‑region endpoints with *predictive scaling* (using CloudWatch metrics) to spin up new inference containers when requests spike.  
4. **Cost & Availability Trade‑off**: Reserved Instances guarantee capacity but lock in cost; Spot Fleet offers 70 % savings (≈ $0.02/instance‑hour vs $0.06), yet we mitigated interruption risk with *fallback* Lambda that queues burst traffic to a FIFO SQS queue.

**Result –**  
- Latency dropped from 250 ms to **72 ms average** (−71 %).  
- Cost reduced by **38 %** compared to an all‑on‑demand approach.  
- 99.95 % regional uptime achieved, meeting SLAs during the holiday surge.

**Reflection –** I learned that “Ownership” means balancing cost with reliability; “Dive Deep” required parsing Spot interruption patterns and tuning scaling thresholds. This solution now serves as a reusable blueprint for any latency‑critical ML workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
