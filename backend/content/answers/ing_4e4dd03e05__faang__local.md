---
qid: ing_4e4dd03e05__faang__local
question: 'Explain: that we''re probably hosting like a number'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 526
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:46:50-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to describe how we would host an ML service and why it makes sense to use *a specific number* of hosts (e.g., “probably hosting on 3–5 nodes”). I’ll assume the goal is low‑latency inference for a production API.

---

**Approach**  
1. Identify key constraints: latency < 50 ms, throughput ≈ 500 req/s, fault tolerance, and cost.  
2. Map those to infrastructure decisions: containerized model serving (e.g., TorchServe), autoscaling group size, and load‑balancing strategy.  
3. Explain why a small fixed set of hosts is sufficient before adding elasticity.

---

**Depth**  

| Decision | Reasoning | Trade‑offs |
|----------|-----------|------------|
| **Container + GPU per host** | A single GPU (e.g., RTX 3090) can serve ~1,000 req/s for a 300M‑parameter transformer. | Higher upfront cost but lower ops overhead. |
| **3–5 hosts** | Reduces risk of single point failure; 2‑node cluster meets high‑availability SLA with minimal replication lag. | More resources than a single node, but still keeps CAPE (cost + performance) balanced. |
| **Load balancer + session stickiness** | Guarantees consistent inference latency and allows graceful draining during updates. | Slightly higher network hop, but negligible for < 50 ms target. |

*Complexity*: O(1) per request in the inference path; scaling is linear with host count.

---

**Edge Cases**  
- **Model size > GPU memory** → fall back to CPU or shard across hosts.  
- **Traffic spike** → autoscale up to 10 nodes for 5 min, then down.  
- **GPU failure** → health checks route traffic to healthy peers; data loss risk is mitigated by stateless design.

---

**Optimize & Communicate**  
I’d suggest starting with 3 hosts (2 serving + 1 standby), monitor latency/CPU/GPU utilisation, and iterate. In discussion, I’d highlight that the “number” is driven by SLA, cost curve, and operational simplicity—key metrics FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
