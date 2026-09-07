---
qid: ing_12acb6dbb9__faang__local
question: 'Explain: Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 540
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:56-05:00'
sources: []
---

**1️⃣ Clarify**  
*What do you mean by “Evaluation Patterns” in AI?* I’ll assume it refers to common strategies for validating a model’s quality (e.g., hold‑out sets, cross‑validation, online A/B tests) and the metrics that accompany them. I’d confirm whether we’re discussing supervised learning, reinforcement learning, or generative models.

**2️⃣ Approach**  
1. Enumerate key evaluation patterns.  
2. Map each to its typical use‑case & metric set.  
3. Highlight trade‑offs (bias–variance, time, data needs).  
4. Wrap up with a quick decision framework.

**3️⃣ Depth**  

| Pattern | Typical Use‑Case | Key Metrics | Trade‑offs |
|---------|------------------|-------------|------------|
| **Train/Val/Test split** | Baseline supervised models | Accuracy, F1, ROC‑AUC | Simple but can be high variance if data is scarce. |
| **k‑fold CV** | Limited data; need robust estimate | Mean ± std of metrics | More computation; still a closed‑world assumption. |
| **Stratified/Group CV** | Imbalanced classes / correlated samples | Same as above, but preserves group structure | Avoids leakage but requires careful grouping logic. |
| **Online A/B Test** | Production ML (e.g., recommendation) | Lift, CTR, revenue impact | Requires traffic; noisy but real‑world signal. |
| **Monte Carlo Simulation** | RL / generative models | Return distribution, KL‑divergence | Expensive but captures stochasticity. |

**4️⃣ Edge Cases**  
- *Data leakage*: training data overlapping test folds → inflated metrics.  
- *Concept drift*: static splits become stale; need rolling validation.  
- *Class imbalance*: accuracy misleading; prefer precision/recall or AUROC.  
- *High‑dimensional features*: curse of dimensionality can make CV unstable.

**5️⃣ Optimize & Communicate**  
Explain that the choice depends on data volume, deployment latency, and business risk. For a 1 M sample dataset, a 5‑fold CV gives a good bias–variance trade‑off; for live ads, an A/B test is indispensable. I’d narrate by framing each pattern as a “signal” you’re trying to capture: statistical confidence vs real‑world performance. This keeps the interviewers focused on problem‑solving structure and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
