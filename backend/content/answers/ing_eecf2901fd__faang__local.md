---
qid: ing_eecf2901fd__faang__local
question: 'Explain: Pitfall 15: Solving a Different Problem — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 382
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:55:15-05:00'
sources: []
---

**Clarify**  
Pitfall 15 (“Solving a Different Problem”) occurs when an AI system or model is optimized for a metric that diverges from the real‑world goal it’s intended to serve. I’ll assume we’re talking about supervised learning pipelines where training data, loss functions, and evaluation metrics can be misaligned with user needs.

**Approach**  
1. Identify the *true* business objective (e.g., customer satisfaction).  
2. Map that objective to a measurable proxy (accuracy, F1, etc.).  
3. Verify that the proxy captures all relevant dimensions—bias, variance, fairness, latency.  
4. Iterate: adjust loss or add constraints until the proxy aligns with the goal.

**Depth**  
- *Metric mismatch*: Optimizing for BLEU in translation can inflate scores while hurting fluency.  
- *Data distribution shift*: Training on synthetic data yields high training accuracy but poor real‑world performance.  
- *Evaluation bias*: A test set that overrepresents a demographic leads to inflated fairness metrics.  
Solution: use causal inference or domain adaptation techniques, and deploy continuous monitoring of downstream KPIs.

**Edge Cases**  
- Rare events (fraud detection) where the proxy metric ignores minority classes.  
- Non‑stationary environments where the true objective changes over time.  
Test by simulating distribution shifts and measuring drift in both proxy and real metrics.

**Optimize & Communicate**  
Explain that aligning loss with business outcomes reduces “solution drift.” Propose a feedback loop: collect user signals, retrain on updated labels, and recalibrate thresholds. Emphasize transparency—document the proxy choice, its limitations, and how we validate alignment—to satisfy both engineering rigor and stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
