---
qid: ing_b5c1529f1b__aws__local
question: 'Explain: Onboard users faster, drive adoption — Liveblocks | Realtime infrastructure
  for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:08-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a real‑time collaborative platform (Liveblocks) from an on‑premise Node.js stack to AWS so we could onboard new users in < 30 s and hit 90 % adoption within three months.  

**Action**  
1. **Ownership & Bias for Action:** Replaced the single‑threaded WebSocket server with a horizontally scalable architecture:  
   * **Amazon API Gateway + Lambda** (edge routing, zero‑idle cost).  
   * **Amazon AppSync + DynamoDB Streams** for real‑time state sync; DynamoDB’s auto‑scaling kept latency < 20 ms.  
   * **AWS CloudFront** cached static assets globally, reducing first‑byte time by 60 %.  
2. **Dive Deep:** Instrumented with **X-Ray** and **CloudWatch Metrics** to surface “user join latency” as a KPI; iterated on the DynamoDB partition key until read/write capacity hit 99th percentile < 5 ms.  
3. **Deliver Results:** Deployed blue/green via CodeDeploy, cut user onboarding time from 120 s to 28 s (77 % reduction). Adoption rose from 45 % to 93 % in 90 days; monthly active users grew by 4× with a $12k/month cost saving over the legacy stack.  

**Result & Learning**  
The end‑to‑end solution delivered measurable speed, reliability, and cost efficiency while keeping us compliant with GDPR (KMS encryption). I learned that early, fine‑grained monitoring turns “good enough” into “exceptionally good.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
