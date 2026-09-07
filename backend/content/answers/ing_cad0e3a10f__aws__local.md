---
qid: ing_cad0e3a10f__aws__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 454
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:39-05:00'
sources: []
---

**Answer – “Load‑balancing algorithms for an AI inference service”**

> **Leadership Principles:** *Ownership* & *Dive Deep*

### Situation
I was leading a team that had to expose a real‑time image‑classification model (≈ 5 ms per request) to millions of mobile users while keeping latency < 30 ms and cost under $0.05/1,000 requests.

### Task
Design a scalable load‑balancer that routes traffic across EC2 GPU instances, automatically scales, and tolerates sudden spikes from regional campaigns.

### Action
I evaluated round‑robin, least‑connections, weighted‑response‑time (WRR), and **consistent hashing**.  
* Implemented WRR with a 5 s rolling average of request latency stored in Amazon CloudWatch metrics.  
* Deployed an Application Load Balancer (ALB) with target groups per availability zone; used the *lambda@edge* feature to shift traffic toward healthier targets.  
* Added **AWS Auto Scaling** policies driven by WRR scores (scale‑out when avg > 20 ms, scale‑in after 10 min of < 15 ms).  
* Monitored cost via AWS Cost Explorer; tuned instance mix (g4dn.xlarge vs g5.2xlarge) to keep spend ≈ $0.04/1k requests.

### Result
- **Latency:** 95th percentile dropped from 42 ms to 18 ms within two weeks.  
- **Cost:** Reduced per‑request cost by 28 %.  
- **Availability:** Zero downtime during a 200% traffic surge; ALB health checks kept the error rate < 0.01%.

### Learnings
Tried round‑robin first—missed hot spots, causing burst latency spikes. Switching to WRR gave measurable, actionable data and allowed proactive scaling. This iterative “try → measure → adapt” loop is what I’ll bring to any AWS‑based AI workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
