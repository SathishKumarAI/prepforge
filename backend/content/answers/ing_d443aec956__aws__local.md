---
qid: ing_d443aec956__aws__local
question: 'Explain: Load Balancing — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 388
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:13-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the redesign of a global recommendation engine that served ~2 M users per day. The old monolith suffered 30 % downtime during traffic spikes, hurting revenue (≈$4 k/day).  

**Action**  
I architected an **AWS‑native load‑balancing pipeline**:  
1. **Application Load Balancer (ALB)** fronts the stateless inference containers in ECS Fargate.  
2. Traffic is distributed by *content‑based routing* (user segment → container pool) and *sticky sessions* to preserve cache hits.  
3. Each pool runs in **multiple AZs** with an **Auto Scaling Group** that scales on CPU & request latency, ensuring 99.999 % availability.  
4. I added a **Route 53 weighted routing policy** to gradually shift traffic to the new architecture (canary release).  
5. For burst protection I enabled **AWS Shield Advanced** and set up *WAF* rules to block DDoS vectors.

**Result**  
- Downtime dropped from 30 % to <0.01 %.  
- Latency improved by 45 %, increasing click‑through rate by 12 %.  
- Cost decreased by 18 % thanks to fine‑tuned scaling and spot instances.  

**Reflection (Bar‑raiser)**  
I took full **Ownership**, diving deep into ALB metrics, and iterated until the system met SLA targets. I learned that *canary routing* reduces risk; next time I’ll pre‑seed cache data during warm‑up to cut cold‑start latency further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
