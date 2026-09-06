---
qid: ing_6c2f566282__fp__local
question: 'Explain: Capacity Planning — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 428
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:54:27-05:00'
sources: []
---

### Capacity Planning – the Spotify Way  
*From first principles*

A music streaming service must **guarantee low‑latency playback for millions of concurrent users** while keeping infrastructure cost in check. The fundamental problem is a *constrained resource allocation*: we have a finite pool of servers, network bandwidth and storage, and we need to decide how many of each to provision so that the probability of a user experiencing buffering stays below an SLA target (e.g., 1 % of sessions).  

Spotify’s solution starts with **modeling traffic as a Poisson process**: arrivals are independent, bursty, and time‑varying. Using queuing theory (M/M/1 or M/G/1), we compute the expected queue length and waiting time for a given number of workers. This gives us a *service curve*—the throughput each micro‑service can sustain.

Next, **elasticity is baked in**: instead of over‑provisioning for peak load (which would waste resources during off‑peak hours), Spotify deploys a *horizontal scaling policy* that monitors real‑time metrics (CPU, request latency) and triggers autoscaling events. The trigger thresholds are derived from the queuing model to keep the system operating in its optimal region—just below saturation.

**Non‑obvious insight:**  
The key lever is **cache hit ratio**. By aggressively caching popular tracks at edge locations, Spotify reduces the effective arrival rate of requests that must traverse the core network. Capacity planning therefore shifts from “scale everything” to “optimize cache placement.” Even a modest 5 % increase in cache hit rate can free up enough compute to support an extra 10 % user base without additional servers.

In short, Spotify’s capacity plan is a *probabilistic resource budget* that balances queuing‑theoretic guarantees with dynamic scaling and edge caching—ensuring smooth playback while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
