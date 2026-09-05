---
qid: ing_0438e2f6b3__fp__local
question: 'Explain: Browser DNS caching — Why DNS Based Global Server Load Balancing
  (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 418
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:14:35-05:00'
sources: []
---

**Why browser DNS caching breaks Global Server Load Balancing (GSLB)**  

At its core, GSLB tries to map a single domain name to the *best* backend at any moment, balancing traffic across data centers by answering DNS queries with the most suitable IP. The algorithm assumes that every client will re‑query DNS often enough to see the current load state.

Browsers, however, treat DNS as a *caching service*. After a lookup they store the answer for the TTL advertised by the authoritative server—often minutes or hours. This caching turns DNS from a live routing protocol into a static configuration file. When a client’s cache holds an IP that was optimal when queried but is now overloaded, the GSLB’s decision becomes stale. The client continues to hit the wrong data center until its cache expires, which may be too late for the load‑balancer’s adaptive logic.

From an optimization standpoint, this violates the *stochastic equilibrium* assumption: the system expects each request to sample from the current load distribution, but caching introduces a bias toward past states. The deeper principle is **eventual consistency**—DNS is eventually consistent, but GSLB needs strong consistency at query time.  

A non‑obvious insight: browsers cache *per hostname*, not per path or user session. Even if a GSLB redirects a client to a new IP for a specific application, the browser will keep using the old IP for all subsequent requests to that host, effectively creating invisible “sticky sessions” that defeat the very purpose of load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
