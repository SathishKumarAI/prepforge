---
qid: ing_d331df8317__fp__local
question: 'Explain: Monitoring and drift — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 562
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:13-05:00'
sources: []
---

**Why we must monitor an AI model after deployment**

A trained model is a *function* \(f_\theta\) that maps inputs \(x\) to predictions \(\hat y\).  
During training, the loss surface guarantees that for the *training distribution* \(P_{\text{train}}\) the expected risk
\(R(f_\theta)=\mathbb E_{(x,y)\sim P_{\text{train}}}\!\big[L(f_\theta(x),y)\big]\)
is minimized.  
Once deployed, the data stream is governed by a *different* distribution \(P_{\text{live}}\).  
If \(P_{\text{live}}\neq P_{\text{train}}\) (distribution shift or *drift*), then

\[
R_{\text{live}}(f_\theta)=\mathbb E_{(x,y)\sim P_{\text{live}}}\!\big[L(f_\theta(x),y)\big]
\neq R(f_\theta).
\]

Thus, the very guarantee that made training worthwhile disappears.  
Monitoring is therefore an *online estimation* of \(R_{\text{live}}\) and of the distance
\(d(P_{\text{live}},P_{\text{train}})\).  

**Evaluation as information geometry**

The model’s predictions define a probability distribution over labels, \(q_\theta(y|x)\).  
Drift can be quantified by Kullback‑Leibler divergence or total variation between
\(q_{\theta}(y|x)\) under live data and the reference distribution.  
This geometric view turns drift detection into an *entropy* maximization problem: we seek a statistic that is most sensitive to changes in the underlying manifold of predictions.

**Observability as a feedback loop**

An observability stack (metrics, alerts, dashboards) closes the loop by turning
\(d(P_{\text{live}},P_{\text{train}})\) into actionable signals.  
When drift exceeds a threshold, retraining or adaptation is triggered—effectively re‑optimizing \(\theta\) on the new manifold.

**Non‑obvious insight**

Most practitioners treat drift as a binary “alert/not alert” problem.  
In fact, *the magnitude of drift correlates with the confidence gap*:
high‑confidence predictions become increasingly unreliable when \(P_{\text{live}}\) diverges,
so monitoring **confidence calibration** is often a more sensitive early warning than raw accuracy metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
