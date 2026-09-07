---
qid: ing_92e5e30e75__faang__local
question: 'Explain: 20 Rate Limiting Algorithms — Rate Limiting Algorithms Explained
  with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 1126
total_tokens: 1364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:12-05:00'
sources: []
---

**Clarify**  
We’re asked to *explain* 20 common rate‑limiting strategies and show how each might be implemented in code.  
Assumptions:  
1. The limiter will protect an API endpoint (per‑user or global).  
2. We can use in‑memory storage for simplicity, but note that distributed stores are required for real deployments.  

**Approach**  
List the algorithms alphabetically, give a one‑sentence description, and present a minimal code sketch (Python + Redis/pseudocode).  
Afterward highlight trade‑offs: complexity, memory usage, fairness, burst handling, and typical use cases.

| Algorithm | What it does | Typical use | Code sketch |
|-----------|--------------|-------------|-------------|
| **Token Bucket** | Allows bursts up to *burst* size; tokens refill at *rate*. | Gaming APIs, CDN. | ```tokens = min(max_tokens, tokens + rate*dt); if tokens>=1: consume``` |
| **Leaky Bucket** | Smooths traffic by draining at constant *leak_rate*. | Video streaming throttling. | ```queue.append(time); while queue and time - queue[0] > 1/leak_rate: queue.pop(0)``` |
| **Fixed Window** | Counts requests in a fixed interval; resets each window. | Basic API quotas. | ```count += 1 if timestamp < window_end else reset()``` |
| **Sliding Window Log** | Stores timestamps of all requests; removes old ones. | Precise per‑second limits. | ```timestamps = [t for t in timestamps if t > now-interval]```
| **Sliding Window Counter** | Uses multiple sub‑windows to approximate sliding window. | Efficient counters. | ```counters[slot] += 1; sum(counters)``` |
| **Dynamic Window** | Expands or shrinks window based on traffic variance. | Adaptive services. | *Pseudo*: adjust `interval` when load changes |
| **Bucket (Fixed‑Window + Token)** | Combines fixed windows with token bucket for bursts. | Cloud APIs. | *See Token Bucket* but reset per window |
| **Circuit Breaker** | Opens circuit after failures; limits retries. | Microservice resilience. | ```if failures > threshold: open``` |
| **Bulkhead** | Isolates resources into partitions to prevent cascading failures. | Service isolation. | *N/A code* – design pattern |
| **Rate‑by‑IP** | Limits per IP address. | Public endpoints. | `ip_counts[ip] += 1` |
| **Rate‑by‑User** | Limits per authenticated user. | SaaS plans. | `user_counts[user_id] += 1` |
| **Quota + Sliding Window** | Global quota that refills over time. | Monthly plan limits. | *Token Bucket* with larger refill period |
| **Throttling via Redis Sorted Set** | Stores timestamps; uses ZREMRANGEBYSCORE to purge old entries. | High‑scale APIs. | `redis.zremrangebyscore(key, 0, now-interval)` |
| **Probabilistic Throttle (Leaky Bucket with random drop)** | Randomly rejects to smooth spikes. | CDN edge caching. | `if rand() < drop_rate: reject` |
| **Dynamic Rate Adjuster** | Uses ML to predict traffic and adjust rate in real time. | Auto‑scaling APIs. | *Pseudo*: `rate = model.predict(current_load)` |
| **Rate‑limit per Region** | Limits per geographic region for compliance. | Geo‑restricted services. | `region_counts[geo] += 1` |
| **User‑Tiered Limits** | Different tiers have different rates. | SaaS pricing plans. | `rate = tier_rates[user.tier]` |
| **Burstable Token Bucket (leaky bucket with refill)** | Allows burst up to *burst* but leaks slowly. | Messaging queues. | `tokens += leak_rate*dt; tokens = min(tokens, burst)` |
| **Adaptive Sliding Window** | Adjusts window size based on recent traffic patterns. | CDN edge nodes. | *Pseudo*: shrink if spikes detected |

**Depth**  
Each sketch runs in O(1) per request except the log‑based sliding windows (O(n) for removal but can be amortized). Memory usage ranges from constant (token bucket) to linear in requests per window (log).  

**Edge cases**  
*Clock skew*: use monotonic clocks.  
*High churn*: reset counters on new users.  
*Distributed consistency*: use Redis or a consensus store.  

**Optimize & communicate**  
- Prefer *Token Bucket* for bursty traffic; *Sliding Window Counter* for near‑real‑time limits.  
- Use Redis sorted sets for sub‑second precision at scale.  
- Communicate decisions by mapping business requirement → algorithm trade‑offs, e.g., “We need to allow 100 requests per minute with a burst of 20 → Token Bucket with rate=1/60 and burst=20.”  

This structured overview gives interviewers confidence that you understand the landscape, can choose an appropriate limiter, and can implement it efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
