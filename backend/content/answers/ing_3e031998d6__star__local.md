---
qid: ing_3e031998d6__star__local
question: 'Explain: Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 331
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:30-05:00'
sources: []
---

**Situation**  
At my last role I was leading a recommendation engine that served personalized product suggestions to millions of users per day. The model inference latency had crept up to 350 ms, pushing the average page load time over our SLA and causing a noticeable drop in conversion.

**Task**  
I needed to reduce inference latency by at least 50 % without sacrificing prediction accuracy or increasing infrastructure cost.

**Action**  
First I profiled the pipeline and found that 80 % of requests were for users who had interacted with the same set of items in the last hour. I implemented an LRU cache in Redis keyed on user‑ID + item‑set hash, storing the pre‑computed feature vectors and the model’s softmax output. The cache hit ratio grew to 73 %. For cold starts I added a fallback to compute features on‑the‑fly but queued them so they wouldn’t block the main request path. I also switched from a heavy GPU batch inference job to a lightweight CPU microservice for the cached cases, saving $2k/month in cloud spend.

**Result**  
Cache hits cut inference latency from 350 ms to 120 ms on average, and overall page load time improved by 38 %. Conversion rose by 4 %, translating into roughly $0.50 extra revenue per user per month. I learned that a thoughtful caching strategy can deliver both performance and cost benefits when you align the cache key with real usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
