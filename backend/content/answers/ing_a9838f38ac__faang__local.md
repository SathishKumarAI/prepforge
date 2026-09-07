---
qid: ing_a9838f38ac__faang__local
question: 'Explain: The problem with metrics is a big problem for AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:21-05:00'
sources: []
---

**Clarify**  
The interviewer asks why “metrics” pose a major challenge in AI. I’ll restate: *Metrics are the yardsticks we use to judge an AI system’s performance, yet they can be misleading, incomplete, or hard to define for many real‑world tasks.* I’d ask: Which domains (e.g., vision, NLP) and what stakeholders (engineers vs. users) matter most?  

**Approach**  
1. List the typical pitfalls of metrics.  
2. Map each pitfall to concrete examples.  
3. Discuss how these affect model selection, deployment, and trust.  
4. End with a brief mitigation strategy.  

**Depth**  
- **Single‑dimensional scores** (accuracy, BLEU) ignore downstream impact or user satisfaction.  
- **Class imbalance** skews accuracy; precision/recall trade‑offs become opaque.  
- **Evaluation data drift**: test sets quickly become stale, making metrics obsolete.  
- **Metric hacking**: models overfit to the metric rather than true problem (e.g., adversarial examples that inflate scores).  
- **Ethical & societal impact** is rarely captured; fairness, bias, and safety need bespoke metrics.  

These issues distort model choice, inflate confidence, and erode user trust—especially in high‑stakes domains like healthcare or autonomous driving.  

**Edge Cases**  
- Extremely rare events (fraud detection) where accuracy looks perfect but recall is zero.  
- Non‑stationary environments (stock market prediction) where historic metrics mislead.  

**Optimize & Communicate**  
I’d recommend a *metric portfolio*: combine task‑specific scores with calibration, fairness, and robustness tests; use holdout data from future periods; and adopt continuous evaluation pipelines. I’d explain this as building a “health check dashboard” that alerts when any metric drifts, ensuring decisions are based on holistic evidence rather than a single number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
