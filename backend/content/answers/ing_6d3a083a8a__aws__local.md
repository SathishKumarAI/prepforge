---
qid: ing_6d3a083a8a__aws__local
question: You need 5,000 test inputs and have 50. How do you use an LLM to generate
  test data without fooling yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 482
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:50-05:00'
sources: []
---

**Situation / Task**  
I was tasked to create 5 000 realistic test inputs for a new NLU feature with only 50 hand‑crafted examples. The goal was to preserve quality while scaling data generation without “hallucinating” meaningless samples.

**Action**  

1. **Ownership & Dive Deep** – I scoped the problem:  
   *Define the target domain, entity types, and acceptable label distribution.*  
2. **LLM Pipeline (AWS)** –  
   - Use **Amazon SageMaker Endpoint** hosting an open‑source LLM fine‑tuned on the 50 seeds.  
   - Generate batches of 1 000 samples via **SageMaker Batch Transform**, passing prompts that enforce entity constraints.  
3. **Quality Guardrails** –  
   *Automated checks* with **Amazon Comprehend Custom Entities** to verify label coverage and **AWS Lambda** to reject samples outside a confidence threshold.  
4. **Human‑in‑the‑loop** – Randomly sample 5 % of outputs for QA; the reviewer flags drift, leading to an iterative fine‑tune (bias‑for‑action).  
5. **Cost & Scalability** – Each batch costs <$1.50 on a `ml.m5.large` endpoint; total spend $7.5, far below manual labeling ($30k).

**Result**  

- Generated 5 000 high‑quality inputs in <4 hrs.  
- Label distribution matched the target within ±3 % (verified by statistical tests).  
- Downstream model accuracy improved from **78 % to 85 % F1** on a held‑out test set—an **8 pp lift** with only 0.05 % of the original data volume.

**Reflection (Bar‑raiser)**  

I took full ownership, dove deep into LLM behavior, quantified impact via precision/recall, and learned that combining automated filtering with minimal human review dramatically reduces hallucination risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
