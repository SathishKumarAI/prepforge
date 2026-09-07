---
qid: ing_a19ae8bf66__aws__local
question: 'Explain: Test-Time Training: Learning at Inference'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 388
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:33-05:00'
sources: []
---

**Situation / Task** – While leading a fraud‑detection team for an online marketplace, we noticed that the model’s precision dropped by **12 %** on newly launched payment methods. The business required real‑time adaptation without retraining from scratch.

**Action** – I championed *Test‑Time Training (TTT)*: at inference, the model receives a small batch of labeled examples from the current transaction stream and updates its weights on‑the‑fly using an online learning algorithm.  
*Implementation*:  
- **AWS SageMaker Edge Manager** hosts a lightweight `PyTorch` inference container that streams new samples to an **S3 event trigger** → **Lambda** → **EFS** for quick access.  
- Lambda invokes a **SageMaker Processing job** (spot‑instance) that runs one epoch of stochastic gradient descent on the latest batch, writes updated weights back to S3, and publishes them to **Amazon SageMaker Model Registry**.  
- The inference container pulls the new model every minute via **AWS IoT Greengrass** for zero‑downtime deployment.  

**Result** – Within 48 h we restored precision to **98 %**, a **6 pp** lift, and cut manual retraining cycles from weeks to hours. Cost remained under **$200/day** due to spot usage and efficient data pipelines.

**Reflection** – This project reinforced *Ownership* (I drove end‑to‑end change) and *Dive Deep* (I profiled latency, memory, and cost trade‑offs). The key learning: keep the model update lightweight; heavy retraining only when drift exceeds a threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
