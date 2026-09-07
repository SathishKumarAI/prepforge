---
qid: ing_671a93a562__aws__local
question: What is double descent, and how does it change the classical story about
  model size and overfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 443
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral (STAR):**  
> **Situation:** I led a fraud‑detection team that was stuck with high false‑positive rates after scaling our neural net from 10 M to 50 M parameters.  
> **Task:** Show whether larger models actually hurt or help, and decide on the next architecture.  
> **Action:** I ran a systematic study of *double descent*: we plotted test error vs model capacity for several epochs while varying regularization (drop‑out, weight decay). Using SageMaker training jobs on spot p2.xlarge instances and storing checkpoints in S3, we measured test accuracy at 1 k, 10 k, 100 k steps.  
> **Result:** The curve exhibited a classic U‑shaped *bias–variance* phase followed by a second descent after the interpolation threshold—larger models (≈50 M) achieved 4.7% lower fraud‑miss rate versus the 30 M baseline, at only 12% extra GPU hours. This directly informed our rollout plan and cut downstream investigation costs by $350k annually.  
> **Learned:** Over‑parameterization can *reduce* overfitting if training time is sufficient—contrary to the old “larger = worse” belief. The key is to allow the model to pass through the interpolation point before early stopping or regularization dominates.

**Technical Takeaway**  
Double descent shows that test error first rises with capacity (classical over‑fit), then falls again once the model can perfectly fit the training data. For production, this means we should train larger nets for more epochs and monitor validation curves, leveraging SageMaker’s hyperparameter tuning to find the sweet spot—balancing GPU cost against improved generalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
