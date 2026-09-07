---
qid: ing_3b5f58a082__faang__local
question: 'Explain: 2.3 Health Check Overhead — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 496
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:24-05:00'
sources: []
---

**Clarify**

The interviewer wants a design for a load‑balancer that performs *health‑check overhead* minimization while still guaranteeing high availability of backend services.  
Assumptions to confirm:  

1. Traffic is read‑heavy with occasional write spikes.  
2. Backends expose a health endpoint (`/health`) and return OK or fail.  
3. The LB sits in front of multiple identical instances behind a VPC.  
4. SLA requires < 0.5 % downtime, latency < 50 ms.  

**Approach**

1. **Health‑check strategy** – use *adaptive polling*: start with long intervals, shorten only when failures occur.  
2. **Caching & rate limiting** – cache health status per instance for a TTL; throttle checks to avoid over‑polling.  
3. **Distributed coordination** – a lightweight consensus (e.g., etcd) stores the current healthy set so that all LB nodes see consistent state.  
4. **Circuit‑breaker integration** – if an instance repeatedly fails, open its circuit and redirect traffic immediately.  

**Depth**

- Each LB node runs a health‑check thread per target; adaptive interval = `base + k*failures`.  
- Cache TTL ≈ 5 s; max rate ≤ 1 check/sec per instance → overhead < 0.2 % of CPU.  
- Consistency via Raft ensures eventual convergence in < 100 ms.  
- Circuit‑breaker threshold: ≥3 consecutive failures within 30 s → open for 60 s.  

**Edge Cases**

- *Stale cache*: if network partitions occur, the cached status may be wrong; mitigated by periodic forced checks (every 2 min).  
- *Burst traffic*: ensure that rapid failure detection doesn’t trigger thrashing—use exponential backoff.  
- *Clock skew*: use monotonic timers for intervals.

**Optimize & Communicate**

I’d first prototype the adaptive polling logic, measure CPU and latency, then iterate on TTLs. During the interview I’ll sketch a flow diagram: LB → cache lookup → health‑check (if needed) → circuit‑breaker state → routing decision. This demonstrates clear trade‑offs between freshness of health data and system overhead while meeting SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
