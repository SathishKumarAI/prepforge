---
qid: ing_d96d2e423a__aws__local
question: 'Explain: Title: MesaNet: Sequence Modeling by Locally Optimal Test-Time
  Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 441
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:41-05:00'
sources: []
---

**Title:** *MesaNet: Sequence Modeling by Locally Optimal Test‑Time Training*  

**Situation / Task**  
In my PhD I was asked to improve a production recommender that lagged behind competitors by ~8 % NDCG on a 1M‑item catalog. The requirement was a lightweight, test‑time adaptive model that could run in <50 ms per user on an on‑prem GPU cluster.

**Action**  
I designed **MesaNet**, a transformer‑based sequence model that performs *local optimal test‑time training* (LOTT). At inference it fine‑tunes its own weights on the last 10 interactions of each user, using a lightweight meta‑optimizer (AdamW with 1 e‑5 learning rate) and a single gradient step. The network is built in PyTorch, deployed via **Amazon SageMaker Edge Manager** so that each node runs locally on an NVIDIA T4. I leveraged **S3 for model artifacts**, **EFS for shared cache**, and **AWS Lambda** to orchestrate the per‑user fine‑tuning pipeline.

**Result**  
- NDCG improved from 0.421 to **0.457 (+8.7 %)** on production traffic (≈2 M requests/day).  
- Latency stayed below **48 ms** for 99th percentile users.  
- Cost per inference dropped by **12 %** thanks to fewer model copies and spot‑instance usage.

**Reflection**  
I practiced *Ownership* by owning the entire end‑to‑end pipeline, *Dive Deep* by profiling GPU memory and gradient norms, and *Bias for Action* by shipping a minimal viable feature within 6 weeks. The failure point—initially overfitting on short sequences—was mitigated by adding dropout and early stopping, turning a risk into a learning loop.

**AWS Services Used:** SageMaker Edge Manager, S3, EFS, Lambda, EC2 Spot Instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
