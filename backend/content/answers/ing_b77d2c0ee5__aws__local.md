---
qid: ing_b77d2c0ee5__aws__local
question: 'Explain: Why DNS Based Global Server Load — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 449
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:42-05:00'
sources: []
---

**Why DNS‑based GSLB often fails**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**

**Situation** – I led a migration of our multi‑region e‑commerce platform to AWS Global Accelerator, replacing the legacy DNS‑based GSLB that was driving 12 M monthly visitors. The old system routed traffic solely by TTL‑cached DNS responses, leading to slow failover and poor regional performance.

**Task** – Deliver a solution that guarantees high availability, low latency, and predictable cost while keeping operational overhead minimal.

**Action**  
1. **Diagnose the root cause**:  
   * DNS TTLs (5–60 min) caused stale routing after an outage.  
   * No health checks – traffic kept hitting dead endpoints.  
   * Global load distribution was static; we couldn’t weight by real‑time metrics.

2. **Design a new architecture**  
   * **AWS Global Accelerator** + **Elastic Load Balancing (ELB)** per region.  
   * **Route 53 latency‑based routing** for initial client resolution, then let Global Accelerator steer traffic to the healthiest endpoint in real time.  
   * **Health checks** on ALB + CloudWatch alarms trigger automatic failover.  

3. **Implementation details**  
   * TTL set to 1 s for Route 53 records (cost‑effective because of accelerator’s internal routing).  
   * Cost: ~$0.025/GB data transfer + $0.025 per hour accelerator, far lower than the $4–$6/month DNS provider premium plan and with no manual refreshes.  

**Result** – After launch:  
* 99.999% regional availability (vs 99.5% previously).  
* Latency dropped by 35 ms on average.  
* Operational cost reduced by 60 %.  
* No more “traffic stuck on dead zone” incidents in the last year.

**What a bar‑raiser hears** – I owned the problem, dug into DNS semantics and AWS services, quantified performance gains, and iterated quickly to avoid failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
