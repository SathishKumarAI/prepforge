---
qid: ing_56061aa09b__faang__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 489
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:01-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *load‑balancing* core API for a high‑traffic ML inference service (e.g., image classification). Key assumptions:  
- Millions of requests per second, low latency (< 100 ms).  
- Multiple model replicas across regions.  
- Need horizontal scalability and fault tolerance.  

**2️⃣ Approach**  
1. **Ingress layer** – API gateway with TLS termination and rate‑limit.  
2. **Routing engine** – consistent hashing + weighted round‑robin to map requests to a specific model replica.  
3. **Health checks** – periodic probes (ping, latency stats) to update the routing table.  
4. **Metrics collector** – Prometheus/Stackdriver for real‑time load and error rates.  
5. **Failover** – on health‑check failure, redirect traffic to healthy replicas; use circuit‑breaker pattern.

**3️⃣ Depth**  
- *Consistent hashing* (e.g., Ketama) ensures minimal request churn when scaling out/in.  
- *Weighted round‑robin* allows uneven capacity per replica (GPU vs CPU).  
- Health checks return a *score* (latency + error rate); the routing engine uses it to adjust weights dynamically.  
- Complexity: O(1) lookup for each request; update cost proportional to replica count during scaling events.  
- Trade‑off: Slightly higher latency due to hashing vs pure round‑robin, but provides stability.

**4️⃣ Edge Cases**  
- Sudden spike → throttle before overload using token bucket.  
- Replica crash mid‑request → client retries with idempotent key.  
- Network partition → split‑brain; use consensus (Raft) for routing state replication.

**5️⃣ Optimize & Communicate**  
Future improvements:  
- *Serverless* scaling (Kubernetes HPA or Fargate).  
- Use *gRPC* for lower overhead.  
- Implement *A/B testing* by injecting traffic to new model versions.  

I’d conclude by summarizing the key design pillars—scalable routing, health‑driven weights, and observability—and how they satisfy low latency, high availability, and ease of scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
