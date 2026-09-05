---
qid: ing_03f91e639f__star__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 359
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:36-05:00'
sources: []
---

**Situation**  
At my previous company we built a real‑time recommendation engine that pulled model artifacts from multiple microservices across three regions. We initially used plain DNS to resolve the services, but by Q3 our latency had spiked and we were seeing 15 % more failed requests during traffic surges.

**Task**  
I was tasked with diagnosing the root cause of the spikes and redesigning the discovery mechanism so that service resolution stayed under 5 ms even under a 4× traffic burst, while keeping operational overhead low.

**Action**  
First I profiled DNS lookups using `dig` and `dnsperf`; they were taking up to 12 ms each during peak load because the resolver had to hit the root servers for every request. I then implemented a local in‑memory cache with TTLs of 30 seconds, backed by Consul’s key/value store for dynamic updates. The cache was integrated into our gRPC interceptor so that every client call first checked the local map before falling back to DNS. We also added health checks and automatic eviction when a service went down.

**Result**  
After the change, average lookup time dropped from 12 ms to 2 ms, and failure rates during traffic spikes fell from 15 % to <1 %. The new system also reduced external DNS queries by 95 %, cutting costs on our cloud provider’s DNS quota. I learned that while DNS is simple, it can become a bottleneck in high‑throughput systems; caching with a lightweight service registry often yields far better performance and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
