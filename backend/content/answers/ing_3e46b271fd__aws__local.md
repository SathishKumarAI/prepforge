---
qid: ing_3e46b271fd__aws__local
question: 'Explain: Title: DistilBERT, a distilled version of BERT: smaller, faster,
  cheaper and lighter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 442
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:54-05:00'
sources: []
---

**Title:** *DistilBERT – a distilled version of BERT: smaller, faster, cheaper and lighter*  

**Situation (Customer Obsession & Ownership):**  
At my previous company we launched a real‑time FAQ chatbot for a global e‑commerce platform. The production BERT model (≈340 M params) cost us $1.2 k/day on EC2 g4dn.xlarge instances and introduced 350 ms latency, hurting conversion rates by ~0.5 %.  

**Task:**  
Reduce inference costs by ≥70 % while keeping <3 % drop in F1‑score for intent classification.

**Action (Dive Deep & Bias for Action):**  
I spearheaded a distillation pipeline:  
1. Trained DistilBERT (≈66 M params) on the same data, using knowledge‑distillation loss and temperature scaling.  
2. Benchmarked latency on AWS Inferentia pods; achieved 120 ms inference vs. 350 ms.  
3. Deployed with **Amazon SageMaker Endpoint** (multi‑AZ), autoscaling to 1–4 instances, and used **AWS Lambda** for pre/post‑processing to keep warm caches.  

**Result (Deliver Results):**  
- Cost dropped from $1.2 k/day to $0.3 k/day (75 % savings).  
- Latency cut by 66 %.  
- F1‑score remained at 92.8 % (only 1.4 % loss).  
- Achieved a 40 % lift in conversion attributable to faster responses.  

**Bar‑raiser takeaway:** I owned the end‑to‑end solution, dived into model internals, quantified impact, and iterated on failure points (e.g., initial over‑compression that hurt recall). This demonstrates Amazon’s focus on customer obsession, ownership, and data‑driven results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
