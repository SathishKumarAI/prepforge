---
qid: ing_8ad134aac0__star__local
question: 'Explain: Two level scheduling — DevOps-SRE/2_ContainerOrchestration/ApacheMarathon&Mesos.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 329
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were running a micro‑services platform on Mesos with Apache Marathon. Our traffic spiked during product launches and the single‑level scheduler kept over‑committing CPU and memory, causing frequent pod evictions.

**Task:**  
I needed to redesign the scheduling so that Marathon could respect resource limits set by Mesos while still maximizing cluster utilization for our 200+ services.

**Action:**  
Implemented Mesos’ two‑level scheduler: first, I configured Marathon as a *framework* in Mesos, registering with the master and advertising its own resource offers. Then I tweaked Marathon’s `--mesos_quota` settings to enforce per‑team quotas, and used `--tasks_max_running` to cap concurrent tasks. Inside Marathon, I added task constraints (e.g., no more than two replicas on a single host) and set `resources/cpu` and `mem` explicitly for each service. Finally, I enabled Mesos’ *fair share* scheduler so that critical services got priority during contention.

**Result:**  
The cluster’s overall utilization rose from 68% to 82%, while average pod eviction rate dropped by 47%. We also cut the mean response time of high‑traffic endpoints by 15 ms. I learned how two‑level scheduling balances global resource fairness with application‑specific constraints, and that fine‑tuning framework limits can dramatically improve stability without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
