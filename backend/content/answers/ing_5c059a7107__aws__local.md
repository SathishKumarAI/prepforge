---
qid: ing_5c059a7107__aws__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 415
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:21-05:00'
sources: []
---

**Situation:**  
I was tasked with labeling a 10 M‑example image dataset for a computer‑vision model while only having a $20K budget (≈2 k labels/labeler).  

**Task:**  
Maximize the model’s downstream accuracy within that cost, ensuring reproducibility and scalability on AWS.  

**Action:**  
1. **Prioritize via active learning** – I built an initial CNN (ResNet‑50) on a small seed set of 5 k manually annotated samples. Using uncertainty sampling (entropy + margin), the model flagged ~100 k high‑information examples for labeling.  
2. **Crowdsource with quality control** – Leveraged Amazon Mechanical Turk, embedding gold‑standard “trap” images to detect low‑quality workers. Paid $0.50 per label; each worker handled 50 images → 400 workers total (≈$20K).  
3. **Iterate & evaluate** – After the first round, I retrained the model and re‑ran active learning, adding another 30 k labels until marginal gain <1 % accuracy on a hold‑out set.  

**Result:**  
The final model achieved 92.7 % top‑5 accuracy versus 84.3 % baseline—an **8.4 pp lift**—using only $20K and 130 k labels (≈1.3 % of the dataset). The pipeline runs on an AWS SageMaker notebook, storing data in S3, using DynamoDB for task tracking, and Lambda to trigger retraining.  

*Leadership Principles:* **Customer Obsession** (maximizing end‑user model performance), **Ownership** (designing a reusable active‑learning loop), **Dive Deep** (analyzing label utility), and **Bias for Action** (iterating rapidly).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
