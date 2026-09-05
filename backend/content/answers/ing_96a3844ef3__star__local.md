---
qid: ing_96a3844ef3__star__local
question: 'Explain: You run a shared LLM platform for 30 internal teams on one GPU
  fleet. Design the tenancy model: fairness, isolation, and cost attribution.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 368
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:21-05:00'
sources: []
---

**Situation**  
When our company launched an internal AI hub, we had to support 30 product teams that were all pulling from a single GPU cluster. The platform was shared over a month‑long sprint; some squads ran large inference jobs while others trained fine‑tuned models. We needed a system that kept everyone honest about resource usage and protected sensitive data.

**Task**  
Design a tenancy model that guarantees fairness, isolates workloads to prevent leaks, and provides accurate cost attribution so teams could budget correctly.

**Action**  
I introduced a two‑tier scheduler: first, we allocated each team a baseline quota of GPU‑hours based on historical demand and project priority. Within that slice, we used Kubernetes namespaces with NVIDIA Device Plugin limits to enforce per‑pod GPU quotas, ensuring no one could oversubscribe. For isolation, I added runtime‑level encryption via NVIDIA’s confidential computing framework, wrapping each model’s weights in a secure enclave. To attribute cost, we instrumented the scheduler to log every job’s GPU time and memory usage; these logs fed into an internal billing microservice that converted raw usage into dollars using our per‑GPU hourly rate. Finally, I set up dashboards so teams could see their current spend versus budget in real time.

**Result**  
The new model reduced GPU contention incidents by 70 % and eliminated data leakage complaints. Cost attribution accuracy improved to <1 %, enabling teams to forecast budgets within a 5 % margin. The transparent dashboard also fostered healthy competition, with the top three teams cutting their GPU usage by 15 % over six months. I learned that combining scheduler limits, secure enclaves, and fine‑grained billing is essential for scaling shared AI infrastructure responsibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
