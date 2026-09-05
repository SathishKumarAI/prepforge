---
qid: ing_16f9f37441__fp__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 427
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:32-05:00'
sources: []
---

**Why a CDN needs “time‑to‑live” (TTL) and how purging fixes stale data**

A CDN is essentially a *distributed cache* that serves user requests from the nearest edge node.  
The fundamental problem it solves is **latency + bandwidth**: fetch once from origin, replicate locally, serve many times.  

To keep this system correct, every cached object must be associated with an expiration policy.  
If we let a copy live forever, any subsequent change at the origin will never reach users—*inconsistency*.  
If we purge immediately after each write, we lose all performance benefits.

The *TTL* is the simplest consistent‑ness guarantee: it states that “this object is valid for `t` seconds”.  
Mathematically, the CDN’s state satisfies a **Markov property** – the future cache content depends only on the current TTLs, not on past updates.  
When a request arrives:
1. If the cached copy’s remaining TTL > 0, return it (fast, no network hop).  
2. Else fetch from origin, reset TTL to `t`, and serve.

Purging is an *override* of this rule: it forces a cache entry to expire immediately.  
From an information‑theoretic view, purging reduces the **entropy** of the system by ensuring that stale bits are discarded before they can propagate.  

**Non‑obvious insight:**  
TTL alone cannot guarantee *eventual consistency* if updates happen more frequently than the TTL allows. Purging turns a static cache into an *adaptive* one: by selectively invalidating entries when the origin changes, the CDN keeps its **staleness budget** bounded while still reaping cache hits. Thus purging is not just a “kill switch” but a principled way to maintain the trade‑off between freshness and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
