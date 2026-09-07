---
qid: ing_afa2777be1__aws__local
question: 'Explain: Concepts — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 498
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:26-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an NLP inference service for a global e‑commerce platform, we discovered that our single‑region deployment made the entire recommendation engine vulnerable to regional outages. The goal was to design a cost‑effective, highly available disaster‑recovery (DR) strategy that would keep latency < 100 ms and loss of revenue < 0.2% during a region failure.

**Action**  
I *owned* the solution by first diving deep into our traffic patterns: 70 % of requests came from North America, 20 % Europe, 10 % Asia. I proposed a **multi‑region active‑passive architecture** using:

| Service | Role |
|---------|------|
| **Amazon SageMaker Endpoint (Multi‑Region)** | Host replicated inference models with automatic traffic routing via Route 53 latency‑based failover. |
| **AWS Global Accelerator** | Reduce jitter and provide a single static IP for clients, ensuring consistent 99.99 % availability. |
| **DynamoDB Global Tables** | Store user preference data with cross‑region replication (≤ 1 s consistency). |
| **S3 Cross‑Region Replication + CloudFront** | Persist model artifacts and serve them globally with low cost. |

We set up *automatic health checks* that, on detection of a region outage, shifted 100% traffic to the standby region within < 30 seconds. I also introduced a **cost‑budget guardrail**: by leveraging spot instances for non‑critical batch jobs, we kept DR costs < 5% of baseline.

**Result**  
During the 2024 Q2 regional outage, our system switched over in 22 s, with no measurable increase in latency and only a 0.1% revenue dip—well below the target. The solution reduced annual infrastructure spend by $180K while improving SLA to 99.999%.  

**Learnings**  
I learned that *ownership* means continuously testing failover scenarios (Chaos Monkey) and that *bias for action* requires automating rollbacks. This DR framework now serves as a template for all new AI services in the organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
