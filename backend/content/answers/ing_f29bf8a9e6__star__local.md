---
qid: ing_f29bf8a9e6__star__local
question: 'Explain: Title: Distilling Step-by-Step! Outperforming Larger Language
  Models with Less Training Data and Smaller Model Sizes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 367
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:08-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a chatbot for the customer support portal. The incumbent solution used a 12‑Billion‑parameter LLM trained on 10 TB of proprietary logs, but it cost $0.30 per inference and had latency of ~700 ms, which was unacceptable for mobile users.

**Task:**  
I needed to build a lightweight model that could match or exceed the larger system’s intent‑classification accuracy while cutting inference costs by at least 80% and keeping latency under 200 ms, all within two months and with only 50 GB of labeled data.

**Action:**  
I chose knowledge distillation: I first fine‑tuned a 2‑Billion‑parameter teacher on the full dataset. Then I trained a 200‑MParameter student, feeding it both hard labels and soft logits from the teacher (temperature = 4). To reduce training time, I used mixed‑precision FP16 on a single A100 GPU and employed gradient checkpointing. I also applied data augmentation via back‑translation to simulate more diversity. Finally, I evaluated on an unseen 5 % holdout and performed iterative hyperparameter tuning with Optuna.

**Result:**  
The student achieved 93.2% F1—just 0.8% below the teacher’s 94.0%—while inference cost dropped from $0.30 to $0.04 per query, and latency fell to 120 ms. The project was delivered on schedule, and I learned that a well‑engineered distillation pipeline can bridge the performance gap between massive models and production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
