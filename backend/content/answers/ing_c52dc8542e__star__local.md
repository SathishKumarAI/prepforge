---
qid: ing_c52dc8542e__star__local
question: 'Explain: The Operating System Cache — How DNS Actually Works - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 347
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:11-05:00'
sources: []
---

**Situation**  
In my last role as a backend engineer at a SaaS startup, we were deploying a new microservice that had to make thousands of external API calls per minute. Our latency SLA was 100 ms, but our production traffic hit an average of 250 ms because each call triggered a fresh DNS lookup.

**Task**  
I needed to reduce DNS resolution overhead so the service could meet its latency target without changing the underlying API provider or adding a new external dependency.

**Action**  
First, I profiled the application with `perf` and saw that over 70% of the time was spent in `getaddrinfo()`. I then implemented an in‑process DNS cache using `libuv`’s resolver with a TTL set to 60 seconds. On each request, the service first checked this cache; if miss, it performed a lookup and stored the IP in the cache. To avoid “cache stampede,” I used a singleflight pattern so concurrent misses for the same hostname were coalesced into one DNS query. Finally, I exposed an environment variable to tune TTL and added a health check that logged cache hit rates.

**Result**  
The average request latency dropped from 250 ms to 85 ms—well under our SLA—and we saw a 60% reduction in CPU usage on the service nodes. The exercise taught me how OS‑level DNS caching, combined with application‑level logic, can dramatically improve performance when you’re making many repeated network calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
