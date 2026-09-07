---
qid: ing_bb0b7b6ae3__aws__local
question: 'Explain: Load Balancing with DNS — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 383
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:31-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
When I joined the ML Ops team at a fintech startup, our recommendation engine was hitting a *single point of failure*—all traffic routed to one inference endpoint caused latency spikes and 15 % SLA breaches during peak hours.

**Action (Dive Deep, Bias for Action, Invent & Simplify)**  
I designed a DNS‑based load balancer using **Amazon Route 53** with health checks and weighted routing.  
1. **Health checks** ping the endpoint every 30 s; failed nodes are automatically removed from rotation.  
2. **Weighted routing** splits traffic (70/30) between primary and secondary endpoints, allowing blue‑green deployments without downtime.  
3. I wrapped this in a Terraform module so it could be reused across environments.

The design leveraged **Amazon CloudWatch** for metrics, triggering an Auto Scaling policy that spun up new inference containers on ECS when latency exceeded 200 ms.  

**Result (Deliver Results)**  
After deployment:  
- *Latency* dropped from 350 ms to 110 ms (70 % improvement).  
- *SLA compliance* rose from 85 % to 99.9 %.  
- *Cost* stayed flat; Route 53’s query cost was negligible compared with the savings from avoided outages.

**Reflection (Learn & Grow)**  
I learned that DNS isn’t a magic bullet—it requires health checks, proper TTLs, and monitoring. I documented best‑practice guidelines for future teams, ensuring the knowledge is captured and scalable across projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
