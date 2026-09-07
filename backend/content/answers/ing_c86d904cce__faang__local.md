---
qid: ing_c86d904cce__faang__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 557
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:14-05:00'
sources: []
---

**Clarify**

You’re asked to design a load balancer that guarantees **high availability (HA)** for a stateless web service.  
Key assumptions: *traffic is unpredictable, traffic spikes may occur, the backend pool can scale horizontally, and we need minimal single‑point failure.*

---

**Approach**

1. **Topology** – Deploy multiple LB instances behind a global DNS/Anycast front‑end.  
2. **Health checks** – Periodic TCP/HTTP probes to each upstream node; unhealthy nodes are removed from the pool.  
3. **Session stickiness** – Use client IP or secure cookie hashing (least‑conn fallback) for stateful sessions.  
4. **Failover** – If an LB instance fails, DNS Anycast routes to a healthy one instantly.  
5. **Scaling** – Auto‑scale LBs based on request latency/CPU; backend autoscaling on metrics like queue depth.

---

**Depth**

- *Health check frequency* ≈ 2 s (balance freshness vs overhead).  
- *Connection persistence* via TCP keep‑alive and graceful shutdown to avoid dropping in‑flight requests.  
- *Redundancy* uses multiple AZs; each LB instance has a standby replica for rapid switchover.  
- *Complexity*: O(1) routing per request, O(N) health‑check loop where N = #backends.  
- *Trade‑offs*: Anycast can introduce “split brain” if not coupled with consistent hashing.

---

**Edge Cases**

| Scenario | What breaks? | Test |
|----------|--------------|------|
| Sudden traffic spike (10× normal) | Backends saturate → increased latency | Load‑test with 10× requests, monitor queue depth |
| LB instance crash mid‑session | Session lost | Simulate node kill during long session |
| Backend reboot delay | Health check misses transient failure | Delay health probe response by >2 s |

---

**Optimize & Communicate**

- **Performance**: Cache backend status locally; use UDP probes for speed.  
- **Observability**: Emit metrics (latency, error rates) to a monitoring stack (Prometheus/Grafana).  
- **Narration**: “We first isolate the failure domain by running several LB replicas in an Anycast pool. Each replica continuously health‑checks backends and only forwards traffic when all probes succeed, ensuring that no single node can bring down the entire service.”  

This design delivers sub‑second failover, linear scalability, and robust HA for production workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
