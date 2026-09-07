---
qid: ing_4c4d469a50__aws__local
question: 'Explain: Study map — Mobile Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 449
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:40-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to lead the mobile‑engineering squad that built a “study map” feature—an interactive, geocoded overlay of campus resources for students. The goal: launch within 90 days while keeping latency <200 ms and supporting 50k concurrent users.

**Action (Technical)**  
* **Architecture:** Adopted a **serverless stack** – API Gateway + Lambda (Node.js) for CRUD, DynamoDB for fast key‑value lookups, and CloudFront with Lambda@Edge to cache map tiles.  
* **Data flow:** Students’ GPS points streamed via WebSocket to Kinesis Data Streams → Lambda → Redis‑cluster (ElastiCache) for real‑time proximity queries.  
* **Security & Cost:** Used Cognito for auth; IAM roles kept least privilege. Spot Instances for batch tile rendering reduced EC2 spend by 35 %.  
* **Testing & Rollout:** Implemented chaos engineering with AWS Fault Injection Simulator to validate resilience; staged rollout with feature flags in LaunchDarkly.

**Result (Quantified)**  
* Achieved launch on Day‑90, 99.8 % uptime during beta.  
* Reduced average tile load time from 1.2 s to 0.18 s (84 % improvement).  
* User engagement grew 3× in the first month, with a 12 % increase in daily active users compared to the previous campus‑resource app.

**Learning & Ownership**  
I took ownership of cross‑functional communication, surfacing blockers early; this reduced rework by 22 %. The experience taught me that *deep dives into latency sources* and *bias for action with serverless* deliver measurable impact.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – built a feature directly solving student pain points.  
- **Ownership & Dive Deep** – drove architecture decisions, measured performance, and iterated fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
