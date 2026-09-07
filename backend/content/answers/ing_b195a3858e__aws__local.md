---
qid: ing_b195a3858e__aws__local
question: 'Explain: Do Not Confuse Routing with Rebalancing — Consistent Hashing |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 564
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:36-05:00'
sources: []
---

**Situation (S)**  
I was leading a team that built an auto‑scaling recommendation engine for a large e‑commerce site. Our traffic spiked during flash sales, so we needed to distribute requests across dozens of model instances while keeping cache locality.

**Task (T)**  
We had to decide between **routing with consistent hashing** and **rebalancing the cluster** every time an instance joined or left. The goal was to minimize latency and avoid expensive data shuffles.

**Action (A)**  
1. *Dive Deep* into our request patterns: 70 % of traffic hit only 20 % of models.  
2. Implemented **consistent hashing** over a virtual node ring, mapping each request to the nearest instance.  
3. Added a lightweight health‑check service that rotated virtual nodes gradually (lazy rebalancing) instead of instant churn.  
4. Monitored **cache hit rate** and **latency** with CloudWatch; used Lambda to trigger a rebalance only when hit rates dropped below 85 %.  

**Result (R)**  
- Reduced average request latency from **120 ms to 68 ms** (43 % improvement).  
- Cut cache miss‑related data transfer by **35 %**, saving ~$12k/month on EBS bandwidth.  
- Achieved 99.9 % availability during a 48‑hour flash sale, with zero service disruptions.

---

### Key AWS Services & Trade‑offs
| Service | Role | Cost/Scalability |
|---------|------|------------------|
| **Elastic Load Balancer** | Front‑end routing | Auto‑scales, minimal cost |
| **Amazon EC2 Auto Scaling** | Instance pool | Pay-as-you-go, handles spikes |
| **Amazon ElastiCache (Redis)** | Shared cache | Low latency, high availability |
| **AWS Lambda + CloudWatch Alarms** | Rebalance trigger | Serverless, event‑driven |

### Bar‑raiser Checklist
- **Ownership**: Took full responsibility for latency and cost.  
- **Dive Deep**: Quantified traffic distribution, modeled hashing impact.  
- **Quantified Impact**: 43 % latency reduction, $12k/month savings.  
- **Learning from Failure**: Early attempts with aggressive rebalancing caused thrashing; pivoted to lazy rebalancing after analyzing cache miss patterns.

> *Leadership Principles*: Customer Obsession (latency), Ownership (end‑to‑end solution), Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
