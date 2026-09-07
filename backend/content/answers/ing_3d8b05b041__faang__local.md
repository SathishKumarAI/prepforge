---
qid: ing_3d8b05b041__faang__local
question: 'Explain: Abstract — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 515
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:51-05:00'
sources: []
---

**Abstract – Why DNS‑Based GSLB Fails for ML Workloads**

1. **Clarify**  
   *Problem:* Many teams use DNS round‑robin or weighted routing as a cheap “global load balancer” for ML inference endpoints. They expect it to distribute traffic evenly and recover from node failures.  
   *Assumptions to confirm:* 1) Clients cache DNS responses; 2) Latency differences between regions are large; 3) Workloads are stateless but latency‑sensitive.

2. **Approach**  
   • Enumerate DNS limitations (TTL, caching, no health checks).  
   • Map each limitation to ML inference needs (latency, consistency, autoscaling).  
   • Illustrate a typical failure scenario with numbers.

3. **Depth**  
   *DNS TTL & Caching:* A 60‑s TTL means clients may hit an unhealthy node for minutes after a failure. ML models need instant failover to avoid degraded user experience.  
   *No real‑time health checks:* DNS providers can’t probe GPU/CPU load or model health; they only know if a host is reachable.  
   *Latency skew:* Weighted round robin ignores geographic latency; a client in Asia might be routed to an EU node, adding 200 ms inference delay—critical for recommendation systems.  
   *Statelessness vs. stateful models:* Some ML pipelines keep session‑specific caches (e.g., embeddings). DNS can’t preserve session affinity, leading to cache misses and higher compute cost.

4. **Edge cases**  
   • Sudden traffic spikes → TTL still forces old routing until expiry.  
   • Partial failures (GPU crash) → DNS sees host alive, but inference fails.  
   • Mixed‑model deployments → same DNS record for different model versions causes version drift.

5. **Optimize & Communicate**  
   Replace pure DNS GSLB with a *traffic manager* that:  
   – Uses short TTLs (<10 s) and health probes per region.  
   – Incorporates latency telemetry (e.g., CloudWatch, Pingdom).  
   – Supports session stickiness via cookies or client IP hashing.  
   – Dynamically adjusts weights based on real‑time GPU utilization.  

Explain that this hybrid approach preserves the cost‑efficiency of DNS while meeting ML’s low‑latency, high‑availability requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
