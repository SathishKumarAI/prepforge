---
qid: ing_236719fce2__aws__local
question: 'Explain: Endpoint: PUT /config/algorithm — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 578
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:34-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: At my previous role I built a public API that let data scientists deploy ML models as endpoints (`PUT /config/algorithm`). The service was hit by 4× traffic during quarterly model roll‑outs, causing 30 % latency spikes and intermittent failures.  
> *Task*: Redesign the load‑balancing layer so every request is routed to a healthy inference container while keeping costs < 10 % of baseline.

**Action (Design)**  

1. **Service discovery & health checks** – each inference pod registers with **AWS Cloud Map**; health is reported via **ELB Health Checks** on a `/health` endpoint.  
2. **Application Load Balancer (ALB) + Target Groups** – split traffic by algorithm version (`v1`, `v2`) using path‑based routing (`/config/algorithm/v{n}`). ALB supports *sticky sessions* for stateful models and *cross‑zone load balancing* for high availability.  
3. **Auto Scaling (ASG)** – scale EC2/ECS containers based on CPU/Memory thresholds; use **Predictive Scaling** to pre‑provision capacity during scheduled spikes.  
4. **Caching layer** – lightweight in‑memory cache (Redis via ElastiCache) stores model metadata, reducing ALB lookups by 70 %.  

**Result** – Post‑deployment metrics:  
- *Latency*: 95th percentile dropped from 650 ms to **120 ms**.  
- *Availability*: Uptime improved from 93 % to **99.9 %** during peak periods.  
- *Cost*: Total spend on compute & LB decreased by **12 %** due to better scaling and caching.

**Dive Deep & Bias for Action**

I wrote a traffic‑simulation script that injected realistic workloads, discovered the ALB’s default 60‑second deregistration delay was too long, so I tuned `deregistration_delay.timeout_seconds` to **30 s**, cutting model warm‑up time by half.  

**Learning from Failure** – The first version used a single NLB; we hit a *single point of failure* during a regional outage. Switching to ALB with cross‑zone routing eliminated that risk and taught me the value of “fail‑fast” health checks.

> **Bar‑raiser cues:**  
> - Demonstrated ownership by owning the entire pipeline from request to inference.  
> - Showed depth: explained AWS services, trade‑offs (ALB vs NLB), and tuned parameters.  
> - Quantified impact with real numbers.  
> - Reflected on failure and corrective action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
