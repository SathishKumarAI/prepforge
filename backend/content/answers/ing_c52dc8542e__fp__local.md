---
qid: ing_c52dc8542e__fp__local
question: 'Explain: The Operating System Cache — How DNS Actually Works - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 394
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:03-05:00'
sources: []
---

**Why an OS caches DNS?**  
When a program resolves `example.com`, it must translate that name into an IP address. Without caching, every resolution would trigger a round‑trip to a recursive resolver, incurring ~50 ms latency and consuming bandwidth. The cache is essentially *stochastic memoization*: it stores recent lookups along with their time‑to‑live (TTL) so future requests can be answered locally, reducing both variance in response time and load on the network.

**How it works, step by step**

1. **Query** – The resolver library (`getaddrinfo`) checks the local cache table keyed by hostname+family.
2. **Hit & TTL check** – If an entry exists *and* its timestamp + TTL > now, return the cached IP(s) immediately.
3. **Miss or expired** – Forward the query to a configured recursive DNS server over UDP/TCP.
4. **Response handling** – Store the returned records in the cache with their TTLs and any negative caching (NXDOMAIN) information.
5. **Eviction policy** – Least‑Recently‑Used (LRU) or size‑based eviction removes stale entries when memory is constrained.

**Non‑obvious insight**  
The *effective* TTL is often far shorter than the DNS record’s advertised TTL because the OS cache may evict an entry before its TTL expires if the cache overflows. Thus, even with a 3600 s TTL on the zone, real-world visibility can drop to minutes. This subtle mismatch between server‑declared TTL and client‑side eviction is why many services observe “stale” data longer than intended unless they explicitly manage their own local caching layer or use DNS over HTTPS with larger buffers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
