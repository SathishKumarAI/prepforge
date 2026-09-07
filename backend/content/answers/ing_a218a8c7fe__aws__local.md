---
qid: ing_a218a8c7fe__aws__local
question: 'Explain: Supervised Fine-Tuning (SFT) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 557
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:30-05:00'
sources: []
---

**Answer – Supervised Fine‑Tuning (SFT)**  

*Situation:* While leading a ML team at my previous company, we had to adapt an open‑source LLM for our customer support chatbot. The base model performed well on general queries but struggled with domain‑specific jargon and compliance rules.  
*Task:* Build a fine‑tuned version that improved accuracy on 200 K internal tickets while keeping inference latency under 300 ms per request.  
*Action:*  

1. **Data Pipeline** – Collected labeled ticket–response pairs, applied deduplication & privacy masking, and stored them in an S3 bucket (`s3://chatbot-labeled-data/`).  
2. **Training Architecture** – Deployed a distributed training job on SageMaker’s `ml.p3.8xlarge` instances (NVIDIA V100) with the HuggingFace PyTorch container. Used *gradient accumulation* to fit 12‑GB models into GPU memory, and enabled *mixed‑precision* (`fp16`) for speed.  
3. **Fine‑Tuning Strategy** – Adopted *Layer‑wise Learning Rate Decay (LLRD)*: lower LR for early layers, higher LR for the last transformer block. This reduced catastrophic forgetting by 30 % compared to uniform LR.  
4. **Evaluation & Rollout** – Trained for 3 epochs, validated on a held‑out set; achieved **BLEU = 0.62**, **Accuracy = 91 %** (vs baseline 78 %). Deployed via SageMaker Endpoint with autoscaling to maintain <300 ms latency, costing ~$1.20/hour versus $2.80 for the vanilla model.

*Result:* Post‑deployment A/B test showed a **25 % drop in ticket turnaround time** and a **40 % reduction in escalations**, translating to $350k annual savings.  

**Leadership Principles:**  
- *Customer Obsession*: Delivered a chatbot that resolved tickets faster, directly improving user satisfaction.  
- *Ownership & Dive Deep*: I engineered the entire data‑to‑inference pipeline, tuned hyperparameters through systematic ablations, and continuously monitored performance in production.

**Bar‑raiser signals I heard:** The interviewer noted my clear ownership of each step, deep dive into LLRD’s impact on catastrophic forgetting, quantified business value (cost & time savings), and reflection on a failed early attempt where we overfitted to rare jargon—leading me to adopt data augmentation next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
