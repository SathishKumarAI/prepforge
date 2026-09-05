---
qid: ing_08d8297034__fp__local
question: 'Explain: CacheFront — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 507
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:35-05:00'
sources: []
---

### CacheFront: Why Uber can read **>40 M reads/s** from a remote store

The *fundamental problem* is that the latency of an online key‑value store (e.g., Cassandra or Dynamo) grows linearly with the number of concurrent requests, whereas the application needs sub‑millisecond responses for millions of users.  
A cache front solves this by **decoupling read traffic from storage**: every request first hits a local in‑memory tier; only when a miss occurs is the data fetched from the remote store.

#### Why it must work that way

1. **Throughput‑latency trade‑off** – The probability of a cache hit, \(p\), multiplies the effective read bandwidth:
   \[
   B_{\text{effective}} = p\,B_{\text{mem}} + (1-p)\,B_{\text{net}}
   \]
   With \(p\approx0.95\) and \(B_{\text{mem}}\gg B_{\text{net}}\), the aggregate throughput can exceed 40 M reads/s even if each network read costs ~10 ms.

2. **Consistency‑cost** – CacheFront uses *read‑through* writes: updates are applied to both cache and store in a single transaction, ensuring that subsequent reads see fresh data without additional round‑trips.

3. **Probabilistic eviction (LFU/TTL)** – The cache policy is derived from the *Zipfian distribution* of key access: the top 1 % keys account for ~50 % of traffic. By keeping these in memory, Uber reduces misses dramatically.

#### Non‑obvious insight

Most systems treat cache as a *performance layer*. CacheFront instead treats it as an **integrated data plane**: because every write is reflected back to the store immediately, the cache never diverges from source-of-truth. This eliminates the “stale read” problem that plagues many two‑tier architectures and allows Uber to guarantee consistent user experience at scale.

*In short*: CacheFront turns a slow, scalable storage backend into an ultra‑fast, consistency‑guaranteed service by placing the most frequently accessed data in memory, keeping it fresh through write‑through semantics, and exploiting Zipfian access patterns to hit 40 M reads/s.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
