---
qid: ing_738b235d82__star__local
question: 'Explain: Rate Limits and Quotas — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 344
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:45-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a real‑time recommendation engine that pulled user data from a third‑party analytics provider. The service had strict daily request limits (1 M calls) and per‑second caps (10 req/s). Our initial prototype hit those thresholds within the first hour, causing 429 errors and stalling downstream pipelines.

**Task**  
I needed to design a system that could reliably consume the API without exceeding its quotas while still delivering fresh recommendations for every active user.

**Action**  
First, I mapped out all call patterns: bulk batch pulls during off‑peak hours, per‑user syncs on demand, and periodic health checks. I implemented token bucket rate limiting in Go, with a sliding window to smooth bursts. To stay under the daily quota, I added a priority queue that deferred non‑critical requests to later windows, and scheduled background jobs using Kubernetes CronJobs to batch fetches during low‑traffic periods. I also introduced exponential backoff for retries and used Redis as a shared counter to enforce cross‑instance limits in our microservices cluster.

**Result**  
The new design kept us under the 1 M daily cap with a margin of ~15% and eliminated all 429 errors. Real‑time recommendation latency dropped from 4 s to 1.2 s, and we saw a 12% lift in user engagement. I learned that combining algorithmic rate limiting with thoughtful scheduling is essential when working within hard API quotas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
