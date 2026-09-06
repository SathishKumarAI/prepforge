---
qid: ing_57cc3e775d__fp__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 416
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:10:57-05:00'
sources: []
---

### Why a CDN Boosts **Availability** in Machine‑Learning Pipelines  

1. **Fundamental Problem** – An inference service must return predictions with low latency and high uptime.  
   *Latency* is the sum of two random variables: network round‑trip time \(T_{\text{net}}\) and model‑execution time \(T_{\text{exec}}\).  
   *Availability* is the probability that a request completes before a deadline \(\tau\):  

\[
P(T_{\text{net}}+T_{\text{exec}}\le\tau)
= \int_0^\tau f_{T_{\text{net}}}(t)F_{T_{\text{exec}}}(\tau-t)\,dt .
\]

2. **Optimization Insight** – \(T_{\text{net}}\) dominates in geographically dispersed workloads.  
   By deploying a CDN we place edge caches so that the request’s origin server is effectively reduced to the nearest node; this shifts the distribution of \(T_{\text{net}}\) from a heavy‑tailed, high‑variance shape to a tight, low‑mean one.  

3. **Probability Effect** – The tail probability \(\Pr(T_{\text{net}}>x)\) decays exponentially faster after edge caching, which in turn multiplies the overall availability by a factor \(>2\) for realistic \(\tau\).  

4. **Non‑obvious Insight** – Edge nodes also act as *local failure detectors*.  
   If an origin node goes down, the CDN automatically routes to another replica without application logic changes, turning what would be a hard outage into a graceful degradation.  

Thus, from first principles, a CDN reshapes the latency distribution and provides built‑in redundancy, both of which mathematically lift availability in ML inference systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
