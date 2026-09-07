---
qid: ing_c330c8dc69__faang__local
question: 'Explain: About the Authors — How Amazon DynamoDB adaptive capacity accommodates
  uneven data access patterns (or, why what you know about DynamoDB might be outdated)
  | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 467
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:41-05:00'
sources: []
---

**Clarify**  
The interview asks how DynamoDB’s *adaptive capacity* handles skewed read/write traffic and whether recent changes (e.g., on‑demand mode, reserved capacity) affect this behavior.

**Approach**  
1. Summarize adaptive capacity fundamentals.  
2. Explain the throttling mechanics for uneven access.  
3. Highlight recent AWS updates that modify or supplement this feature.  

**Depth**  
- **Adaptive Capacity** is a *managed* feature that monitors per‑partition request rates and automatically reallocates read/write units to partitions under heavy load, preventing hot spots without manual sharding.  
- Internally DynamoDB tracks the *request unit utilization* of each 10 GB partition key range. If one partition exceeds 70 % of its allocated throughput while others are idle, the service will *re‑balance* by shifting capacity from idle partitions to the hot one. This occurs in near real‑time (seconds) and is invisible to the developer.  
- The feature works for both **Provisioned** and **On‑Demand** modes; however, on‑demand automatically scales capacity linearly with traffic, so adaptive capacity’s impact is less pronounced but still present for burst mitigation.  
- Recent changes: AWS introduced *Reserved Capacity* for cost optimization and *DynamoDB Accelerator (DAX)* caching, both of which coexist with adaptive capacity but do not replace it.

**Edge Cases**  
- Sudden, sustained hot‑partition traffic can still trigger throttling until rebalancing completes.  
- Multi‑region writes or global tables may introduce cross‑region latency that masks adaptive behavior.  
- Extremely low write patterns might lead to under‑utilized partitions, but adaptive capacity will not reclaim unused units—cost remains the same.

**Optimize & Communicate**  
I would emphasize that adaptive capacity is a *runtime* safety net; it eliminates manual sharding and reduces operational overhead, yet developers should still design for evenly distributed partition keys when possible. I’d conclude by noting that while the core mechanism hasn’t changed, newer pricing models (on‑demand) and features (DAX, reserved capacity) have altered how developers approach throughput planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
