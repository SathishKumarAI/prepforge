---
qid: ing_00759648c4__star__local
question: 'Explain: Use a Stable Node Identity — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 320
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:30-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our recommendation engine’s user‑segment cache at a streaming startup. Our previous system used a simple round‑robin node assignment, which caused massive cache churn when we added or removed nodes; users saw stale recommendations and traffic spikes during resharding.

**Task**  
My goal was to implement a stable node identity scheme that would minimize data movement, keep lookup latency low, and support seamless scaling as we grew from 4 to 12 cache nodes over the next six months.

**Action**  
I introduced consistent hashing with virtual nodes: each physical cache server received 100 hash slots on a 32‑bit ring. We wrapped the Redis cluster behind a lightweight proxy that translated user IDs into ring positions, ensuring that only ~1/N of keys shifted when nodes changed. I also added a “sticky” flag for active sessions to avoid session loss during resharding. To monitor stability, we instrumented hash‑bucket occupancy and set alerts if variance exceeded 5%. The deployment used Docker Swarm for orchestration and Helm charts for configuration consistency.

**Result**  
After the rollout, cache miss rates dropped from 18% to 4%, and our user latency improved by 23 ms on average. During a 30‑node expansion, only ~2% of keys moved, eliminating downtime. I learned that careful hash ring design coupled with proactive monitoring can make scaling almost invisible to users while keeping operational overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
