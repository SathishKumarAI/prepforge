---
qid: ing_d9f2b299e7__faang__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 714
total_tokens: 959
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:05:39-05:00'
sources: []
---

**Pattern 2 – Active‑Active Load‑Balanced Architecture**

---

### 1️⃣ Clarify  
We’re asked to design a system that keeps **all replicas online (active‑active)** and balances traffic among them.  
Assumptions to confirm:  
- Stateless or shared‑state services?  
- Global user base → latency constraints.  
- Failure detection granularity (instance vs region).  
- Desired consistency level for writes.

---

### 2️⃣ Approach  
1. **Ingress Layer** – Global DNS/Anycast + Edge CDN.  
2. **Layer‑4 Load Balancer** – L7 policy per service, health‑checks, sticky‑session optional.  
3. **Regional Auto‑Scaling** – VM/container clusters per region.  
4. **Service Mesh** – intra‑cluster traffic control, retries, circuit‑breakers.  
5. **State Management** – distributed cache (Redis‑Cluster) or database with multi‑region replication.

---

### 3️⃣ Depth  
| Component | Design Choices | Complexity |
|-----------|----------------|------------|
| DNS/Edge | Anycast + Geo‑DNS | O(1) lookup, global propagation ~5 s |
| LB | Layer‑7 LB (e.g., AWS ALB, GCP LB) with health‑check intervals 30 ms | O(n) per request where *n* = healthy backends |
| Health‑checks | TCP/HTTP + application probe; failure timeout 15 s | Detects both network and app faults |
| Auto‑scale | Metrics: CPU, QPS; scale‑out threshold 70%, scale‑in 30% | Log‑linear growth |
| State | Multi‑region Redis with conflict‑free replicated data (CRDT) or Spanner for strong consistency | Latency ≈ 2–3 ms intra‑region, 10–20 ms inter‑region |

**Trade‑offs**  
- *Latency vs Consistency*: eventual consistency lowers read latency but may surface stale writes.  
- *Cost vs Redundancy*: more regions = higher cost; use edge caching to reduce origin hits.

---

### 4️⃣ Edge Cases  
| Scenario | Impact | Mitigation |
|----------|--------|------------|
| Region outage | All traffic fails over to other region | Health‑check marks region unhealthy, routing updates via DNS |
| Sudden traffic spike | Auto‑scale lag may cause request throttling | Pre‑warm instances + burst capacity |
| Data conflict (writes in two regions) | Lost update or merge error | CRDTs or application‑level merge logic |

Testing: chaos‑engineering drills, simulating region failover, load spikes, and data conflicts.

---

### 5️⃣ Optimize & Communicate  
- **Observability**: Prometheus + Grafana dashboards; trace spans across regions.  
- **Cost control**: Spot instances for non‑critical workloads, use CDN cache hit ratio to trigger scaling.  
- **Narrative**: “We start with global edge routing to bring users close to data centers, then rely on a health‑aware load balancer that keeps every replica alive. By decoupling state into a distributed store and employing conflict‑free replicas, we achieve true active‑active behavior while keeping latency low.”  

*Result*: Highly available, globally consistent service with predictable performance under failure conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
