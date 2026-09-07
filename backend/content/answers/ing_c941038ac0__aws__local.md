---
qid: ing_c941038ac0__aws__local
question: 'Explain: Engagement Service — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 415
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:43-05:00'
sources: []
---

**Situation & Task**  
When I joined my previous company, the growth team launched an “Engagement Service” that had to surface personalized Instagram‑style feeds for 30 M daily active users while keeping latency under 200 ms. The goal was to increase time‑on‑platform by at least 15 % without inflating hosting costs.

**Action – Design & AWS Stack**  
I owned the solution, so I first *dive deep* into user clickstreams and used **Amazon Kinesis Data Streams** for real‑time ingestion. A Lambda pipeline transforms events into a **DynamoDB Global Secondary Index** keyed by `user_id` and `timestamp`. For recommendation scoring I built a **scikit‑learn model** deployed in **AWS SageMaker Endpoint**, invoked per user batch every 5 min via EventBridge rules.  

The feed is rendered on the front‑end from an edge cache powered by **Amazon CloudFront** backed by **ElastiCache Redis** for hot personalization data, ensuring sub‑100 ms read latency. We used **AWS Step Functions** to orchestrate the pipeline and **CloudWatch Alarms** to auto‑scale Lambda concurrency based on traffic spikes.

**Result**  
Within three months we saw a 17 % lift in average session duration (up from 5:12 min to 6:07 min) and reduced cost per active user by 22 % compared with the previous monolithic approach.  

**Reflection & Learning**  
The biggest failure was over‑provisioning Lambda memory, which inflated costs by 18 %. I iterated on the cold‑start profile, shifting to **Provisioned Concurrency**, cutting spend by 12 % while maintaining SLAs. This reinforced my bias for action and ownership: always measure, learn, and iterate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
