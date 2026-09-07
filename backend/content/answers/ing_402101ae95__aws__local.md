---
qid: ing_402101ae95__aws__local
question: 'Explain: Connect With Me — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 467
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:41-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a “Connect With Me” feature for a B2C marketplace that lets users discover and follow each other in real time. The goal was to increase user engagement by 30 % while keeping latency under 200 ms for 1 M concurrent viewers.

**Action**  
*Customer Obsession & Ownership* – I mapped the user journey, identified pain points (slow load times on mobile), and set a clear KPI: 50 % of users who open the feature should follow at least one new person within 5 min.  
*Technical design*:  
- **API Gateway + Lambda** for stateless request handling.  
- **DynamoDB Global Tables** (US‑East & EU‑West) to store follow relationships with eventual consistency.  
- **Kinesis Data Streams** to broadcast real‑time “new follower” events to a **Redis‑Elasticache** cache, which feeds WebSocket endpoints via API Gateway for instant UI updates.  
- **S3 + CloudFront** for static assets and a **Glue** job nightly that aggregates follow metrics into Redshift for analytics.

*Dive Deep & Bias for Action* – I ran load tests on the Kinesis+Redis pipeline; it sustained 200k writes/sec with <30 ms latency. Cost was $0.12 per 1M events, well below our budget.

**Result**  
Within three months:  
- **User engagement up 38 %**, surpassing target.  
- Average “time to first follow” dropped from 4 min to 1.2 min.  
- System handled 3× the peak traffic without SLA breaches, and costs remained 15 % below projected.

**Learning** – Early prototypes underestimated Kinesis shard limits; we added automatic shard scaling logic, which reduced operational toil by 40 %. This demonstrates ownership, measurable impact, and continuous improvement—key qualities a bar‑raiser seeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
