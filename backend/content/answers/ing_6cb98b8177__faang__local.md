---
qid: ing_6cb98b8177__faang__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 493
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:17-05:00'
sources: []
---

**Disadvantage(s) of using failover in ML model serving**

| # | Disadvantage | Why it hurts |
|---|--------------|-------------|
| 1 | **Latency spike** | Swapping to a backup instance often involves DNS TTL changes, load‑balancer warm‑up or cold start of containers/VMs. The request that triggered failover can see 100–500 ms extra latency, which is critical for real‑time inference. |
| 2 | **State inconsistency** | Models may be versioned or have shard‑specific weights (e.g., model ensembling). A hot backup might hold an older checkpoint; if the primary crashes mid‑train, the backup may serve stale predictions until a new sync occurs. |
| 3 | **Resource waste** | Maintaining standby replicas consumes compute and storage that could be used for scaling or other services. In cloud environments this translates to higher cost per inference. |
| 4 | **Complexity in monitoring & recovery** | Determining *when* to failover (network glitch vs. actual crash) requires sophisticated health checks, circuit‑breakers, and alerting. Misconfiguration can lead to cascading failures or split‑brain scenarios. |

---

### Why it matters for ML serving

- **Real‑time systems** (e.g., recommendation engines) need < 50 ms latency; a failover delay violates SLAs.
- **Model drift**: A backup that hasn’t been re‑trained recently may produce inaccurate predictions, hurting business metrics.
- **Cost sensitivity**: Inference workloads are often billed per request; idle replicas inflate spend.

---

### Mitigation strategies

1. **Graceful degradation** – serve a lightweight fallback model instead of pausing traffic.  
2. **Warm standby** – keep replicas in a “ready” state with the same weights to avoid cold starts.  
3. **Version‑aware routing** – use consistent hashing or feature flags so all requests hit the same model version during failover.  
4. **Cost‑aware autoscaling** – scale down non‑critical backups during low traffic windows.

By weighing these trade‑offs early, you can design a resilient ML serving architecture that balances availability, latency, consistency, and cost—exactly what FAANG interviewers look for in a system‑design answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
