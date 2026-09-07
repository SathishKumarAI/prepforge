---
qid: ing_31d2ba5b9b__faang__local
question: 'Explain: L4, L7, and GSLB load balancers, explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 569
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:59-05:00'
sources: []
---

**Clarify**  
We’re asked to compare three types of load‑balancing appliances that sit in front of a web farm: *Layer 4 (L4)*, *Layer 7 (L7)*, and *Global Server Load Balancer (GSLB)*.  
Assumptions: all operate on HTTP/S traffic, we care about performance, feature set, and typical use‑cases.

**Approach**  
1. Define each layer’s protocol responsibilities.  
2. List key features and constraints per type.  
3. Highlight scenarios where one outperforms the others.

**Depth**  

| Load Balancer | Layer | Decision Basis | Core Features | Typical Use |
|---------------|-------|----------------|---------------|-------------|
| **L4 (Transport)** | TCP/UDP | IP+port only | Fast, low‑latency; session stickiness via IP hash; minimal state | Stateless micro‑services, database proxies, VPN gateways |
| **L7 (Application)** | HTTP(S) | URL, headers, cookies | SSL termination, content‑based routing, WAF, compression, request rewriting | Web apps needing A/B tests, auth enforcement, API gateways |
| **GSLB** | DNS + L4/L7 | Geographical or policy rules | Geo‑routing, health checks across regions, failover, latency‑aware selection | Global SaaS with multi‑region availability |

- **Performance:** L4 is ~2× faster than L7 because it skips deep packet inspection.  
- **Flexibility:** L7 can route to different backends based on user agent or query string; GSLB can redirect users to the nearest healthy region before hitting a local L4/L7.

**Edge Cases**  

| Edge | Impact | Mitigation |
|------|--------|------------|
| Heavy TLS handshake overhead in L7 | Higher CPU, latency | Use SSL offload on dedicated hardware or terminate at edge CDN |
| DNS cache staleness in GSLB | Slow failover | Short TTLs + health‑check based dynamic updates |
| Session stickiness across regions | User loses session | Implement distributed session store (e.g., Redis) |

**Optimize & Communicate**  
- Start with L4 for high‑throughput, low‑state services; add L7 only when request semantics matter.  
- Deploy GSLB only if you need cross‑region resilience or latency optimization.  
- In an interview I’d narrate this as: “Choose the lowest layer that satisfies functional needs; lift to higher layers only for required features.” This demonstrates clear trade‑off reasoning and aligns with FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
