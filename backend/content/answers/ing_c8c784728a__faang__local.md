---
qid: ing_c8c784728a__faang__local
question: 'Explain: F6: Cost runaway in training plane — Multi Tenant Fine Tuning
  Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 572
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:57-05:00'
sources: []
---

**Clarify**

You’re asked to describe the *cost‑runaway* problem that can occur when a multi‑tenant platform fine‑tunes large LLMs, and how to mitigate it.  
Assumptions: (1) several customers upload data and trigger separate training jobs; (2) each job may request arbitrary compute; (3) billing is based on GPU hours and storage.

**Approach**

1. Identify the sources of unbounded cost.  
2. Design controls that bound resources per tenant.  
3. Instrument monitoring, alerts, and automatic throttling.  
4. Validate with realistic workloads.

**Depth**

- **Root causes**  
  - *Unlimited compute allocation*: a single user can request dozens of GPUs for weeks.  
  - *Data‑driven scaling*: larger training sets linearly increase epoch time without constraints.  
  - *Model size escalation*: users may inadvertently fine‑tune very large base models (e.g., GPT‑4) on modest budgets.  
- **Mitigations**  
  - **Quota system**: pre‑define GPU‑hour caps per tenant per billing cycle, adjustable by SLA tier.  
  - **Job sizing policy**: enforce a maximum model size and batch size; require approval for overrides.  
  - **Dynamic resource allocation**: use spot/low‑price instances with a hard stop after a timeout.  
  - **Cost monitoring API**: expose real‑time cost per job; trigger alerts at, say, 80 % of quota.  
  - **Graceful degradation**: if a tenant exceeds quota, suspend training and send notification.  
- **Complexity & trade‑offs**  
  - Quota enforcement adds ~O(1) overhead to job submission.  
  - Spot instances reduce cost but introduce preemption risk; mitigated by checkpointing.  
  - Overly tight quotas may hurt high‑value customers, so tiered SLAs are essential.

**Edge Cases**

- Sudden data spikes from a tenant (e.g., new dataset upload). → Pre‑validation step to estimate required GPU hours.  
- Multi‑tenant jobs sharing the same node leading to contention. → Isolate per‑job processes or use container resource limits.  
- Billing discrepancies due to time zone differences in reporting. → Use UTC timestamps and reconcile monthly.

**Optimize & Communicate**

Explain that the solution balances *cost control* with *customer flexibility*. Present a diagram of the quota workflow: request → validation → allocation → monitoring → throttling. Emphasize that by combining policy, automation, and visibility, we prevent runaway spend while still enabling robust fine‑tuning across tenants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
