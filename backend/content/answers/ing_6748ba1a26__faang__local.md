---
qid: ing_6748ba1a26__faang__local
question: 'Explain: Cost Model — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 503
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:44:28-05:00'
sources: []
---

**Clarify**  
We’re asked how an *AI cost model* relates to common *architecture patterns*. I’ll assume the goal is to predict compute/energy costs for a deployed ML system and that we can choose from standard patterns (batch, online inference, streaming, micro‑services, event‑driven). I’d confirm: do we care about training vs. inference? What granularity of cost (CPU/GPU hours, cloud spend, carbon)?  

**Approach**  
1. Map each pattern to its resource profile (compute bursts, latency, data volume).  
2. Quantify unit costs for the underlying services (e.g., GPU‑hour price, storage I/O).  
3. Build a cost function that aggregates per‑resource usage over time, accounting for scaling rules.  

**Depth**  
- **Batch**: cost = *E[compute]* × *GPU‑price* + *storage‑read*×*cost*. Suitable when latency is low priority; scales horizontally.  
- **Online Inference**: cost = *inference‑latency* × *CPU/GPU per request* × *requests/hour* + *cold‑start* overhead. Requires autoscaling, so we include a buffer factor for peak spikes.  
- **Streaming**: similar to online but with continuous data flow; add *message‑queue* and *buffering* costs.  
- **Micro‑services / Event‑driven**: split cost per service; use container runtime pricing plus inter‑service communication overhead.  

Complexity is O(1) per pattern once constants are known; the model scales with number of patterns linearly.

**Edge Cases**  
- Sudden traffic spikes → underestimates cold‑start costs.  
- Multi‑region deployment → varying prices, data egress charges.  
- Model drift requiring retraining → added training cost not captured by inference patterns.  

**Optimize & Communicate**  
Show a table comparing patterns, key metrics (latency, throughput), and per‑unit cost. Highlight trade‑offs: batch offers lowest unit cost but highest latency; online meets SLAs at higher price. Recommend a hybrid: batch for nightly updates + online for real‑time inference. Conclude by stressing continuous monitoring to adjust the model as cloud pricing or usage patterns evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
