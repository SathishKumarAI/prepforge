---
qid: ing_c15af1bd93__faang__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 409
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:43-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *scalability* in the context of ML systems and how it is achieved through **horizontal** (scale‑out) vs. **vertical** (scale‑up) scaling. I’ll assume we’re talking about serving models or training pipelines.

**Approach**  
1. Define scalability as the ability to handle increased load without performance loss.  
2. Contrast horizontal scaling: adding more nodes, distributing workload; vertical scaling: upgrading a single machine’s CPU/GPU/memory.  
3. Mention trade‑offs: cost, complexity, fault tolerance, and suitability for ML workloads.

**Depth**  
- *Horizontal Scaling*: Sharding data or requests across multiple servers (e.g., model replicas behind a load balancer). It improves throughput linearly, offers high availability, and is cloud‑native (auto‑scaling groups). Complexity comes from consistency (parameter synchronization) and network overhead.  
- *Vertical Scaling*: Enhancing a single node’s resources—adding GPUs or more RAM—to speed up inference/training. It’s simpler to program against but hits physical limits quickly; expensive at scale, offers no redundancy.

**Edge Cases**  
- Models with strict latency budgets may need both strategies (e.g., GPU‑optimized nodes + edge cache).  
- Training pipelines that require tight coupling (distributed SGD) can suffer from network contention if horizontal scaling is aggressive.  

**Optimize & Communicate**  
Highlight that most modern ML serving stacks favor **horizontal scaling** for inference (auto‑scaling, Kubernetes, serverless), while **vertical scaling** remains critical for GPU‑heavy training jobs. Explain how to monitor metrics (latency, throughput) and auto‑scale thresholds. Conclude by noting that the optimal mix depends on workload characteristics, cost constraints, and SLAs—something a FAANG engineer must articulate clearly during an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
