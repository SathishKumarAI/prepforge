---
qid: ing_f335113330__star__local
question: 'Explain: 6.2 Newsfeed Generation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 387
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:23-05:00'
sources: []
---

**Situation**  
At my previous company we had a feature that pushed daily personalized stories to users’ feeds on our photo‑sharing app. The existing pipeline was single‑threaded and could only generate about 500 stories per minute, which caused queue backlogs during peak traffic (up to 2 M active users).  

**Task**  
Redesign the newsfeed generator so it scales horizontally, keeps latency under 300 ms per request, and supports A/B testing of recommendation algorithms without downtime.  

**Action**  
I split the pipeline into three micro‑services:  
1) *Ingestion* pulls user actions from Kafka, normalizes them, and writes to a sharded Redis cache keyed by user ID.  
2) *Ranking* runs a lightweight XGBoost model in a container pool; it fetches candidate posts from Redis, scores them, and streams the top 50 into a per‑user priority queue stored in DynamoDB.  
3) *Serving* is an async FastAPI endpoint that pulls the queue, applies a freshness filter (posts older than 24 h drop out), and returns the feed as JSON. I added Circuit Breaker logic to fall back to a rule‑based fallback if the model fails. Load balancers use consistent hashing on user ID to keep cache locality.  

**Result**  
After deployment we saw a 4× increase in throughput (≈2 k stories/min per instance) and reduced average latency from 650 ms to 210 ms. The new system handled peak traffic of 5 M active users without queue buildup, and the fallback path improved reliability by 99.9%. I learned that decoupling ingestion, ranking, and serving with stateless services and a shared cache is key for scalable ML‑driven feeds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
