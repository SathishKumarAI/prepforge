---
qid: ing_3cd63c668e__aws__local
question: 'Explain: Redundancy Trade-Offs — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:21-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a real‑time recommendation engine that served millions of users daily. The legacy monolith had a single database cluster as a SPOF; any outage halted all recommendations and cost us ~ $200k per hour in lost revenue.

**Action**  
I scoped the problem, performed a *dive deep* on failure modes, and built a **multi‑AZ, read‑replica architecture** using Amazon Aurora Serverless v2.  
1. **Write path:** Primary cluster in `us-east-1a`; writes routed through an Application Load Balancer with health checks.  
2. **Read path:** Two global read replicas (`eu-west-1`, `ap-northeast-1`) for latency‑sensitive users.  
3. **Cache layer:** Amazon ElastiCache Redis clusters per region, automatically failover via Auto Discovery.  
4. **Circuit breaker** in the service tier (Spring Boot) to fall back to a cached “last known good” payload if all replicas are down.  

I added an **AWS CloudWatch alarm** on `DBConnectionErrors` that triggers an SNS topic and auto‑scales the Lambda functions responsible for data ingestion.

**Result**  
After deployment, we eliminated the SPOF and achieved:  
- 99.999% availability (downtime < 1 min in a 12‑month period).  
- Cost savings of ~ $70k/month by shifting to Aurora Serverless and leveraging read replicas only when traffic spikes.  
- A 35% reduction in latency for users in Europe due to local reads.

**Learnings & Bar‑raiser cues**  
*Ownership:* I owned the full incident lifecycle, from design through post‑mortem.  
*Dive Deep:* I quantified failure rates and correlated them with user churn.  
*Quantified Impact:* Clearly tied architectural changes to revenue and cost metrics.  
*Learning from Failure:* The first outage taught us that automated failover alone isn’t enough; we need graceful degradation, which drove the circuit‑breaker design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
