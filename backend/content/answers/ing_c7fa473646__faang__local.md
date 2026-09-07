---
qid: ing_c7fa473646__faang__local
question: 'Explain: The fundamental purpose of GSLB — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 424
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:24-05:00'
sources: []
---

**Clarify**  
We’re asked why a *DNS‑based* Global Server Load Balancer (GSLB) fails to achieve true “global load balancing.” Clarifying: we mean that GSLB resolves client requests to the nearest/healthiest data center via DNS, but it cannot adapt in real time to traffic spikes or failures. I’ll assume we’re comparing it to a state‑ful application layer balancer.

**Approach**  
1. List DNS characteristics (caching, TTL).  
2. Explain how GSLB uses them for routing.  
3. Highlight mismatch between DNS latency and actual server load.  
4. Contrast with TCP/UDP or HTTP level balancing.

**Depth**  
DNS is *stateless* and cached aggressively; a response can be stored client‑side for minutes to hours (TTL). If a data center becomes overloaded or goes down, the next DNS query still returns the old IP until TTL expires—leading to traffic “stickiness” and overloading. Even with low TTLs, repeated queries increase overhead and risk of cache misses. Additionally, DNS can’t see application‑level health metrics; it relies on external probes that may lag behind real conditions. Thus GSLB cannot react instantaneously to rapid load shifts or partial outages.

**Edge Cases**  
- *High churn*: frequent IP changes cause DNS flapping.  
- *Geographic misrouting*: clients in the same region may still hit distant sites due to stale cache.  
- *Load spikes*: sudden traffic surges are not mitigated until TTL expires.

**Optimize & Communicate**  
To improve, combine GSLB with application‑layer load balancers or use Anycast IPs for faster failover. In conversation, I’d emphasize that DNS is great for global routing but inherently limited by caching and statelessness; real‑time load balancing requires stateful protocols. This showcases structured reasoning, depth, and practical trade‑offs expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
