---
qid: ing_1108c04f60__faang__local
question: 'Explain: How to detect concept drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 412
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:20-05:00'
sources: []
---

**Clarify**  
Concept drift occurs when the statistical properties of the target variable change over time, so a model trained on historical data becomes less accurate. I’ll assume we’re dealing with supervised learning in an online or batch‑processing setting and that labeled data arrives periodically.

**Approach**  
1. **Define reference distribution** – store baseline statistics (mean, variance, class priors).  
2. **Monitor incoming data** – compute the same statistics for each new window of observations.  
3. **Statistical test** – apply a drift detector (e.g., Page‑Hinkley, ADWIN, or Kolmogorov–Smirnov) to compare current vs. reference distributions.  
4. **Trigger action** – if the detector signals drift, retrain or adapt the model using recent data.

**Depth**  
- *Page‑Hinkley*: maintains cumulative mean difference; flags when it exceeds a threshold (O(1) per sample).  
- *ADWIN*: adaptive window that shrinks/grows based on change significance, guaranteeing no false positives with high probability.  
- Complexity is linear in stream length and constant memory for ADWIN.  
- Retraining can be incremental (online learning) or full retrain if the drift magnitude is large.

**Edge Cases**  
- **Noisy labels**: spurious drift signals; use smoothing or require multiple consecutive alarms.  
- **Seasonality**: periodic patterns may look like drift—use seasonal decomposition first.  
- **Feature drift vs. target drift**: detect both separately if needed.

**Optimize & Communicate**  
Start with lightweight detectors (Page‑Hinkley) for low latency, switch to ADWIN when precision is critical. Explain the trade‑off between detection speed and false‑positive rate, and how we’ll validate by back‑testing on historic concept‑drift events before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
