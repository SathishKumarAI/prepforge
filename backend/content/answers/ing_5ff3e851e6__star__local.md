---
qid: ing_5ff3e851e6__star__local
question: 'Explain: Advantages and Disadvantages of Redundancy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 275
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:14-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an autonomous vehicle perception stack that had to meet a 99.9% uptime SLA for safety-critical operations. Our initial deployment used a single inference server cluster running on GPU nodes.

**Task:**  
I was tasked with designing a redundancy strategy that would keep the system available during node failures or maintenance without compromising latency or cost.

**Action:**  
I introduced an active‑active load balancing layer using Kubernetes with custom health probes and a predictive autoscaler. Each inference request was duplicated across two geographically separated clusters, then de‑duplicated at the aggregator. To mitigate the extra GPU cost, I employed model distillation: a lightweight student network handled 70% of traffic while the heavier teacher served as backup only for high‑confidence or edge cases. We also added a rolling‑restart protocol that maintained quorum during updates.

**Result:**  
The system’s uptime rose to 99.999%, and we reduced overall GPU usage by 25% compared to a naïve double‑cluster approach. I learned that redundancy in AI systems must balance availability, latency, and cost—adding layers of fallback can be efficient if the workload is intelligently partitioned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
