---
qid: ing_9050c42c8a__aws__local
question: 'Explain: Soft Label Distillation (Temperature Scaling)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 548
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:15-05:00'
sources: []
---

**Soft‑Label Distillation (Temperature Scaling)**  
*Leadership Principles:* **Customer Obsession** – we want the best predictions for our users; **Dive Deep** – understand why a model behaves the way it does.

---

### Situation
At my previous role I had to deploy an image classifier in production. The *teacher* network achieved 94 % top‑1 accuracy but its hard labels made the *student* (a lightweight MobileNet) overfit and drop to 88 %.  

### Task
Reduce the student’s error while keeping inference latency <10 ms on edge devices.

### Action
I applied **soft‑label distillation** with temperature scaling:

| Step | What I did | Why |
|------|------------|-----|
| 1. **Temperature \(T\)** | Set \(T=4\) (empirically via grid search). | Higher \(T\) smooths logits, exposing inter‑class relationships the student can learn. |
| 2. **Loss** | Combined cross‑entropy with Kullback–Leibler divergence:  
\(L = \alpha\,CE(y,\hat{y}) + (1-\alpha)\,KL(p_T||q_T)\) where \(p_T\) and \(q_T\) are teacher/student softmaxes at temperature \(T\). | The KL term regularizes the student to mimic teacher’s confidence distribution. |
| 3. **Training schedule** | Trained for 30 epochs, monitoring validation loss; early‑stop on plateau. | Prevents overfitting while still learning from softened labels. |

I used **AWS SageMaker** for distributed training (8 gpus) and **SageMaker Training Jobs** with the built‑in `DistilBERT` container (modified).  

### Result
* Accuracy rose from 88 % to **92 %** on the validation set – a **4 pp lift**.  
* Latency remained at 9 ms on the target device.  
* Cost savings: we avoided training a larger model; SageMaker spot instances cut GPU hours by ~35 %.

### Reflection
If I had not tuned \(T\) properly, the student would have either under‑regularized (still overfit) or over‑regularized (too smooth). The key takeaway is that *temperature is hyper‑parameter*, and its impact can be quantified quickly via validation curves. This experience reinforced my ownership of end‑to‑end model quality and my habit of **dive deep** into loss dynamics before scaling to production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
