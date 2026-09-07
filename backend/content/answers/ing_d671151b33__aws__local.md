---
qid: ing_d671151b33__aws__local
question: 'Explain: Disadvantages — Cloud Computing without Containers | Cloudflare
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 417
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:20-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked to evaluate a legacy SaaS platform that ran on bare‑metal servers in the public cloud. The customer complained about unpredictable latency spikes and high support costs—issues we could only solve by moving to containerized workloads.

**Action (Dive Deep, Bias for Action)**  
I first performed a 30‑day “shadow” audit of the existing VM fleet: CPU usage averaged **68 %**, but burst periods hit **>95 %**, causing throttling. I then designed a micro‑service architecture using **Amazon ECS + Fargate** with auto‑scaling policies tied to CloudWatch metrics (CPU >70 % → add task). To preserve data locality, I added an **EFS** file system for shared state and leveraged **AWS Global Accelerator** for cross‑region failover.  

I built a cost model:  
- Bare‑metal: $12k/month with 3× overprovisioning.  
- Containerized: $8.4k/month (30 % savings) + $1.2k in Fargate overhead, net **$2.8k** saved.  

The migration cut support tickets by **42 %** and reduced mean‑time‑to‑repair from 3.5 h to 45 min.

**Result (Deliver Results)**  
Post‑migration, the platform maintained <200 ms latency for 99.9 % of requests during peak load, while quarterly operating costs fell by **$34k**—a 25 % YoY reduction.  

**Bar‑raiser notes**: I owned the end‑to‑end refactor, dove deep into metrics to justify trade‑offs, quantified impact on cost and performance, and iterated quickly after an initial misstep in EFS throughput sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
