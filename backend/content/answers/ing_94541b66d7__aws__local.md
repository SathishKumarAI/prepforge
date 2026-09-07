---
qid: ing_94541b66d7__aws__local
question: 'Explain: :thumbsdown: Disadvantages of fail over policies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 429
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:18-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to migrate a high‑traffic e‑commerce platform from a single‑region deployment to a multi‑AZ architecture using *failover* policies (Route 53 health checks + RDS Multi‑AZ). The goal was 99.999% uptime, but we needed to keep operational cost under $200k/month.

**Action & Design**  
I mapped the failure scenarios and built a **blue‑green** failover flow:  
- **Route 53 latency routing** with weighted health checks (AWS Health, CloudWatch).  
- **Elastic Load Balancer (ELB)** with cross‑region target groups.  
- **RDS Aurora Multi‑AZ** for databases, backed by **Aurora Serverless** in the standby region to cut idle cost.

I performed a *cost–benefit* analysis: each active AZ adds ~15% compute and 5% storage costs, but we avoided manual switchover delays (up to 30 min) that could have cost $10k/day in lost sales. I also introduced automated health‑check alerts via SNS + Lambda to reduce human error.

**Result**  
After implementation:  
- Uptime rose from **99.95% → 99.9995%** during a simulated outage (no service disruption).  
- Monthly cost increased by only **$12k** (~6 %) versus the projected $200k baseline, saving ~\$60k in avoided downtime revenue.  

**Learning & Bar‑raiser cues**  
I demonstrated *Ownership* by leading cross‑team change management and *Dive Deep* through detailed failure mode analysis. The trade‑off of higher cost for resilience is a classic AWS decision—here it paid off with measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
