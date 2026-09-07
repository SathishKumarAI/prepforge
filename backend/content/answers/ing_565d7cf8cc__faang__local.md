---
qid: ing_565d7cf8cc__faang__local
question: 'Explain: Request rate limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:45-05:00'
sources: []
---

**Clarify**  
We’re asked how to scale an API when clients hit it too often—i.e., implement a *request‑rate limiter*. Key assumptions:  

* The API is stateless (or can be made so).  
* Clients identify themselves via API keys or JWTs.  
* We need per‑client limits, possibly burstable, and global throttling for abuse protection.

**Approach**  
1. Choose a token‑bucket / leaky‑bucket algorithm.  
2. Store counters in a fast, distributed store (Redis or Memcached).  
3. Expose the limiter as a middleware layer before business logic.  
4. For burstable limits, allow short spikes; otherwise enforce strict caps.

**Depth**  
*Token bucket:* each key has `capacity` tokens and refills at rate `R`. On request: if token >0 → decrement & allow; else reject (429).  
Implementation: atomic `DECRBY` in Redis with a key TTL equal to bucket capacity / refill rate. Complexity O(1) per request, O(N) space for N clients.  

*Global limiter:* maintain a global counter with the same algorithm to prevent DDoS.  

Trade‑offs: Redis latency vs local memory; burstable limits increase throughput but risk abuse; strict limits protect resources but hurt user experience.

**Edge Cases**  
- Clock skew between services → use server time for refill.  
- Client key rotation or revocation → purge counters promptly.  
- Distributed deployments → ensure atomicity across nodes (Redis cluster).  

Test: simulate burst traffic, key rollover, and network partitions.

**Optimize & Communicate**  
To improve latency, cache the token count in a per‑request context and only hit Redis on miss. For large scale, shard keys by prefix or use consistent hashing to balance load. Explain to interviewers that we’re balancing fairness (per‑client limits), performance (O(1) ops), and fault tolerance (Redis persistence). This structured reasoning shows clear problem understanding, a solid solution path, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
