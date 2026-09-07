---
qid: ing_763904df13__aws__local
question: 'Explain: Reference — Systemdesigntips'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:34-05:00'
sources: []
---

**Answer – “Reference” in ML System Design**

*Leadership Principles:* **Ownership**, **Dive Deep**  

---

**S – Situation**  
In a recent project I led an on‑prem recommendation engine for a retail client that needed to scale from 5 k users/day to 1 M users/day while keeping latency under 200 ms.

**T – Task**  
I had to decide whether to re‑train models from scratch or use *reference* (pre‑trained) embeddings and fine‑tune them locally. The risk was either over‑engineering a custom pipeline or incurring high compute costs.

**A – Action**  
1. **Dive Deep into data**: Measured feature drift, label distribution, and model accuracy across time.  
2. **Design decision**: Adopted *reference* embeddings from HuggingFace’s SentenceTransformers (768‑dim), fine‑tuned with a lightweight linear head on our GPU cluster (8 vGPU).  
3. **AWS services**: SageMaker for training, S3 for artifact storage, Lambda + API Gateway for inference, and CloudWatch for monitoring.  
4. **Cost/scale trade‑offs**: Training cost dropped 70 % (≈$0.12/hour vs $0.40/hour), inference latency stayed <150 ms, and we could spin up additional endpoints during peak traffic using SageMaker’s autoscaling.

**R – Result**  
- Accuracy improved from **82 % to 87 %** precision@10 within 3 weeks.  
- Latency met SLA; cost savings of **$45k annually**.  
- Learned that *reference* models can dramatically reduce time‑to‑market when the domain is similar, but require periodic drift checks.

---

**Bar‑raiser takeaways:**  
- Clear ownership of both business impact and technical debt.  
- Deep dive into data + cost/scale trade‑offs.  
- Quantified results (accuracy %, cost savings).  
- Reflection on risk mitigation (drift monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
