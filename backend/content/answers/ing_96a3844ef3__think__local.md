---
qid: ing_96a3844ef3__think__local
question: 'Explain: You run a shared LLM platform for 30 internal teams on one GPU
  fleet. Design the tenancy model: fairness, isolation, and cost attribution.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 427
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:05:19-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
*   *What is “fairness” in this context?* – equal compute time, proportional to team size or workload.  
*   *Isolation level required?* – data privacy (no cross‑team leakage), resource isolation (GPU memory, queue priority).  
*   *Cost attribution* – how to bill each team: actual GPU hours, model usage, or a flat allocation.

**2️⃣ Adopt a layered tenancy framework**  
1. **Physical tier** – shared GPU fleet managed by a cluster orchestrator (e.g., Kubernetes + device plugin).  
2. **Logical tier** – virtual GPU pools per team, implemented via CUDA contexts or container‑level resource limits.  
3. **Policy tier** – fairness scheduler (fair‑share, credit‑based) and isolation policies (cgroups, network ACLs).

**3️⃣ Reason step‑by‑step**  
*   *Isolation*: assign each request a dedicated CUDA context; enforce data access controls via role‑based permissions on storage.  
*   *Fairness*: use a fair‑share scheduler that tracks GPU‑seconds per team and throttles over‑consumers.  
*   *Cost attribution*: instrument the job queue to log GPU‑time, model tokens, and store per‑team counters; export to billing dashboards.

**4️⃣ Avoid common traps**  
*   Over‑simplifying isolation (just CPU cgroups) → data leakage.  
*   Ignoring bursty workloads → unfair throttling.  
*   Relying on flat pricing → hidden costs for heavy users.

**5️⃣ Sanity‑check & communicate**  
Run a pilot with two teams, monitor GPU usage and latency; validate that no team can starve others. Explain the three tiers to stakeholders, highlighting how isolation protects data, fairness balances workloads, and cost attribution aligns incentives. This structured approach ensures a robust tenancy model for your shared LLM platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
