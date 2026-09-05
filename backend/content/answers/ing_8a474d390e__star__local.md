---
qid: ing_8a474d390e__star__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 320
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:18-05:00'
sources: []
---

**Situation**  
At my last company we launched a micro‑blogging platform with 3 million active users. The home feed was lagging: page load times hovered at 2.5 seconds and engagement dropped by 12% when the system hit traffic spikes.

**Task**  
I had to redesign the recommendation pipeline so that each user could see a personalized, real‑time timeline in under 1 second while scaling to millions of concurrent views.

**Action**  
I built an incremental learning model that ran on Spark Streaming. Every new tweet or interaction updated a per‑user feature vector (followers count, retweet frequency, semantic embeddings). We used LightGBM to rank candidate posts; the model was deployed in a Kubernetes cluster with Ray for distributed inference. To keep latency low, we cached top‑10 ranked candidates in Redis and only pulled full content from PostgreSQL on demand. I also introduced A/B testing harnesses that automatically rolled out the new pipeline to 5% of traffic, monitoring click‑through rate (CTR) and response time.

**Result**  
After rollout, average page load dropped to 0.8 seconds, a 68% improvement. CTR increased by 18%, and server CPU usage fell by 22% thanks to the caching strategy. I learned that marrying online learning with real‑time inference pipelines can dramatically improve user experience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
