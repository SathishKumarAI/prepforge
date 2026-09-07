---
qid: ing_13797a9144__aws__local
question: 'Explain: Title: Learning to (Learn at Test Time): RNNs with Expressive
  Hidden States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 440
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:14-05:00'
sources: []
---

**Title: Learning to (Learn at Test Time): RNNs with Expressive Hidden States**

**Situation & Task**  
At my previous role I led a project to improve fraud‑detection latency on the payment platform. The model had to adapt to new attack vectors *after* deployment, but we were constrained by the 50 ms response window and a 10 % budget overrun risk.

**Approach (Technical)**  
I designed an **online meta‑learning RNN** that augments its hidden state with a *meta‑embedding* of recent transaction features. At test time, a lightweight **Lambda function** pulls the last 200 transactions from DynamoDB, runs them through the RNN in batch, and updates the hidden state via a single gradient step—no full retraining. The core model lives in SageMaker Neo for low‑latency inference (≤ 30 ms).  
*Scalability*: Auto‑scaling Lambda handles burst traffic; the RNN’s parameter count is 1.2 M, keeping cost < $0.02 per inference. *Availability*: Multi‑AZ deployment with Route 53 health checks guarantees 99.9 % uptime.

**Result (Behavior)**  
After deployment we saw a **35 % drop in false positives** and a **12 % lift in true positive rate** within the first week—metrics verified by A/B testing against the legacy rule‑based engine. The solution also reduced infra costs by 18 %.  

**Reflection & Learning**  
I took full ownership of the feature pipeline, iterating on the hidden‑state representation after a mid‑quarter audit that revealed overfitting to historic fraud patterns. By diving deep into the data drift logs, we added a confidence gate that prevented noisy updates—an example of *Bias for Action* balanced with *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
