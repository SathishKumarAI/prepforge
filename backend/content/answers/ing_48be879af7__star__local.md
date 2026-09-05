---
qid: ing_48be879af7__star__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 385
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:52-05:00'
sources: []
---

**Situation:**  
In my last role as a Site Reliability Engineer at a cloud‑based recommendation platform, we were launching a new machine‑learning inference service that needed to serve millions of requests globally with sub‑50 ms latency. The traffic pattern was highly dynamic – spikes during product launches and seasonal events.

**Task:**  
I had to design a global load‑balancing solution that could route user requests to the nearest healthy data center while respecting the real‑time performance metrics produced by our ML model monitoring stack.

**Action:**  
We initially considered DNS‑based GSLB because it’s simple: clients query a single name and get an IP from the closest zone. I set up Route 53 latency routing with health checks that pinged each edge server. However, the DNS TTL was 60 s by default, so during traffic spikes the cached responses still pointed to under‑utilized or even overloaded nodes. Moreover, DNS can’t react faster than the TTL; we saw a 30 % increase in cold‑start latency for new model versions because users were stuck on stale IPs until cache expiry. I replaced DNS routing with an application‑layer load balancer that used real‑time metrics from Prometheus and a lightweight sidecar to dynamically update routing tables within milliseconds.

**Result:**  
The new strategy cut average inference latency from 68 ms to 42 ms during peak periods, reduced the error rate by 25 %, and allowed us to roll out model updates without user disruption. I learned that while DNS GSLB is great for coarse‑grained traffic steering, it lacks the responsiveness required for ML workloads where latency spikes must be mitigated in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
