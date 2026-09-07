---
qid: ing_9af107b466__aws__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 440
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:30-05:00'
sources: []
---

**Situation – Task:**  
At my previous firm we were migrating a global e‑commerce platform to a multi‑region architecture on AWS. The business required **99.999% uptime** for the checkout service while keeping latency under 50 ms for users worldwide. I was tasked with designing an *Active‑Active* pattern that balanced resilience, cost, and developer agility.

**Action – Technical Design:**  
1. **Data replication** – We used **Amazon DynamoDB Global Tables** (bidirectional streaming) to keep product inventory consistent across us-east-1 & eu-central-1.  
2. **Service routing** – An **Application Load Balancer** with *Cross‑Region* listeners fed traffic into two identical ECS Fargate clusters, each in a separate region.  
3. **Stateful coordination** – A lightweight **Redis‑Cluster (Amazon ElastiCache)** held per‑user session tokens; we enabled *replication group* with read replicas to keep sessions available if one region failed.  
4. **Failover automation** – CloudWatch alarms triggered **AWS Lambda** that flipped DNS via Route 53 latency routing, ensuring 200 ms fallback within 30 s.

**Result:**  
After launch we achieved **99.999% availability** for 12 months with an average latency of **38 ms** globally. The multi‑region setup cut our cost by 18% compared to a single‑region HA stack while improving data consistency (zero stale reads).  

**Reflection – Bar‑raiser signals:**  
- Demonstrated *ownership* by driving the entire architecture and handling post‑deployment monitoring.  
- Showed *dive deep* through precise service choices and trade‑off analysis.  
- Quantified impact with real uptime/latency metrics.  
- Learned from a failed early prototype that used RDS cross‑region replication, which introduced latency spikes; we pivoted to DynamoDB Global Tables for true active‑active consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
