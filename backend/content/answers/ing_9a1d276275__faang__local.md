---
qid: ing_9a1d276275__faang__local
question: 'Explain: Trade-offs — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 580
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:14-05:00'
sources: []
---

**Clarify**  
The interview asks how architectural patterns influence trade‑offs in AI systems—specifically latency vs. throughput, scalability vs. consistency, and model complexity vs. deployment cost. I’ll assume we’re designing a production ML pipeline that serves predictions at scale (e.g., recommendation engine).

**Approach**  
1. Map each pattern to the three axes above.  
2. For each axis list benefits and penalties.  
3. Show how a hybrid design can balance them.

**Depth**  

| Pattern | Latency | Throughput | Consistency | Complexity | Cost |
|---------|--------|------------|-------------|------------|------|
| **Monolith (single service)** | Low – single hop | Limited by single instance | Strong, in‑process | Simple to develop | High per‑instance cost; scaling hard |
| **Microservices** | Higher – network hops | Horizontal scaling per component | Eventual or ACID via saga | Complex orchestration | Lower per‑service cost; more infra ops |
| **Serverless (Functions)** | Very low cold‑start mitigation | Auto‑scales to bursts | Stateless, so consistency handled by external store | Least code, but vendor lock‑in | Pay‑per‑invocation; hidden overheads |
| **Model Sharding / Ensemble** | Adds inference time per shard | Parallel shards raise throughput | Can enforce consistency across shards | Significant engineering | Higher GPU/CPU utilization |
| **Edge Deployment** | Ultra‑low latency | Local capacity limits | Data locality reduces need for sync | Hardware heterogeneity | Device procurement and firmware maintenance |

Trade‑offs surface when you pick one dimension: e.g., moving to microservices boosts throughput but increases network latency; serverless cuts cost yet introduces cold‑start jitter.

**Edge Cases**  
- *Cold starts* in serverless break SLAs.  
- *Data skew* across shards can overload a node.  
- *Network partitions* in microservices can violate consistency guarantees.

Testing: simulate burst traffic, introduce artificial network delays, and run data drift experiments.

**Optimize & Communicate**  
I’d recommend a **hybrid micro‑service + edge model**: keep heavy ML inference on GPU‑enabled edge nodes for latency‑critical requests; fallback to cloud services for batch scoring. Use *model caching* and *pre‑warm functions* to mitigate cold starts. Communicate the plan by presenting the trade‑off matrix, explaining why each dimension is weighted as it is for our business goals (e.g., 95th percentile latency < 50 ms). This shows structured thinking, depth in technical detail, and awareness of operational realities—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
