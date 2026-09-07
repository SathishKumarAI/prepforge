---
qid: ing_7f1027ac11__aws__local
question: 'Explain: Frontend Listener — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 613
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:25-05:00'
sources: []
---

**Situation (S)**  
I was tasked with redesigning a high‑traffic e‑commerce front end that served 2 M users/day and needed to support an upcoming flash sale. The existing single‑node listener caused 99.9 % downtime during traffic spikes.

**Task (T)**  
Build a fault‑tolerant, auto‑scaling frontend listener that guarantees <50 ms latency while handling 10× normal load.

**Action (A)**  

| Requirement | Design & AWS Service |
|-------------|----------------------|
| **Scalable entry point** | Application Load Balancer (ALB) with *target groups* behind an Auto Scaling Group of ECS tasks. |
| **Zero‑downtime deployments** | Blue/Green via ALB target group switching + CodeDeploy. |
| **Global reach & caching** | CloudFront CDN + Lambda@Edge for edge‑auth. |
| **Health checks & graceful shutdown** | ALB health checks, deregistration delay = 30 s. |
| **Observability** | CloudWatch metrics (latency, error rate) + X-Ray tracing; alert on >5 % error burst. |

**Result (R)**  
- Traffic increased to 20 M requests/day with 99.999 % availability.  
- Mean latency dropped from 120 ms to 35 ms during the sale.  
- Cost stayed within 12 % of baseline by using spot instances for non‑critical ECS tasks.

---

### Leadership Principles & Bar‑Raiser Lens  

| Principle | How I Showed It |
|-----------|-----------------|
| **Ownership** | Took end‑to‑end responsibility: from ALB config to deployment pipeline, and monitored post‑launch. |
| **Dive Deep** | Benchmarked each component; iterated on deregistration delay after observing 3 s “slow start” in metrics. |
| **Bias for Action** | Deployed a proof‑of‑concept within 48 h, then scaled to production. |
| **Deliver Results** | Quantified latency & availability gains; presented cost/benefit analysis to stakeholders. |

A bar‑raiser would listen for:  
- Clear ownership narrative (S/T/R).  
- Technical depth—specific AWS services, trade‑offs (ALB vs NLB), and why each choice was made.  
- Data‑driven impact with real numbers.  
- Reflection on what failed during spike testing and how the solution mitigated it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
