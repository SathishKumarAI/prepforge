---
qid: ing_27a9b541d4__faang__local
question: Tell me about a technical disagreement over model choice - how was it resolved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 477
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:47-05:00'
sources: []
---

**Clarify**  
The question asks for a concrete example of a *technical disagreement* on which ML model to use, the context (e.g., latency vs accuracy), and how we reached consensus.

**Approach**  
1. Pick a realistic scenario (real‑time recommendation).  
2. State both sides’ arguments: complex deep network vs lightweight tree ensemble.  
3. Show the evaluation framework used.  
4. Explain the resolution path—data, experiments, stakeholder alignment.

**Depth**  
In our last product launch we debated whether to use a transformer‑based ranking model (≈ 200 M params) or a LightGBM gradient‑boosted tree (≈ 5 k trees).  
- *Transformer*: 99.2 % top‑1 accuracy on held‑out data, but inference latency ≈ 120 ms per request; memory footprint 8 GB.  
- *LightGBM*: 97.6 % accuracy, latency 15 ms, 200 MB footprint.  

We ran a two‑phase A/B test:  
1. **Offline** – calibrated on the same validation set with equal feature sets.  
2. **Online** – served to 10 % traffic for 48 h, measuring click‑through rate (CTR) and server CPU utilization.  

Results: Transformer improved CTR by +0.3 pp but increased latency cost 1.8×, causing user complaints on mobile. LightGBM delivered acceptable CTR (+0.2 pp) with 80 % lower latency.

**Edge Cases**  
- Cold‑start users (no interaction data): transformer relied heavily on embeddings; tree model used static features.  
- GPU contention: transformer required dedicated GPUs; lightGBM ran on CPUs.  

We tested those scenarios and confirmed the same trend.

**Optimize & Communicate**  
We documented the trade‑off matrix, presented it to product, infra, and data teams, and agreed to deploy LightGBM in production with a fallback transformer for high‑value segments (budgeted GPU slots). This resolution balanced accuracy, latency, cost, and user experience—illustrating structured decision‑making that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
