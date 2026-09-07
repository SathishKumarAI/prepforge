---
qid: ing_f07d534a8d__faang__local
question: 'Explain: Failover Mechanisms — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 544
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:58:25-05:00'
sources: []
---

**Failover Mechanisms – Reliability (System‑Design Interview)**  

---

### 1️⃣ Clarify  
*Problem:* We need a highly available ML inference service that continues serving predictions if one component fails.  
*Assumptions to confirm:*  
- Service is stateless or state can be replicated;  
- Latency budget < 50 ms;  
- Traffic ~10k QPS;  
- Deployment on cloud (AWS/GCP).  

---

### 2️⃣ Approach  
1. **Layered architecture** – separate load balancer → inference nodes → model store.  
2. **Health checks & heartbeats** for each node.  
3. **Active‑active cluster** with automatic traffic steering.  
4. **Graceful degradation** (serve cached predictions).  

---

### 3️⃣ Depth  
*Load Balancer:*  
- Global LB (e.g., CloudFront) → regional LB (ELB/GLBC) → internal LB.  
- Health checks ping `/healthz` every 5 s; unhealthy nodes removed from pool.

*Inference Nodes:*  
- Dockerized containers, autoscaled by CPU/memory.  
- Each node pulls the latest model from a shared S3/GCS bucket (immutable).  

*Failover Flow:*  
1. Node fails health check → LB stops routing to it.  
2. Autoscaler spins up replacement in same AZ; if AZ down, switch to another AZ.  
3. If all nodes fail, fallback to **fallback service** that returns a default prediction or cached result.

*Complexity:* O(1) lookup for LB; autoscaling adds ~O(log N).  

---

### 4️⃣ Edge Cases  
- **Model drift:** update propagation delay → use versioned model tags.  
- **Cold start latency:** pre‑warm containers on demand.  
- **Partial failure (network partition):** circuit breaker pattern to avoid cascading failures.

Testing: simulate AZ outage, node crash, network latency spikes; verify SLA ≥ 99.9%.

---

### 5️⃣ Optimize & Communicate  
*Improvements:*  
- Use **canary releases** for model updates.  
- Implement **distributed tracing** (OpenTelemetry) to pinpoint failure points.  

*Communication:* Start with the problem restatement, walk through assumptions, then diagram the layers, detail health‑check logic, and finish by discussing edge scenarios and trade‑offs. This demonstrates structured thinking, depth in reliability design, and clear articulation—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
