---
qid: ing_4403b76455__think__local
question: 'Explain: Five teams share a cluster of 64 GPUs for training and inference.
  Design the scheduling and quota system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 592
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:05:33-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

- Who owns the GPUs? (Shared pool, no single owner)
- What workloads do the teams run? (Training vs inference, batch sizes, GPU‑intensity)
- How is “fairness” defined? (Equal time share, priority for training, cost‑based quota)
- Are there SLAs or deadlines? (Real‑time inference needs low latency)
- Is the cluster managed by a single scheduler or distributed?

**2️⃣ Choose a mental model / framework**

Treat it as a *resource allocation* problem in a multi‑tenant cluster.  
Use **quota + priority queueing**:  
- *Quota* limits maximum GPU usage per team (e.g., 12 GPUs).  
- *Priority* distinguishes training (high) from inference (low), and may include urgency or budget.

Combine with **fair share scheduling** (e.g., Kubernetes‑like scheduler, DRF) to ensure long‑term balance.

**3️⃣ Step‑by‑step reasoning**

1. **Profile workloads** – measure GPU demand per job type.  
2. **Set base quotas** – e.g., each team gets 12 GPUs; remaining 4 can be shared or reserved for burst.  
3. **Define priority classes** – training jobs get higher preemption weight than inference.  
4. **Implement a scheduler** that:
   - Allocates GPUs to jobs up to their quota.
   - Preempts low‑priority jobs if high‑priority ones need GPUs.
   - Uses *fair share* to avoid starvation over time.
5. **Add burst/overcommit policy** – allow teams to temporarily exceed quotas with limits (e.g., 16 GPUs max for a short window).  
6. **Monitor & adjust** – collect metrics, rebalance quotas if some teams consistently idle or starve.

**4️⃣ Common traps to avoid**

- Ignoring *latency* of inference jobs; treat them like training and let them be preempted.  
- Setting static quotas that don’t reflect changing demand patterns.  
- Over‑preemption leading to thrashing (jobs constantly killed).  
- Forgetting to account for GPU memory requirements – two GPUs may not be interchangeable.

**5️⃣ Sanity check & communicate**

- Run a simulation with realistic job traces; verify no team is starved and latency targets are met.  
- Explain the policy in plain terms: “Each team can use up to 12 GPUs, training gets priority, but if everyone needs more we’ll share the remaining 4 fairly.”  
- Provide dashboards for teams to see current usage vs quota.

By iterating this cycle—clarify → model → design → anticipate pitfalls → validate—you build a robust scheduling and quota system that balances fairness, efficiency, and business priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
