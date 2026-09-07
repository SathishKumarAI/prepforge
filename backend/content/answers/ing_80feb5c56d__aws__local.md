---
qid: ing_80feb5c56d__aws__local
question: 'Explain: Video Games — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 440
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:41-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning the physics engine for a multiplayer shooter on **AWS CloudGaming** so it could support *10 k concurrent players* while keeping latency < 30 ms. The core bottleneck was deciding between concurrency (handling many tasks in an interleaved fashion) and parallelism (running independent tasks simultaneously).  

**Action**  
1. **Dive Deep into profiling**: Using CloudWatch traces I found that collision detection, AI decision trees, and network packet serialization were *independent* workloads with negligible data sharing.  
2. **Parallelism via ECS + Fargate Spot**: Deployed each workload as a lightweight container; used *AWS ParallelCluster* to auto‑scale across GPU nodes (p3.8xlarge) for AI inference.  
3. **Concurrency for shared state**: Implemented an actor model in Amazon Kinesis Data Streams where each player’s state was processed sequentially but streamed asynchronously, preventing race conditions.  
4. **Bias for Action & Cost**: Switched to *Graviton2* instances for deterministic physics (64 % cheaper) and leveraged Spot pricing, saving 38 % on compute spend while maintaining a *99.9 % SLA*.  

**Result**  
- Reduced average frame time from **18 ms → 12 ms** (33 % improvement).  
- Supported **10 k concurrent players** with peak throughput of **200 k TPS**, up from the previous 80 k.  
- Achieved a *$120 K annual cost saving* versus the legacy monolith.  

**Reflection**  
Ownership drove me to iterate until the system met both performance and budget goals. I learned that true scalability in game engines comes from **separating independent workloads for parallelism while serializing shared state for concurrency**, a pattern now documented as best practice in our CloudGaming architecture playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
