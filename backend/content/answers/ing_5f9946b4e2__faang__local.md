---
qid: ing_5f9946b4e2__faang__local
question: 'Q: How do you design for high availability in LLM systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 500
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:32-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re building a large‑language‑model (LLM) inference service that must stay online with >99.9 % uptime.  
Key assumptions:  
- Model weights are stored in a distributed file system or object store.  
- Inference runs on GPU/TPU nodes behind an API gateway.  
- Traffic is variable; we need auto‑scaling and graceful degradation.

**2️⃣ Approach**  
1. **Stateless front‑end** – keep the gateway stateless, so any node can handle a request.  
2. **Replicated inference workers** – spin up multiple identical worker pods behind a load balancer.  
3. **Health checks & circuit breakers** – monitor GPU health; route traffic away from failing nodes.  
4. **Redundant storage** – keep model shards in multi‑AZ S3/Blob, replicate with erasure coding.  
5. **Auto‑scale and pre‑warm** – use predictive scaling plus a pool of warm workers to absorb spikes.

**3️⃣ Depth**  
- **Load balancer** (e.g., AWS ALB) distributes requests; health checks ping `/health`.  
- **Circuit breaker** trips after N consecutive failures, marking the node as “unavailable.”  
- **Model cache**: each worker keeps a local copy of the most recent shard; use `fsync`‑protected checkpoints.  
- **Failover**: if an AZ goes down, traffic routes to other AZs automatically.  
Complexity: O(1) request routing; scaling adds linear cost in GPU count. Trade‑off: more replicas increase cost but reduce latency variance.

**4️⃣ Edge Cases**  
- Sudden shard corruption → fallback to cold storage download.  
- GPU memory pressure → queue requests, return 503 with retry‑after header.  
- Network partition → split‑brain; use consensus (e.g., Raft) for critical config.

**5️⃣ Optimize & Communicate**  
Explain that we’re prioritizing *statelessness* and *redundancy*, then quantify the target MTTR (<5 min). Highlight how monitoring metrics (latency, error rate, GPU utilization) feed into automated rollback. Conclude with a quick demo of scaling scripts or a diagram to show the flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
