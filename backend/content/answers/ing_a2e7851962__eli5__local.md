---
qid: ing_a2e7851962__eli5__local
question: 'Explain: Heuristics — What is concept drift in ML, and how to detect and
  address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 313
total_tokens: 481
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:05-05:00'
sources: []
---

**Concept Drift (plain)**  
Imagine a weather‑forecast app that learns from yesterday’s temperatures to predict tomorrow’s heat. If suddenly the climate changes—say summer starts earlier—your old learning no longer matches reality. That mismatch is *concept drift*: when the underlying relationship between inputs (e.g., temperature, humidity) and outputs (e.g., “hot day”) shifts over time.

**Analogy: A Teacher in a Changing Classroom**  
Think of an online teacher who writes down every student’s quiz score to predict future performance. If the curriculum suddenly changes or students start studying differently, the old notes become outdated. The teacher must notice that predictions no longer line up with actual scores and then update the notes.

**Detecting Drift**  
1. **Hold‑out monitoring** – keep a small set of fresh data; if prediction errors rise sharply, drift is likely.  
2. **Statistical tests** – compare recent data distributions to older ones; significant differences signal change.  

**Addressing It**  
- **Retrain regularly** with the newest data so the model learns the new pattern.  
- **Use incremental learning** that updates weights on each new batch instead of restarting from scratch.  
- **Ensemble methods** keep several models trained at different times; voting smooths out sudden shifts.

By watching for rising errors and refreshing the model, you keep your predictions accurate even when reality changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
