---
qid: ing_9bc3c1a952__faang__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 419
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:19-05:00'
sources: []
---

**Clarify**  
The question asks why DNS‑based Global Server Load Balancing (GSLB) is considered ineffective in practice. We assume the interviewer wants a technical explanation of inherent limitations (latency, cache, lack of real‑time state, failover delays).

**Approach**  
1. Identify key properties of DNS: stateless, cached, slow to propagate.  
2. Contrast with true load balancers that see traffic in real time.  
3. Highlight the consequences for global routing and failover.

**Depth**  
DNS GSLB resolves a client’s domain name to an IP chosen from a set of data‑center endpoints. Because DNS is cached, the decision is made once per TTL (often minutes). The balancer cannot react to real‑time metrics such as server health, queue length, or sudden traffic spikes. If a backend goes down, clients that already cached its IP will keep sending traffic until the cache expires, causing prolonged outages. Moreover, DNS responses are typically “anycast” – the same record is served from multiple locations – but the selection algorithm (round‑robin, weighted, geo‑IP) is coarse and cannot guarantee optimal path or capacity usage. Finally, the lack of state means global load distribution can be uneven; some sites may become overloaded while others idle.

**Edge Cases**  
- Very short TTLs reduce cache benefits but increase query traffic.  
- Large mobile users switching cells may hit different DNS resolvers, breaking consistency.  
- Some registrars ignore Geo‑DNS hints, yielding suboptimal routing.

**Optimize & Communicate**  
Explain that hybrid approaches (DNS + real‑time edge routers or application‑level load balancers) mitigate these issues. Conclude by stressing that while DNS GSLB offers simplicity and wide reach, its statelessness and caching make it unsuitable for fine‑grained global traffic management.  

> *Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
