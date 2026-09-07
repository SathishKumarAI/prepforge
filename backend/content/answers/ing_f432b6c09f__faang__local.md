---
qid: ing_f432b6c09f__faang__local
question: 'Explain: Preface — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 405
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:06-05:00'
sources: []
---

**Clarify**  
The interviewer asks why DNS‑based Global Server Load Balancing (GSLB) is unreliable for real‑time traffic distribution. I’ll confirm assumptions: we’re dealing with dynamic user loads, latency sensitivity, and a need for instant failover.

**Approach**  
1. Identify DNS’s inherent latency (TTL).  
2. Examine statelessness of DNS responses vs stateful load balancers.  
3. Highlight propagation delays and caching across recursive resolvers.  
4. Note lack of real‑time health checks in standard DNS.

**Depth**  
DNS GSLB resolves a domain to an IP based on a precomputed set of weights or round‑robin logic, then caches that answer for the TTL period. Because clients (and their ISPs) cache responses, traffic can stay stuck at a suboptimal server long after load shifts or a node fails. Unlike software load balancers that query health probes and adjust routing instantly, DNS cannot react to sudden spikes or outages until the next lookup cycle. Additionally, global replication of DNS changes takes minutes, so cross‑region failover is delayed. This leads to poor QoS for latency‑sensitive services and unpredictable user experience.

**Edge Cases**  
- Very short TTLs reduce cache but increase query load and cost.  
- Clients with aggressive caching ignore updates altogether.  
- Load imbalance during flash crowds persists until TTL expires.

**Optimize & Communicate**  
Recommend hybrid solutions: use DNS GSLB for coarse routing (geo‑based) combined with application‑layer or TCP/UDP load balancers that perform real‑time health checks and instant failover. Explain trade‑offs: higher operational complexity vs. improved reliability. Conclude that pure DNS GSLB cannot satisfy stringent SLAs for dynamic traffic, hence “doesn’t work” in isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
