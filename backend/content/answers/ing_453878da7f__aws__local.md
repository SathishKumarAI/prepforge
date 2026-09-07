---
qid: ing_453878da7f__aws__local
question: 'Explain: Emailing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 496
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:25-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“In a recent interview I was asked to outline the **top 20 questions you would ask when evaluating an email‑classification model**. I answered by framing it around Customer Obsession, Ownership, and Dive Deep.”*  

### Situation  
A startup wanted to launch a spam filter for its transactional email platform. The product manager needed a checklist that would surface risks before production.

### Task  
Create a concise, data‑driven list of 20 interview questions that probe model performance, infrastructure, compliance, and business impact.

### Action  
1. **Customer Obsession** – I started with *“How does the model affect user experience (e.g., false‑positive rate for critical emails)?”*  
2. **Ownership & Dive Deep** – For each domain (data quality, feature engineering, training pipeline, inference latency, monitoring), I drafted 3–4 questions that require concrete metrics:  
   - *“What is the current precision/recall on our test set? What drop in recall would be acceptable for a 1 % increase in revenue?”*  
   - *“How many emails per second can the inference service handle without exceeding a 50 ms latency SLA, and what AWS services (Lambda, SageMaker Endpoint, ECS) support that?”*  
3. **Bias for Action** – I included “What are the rollback plans if the model misclassifies >5 % of transactional emails in production?”  

### Result  
The checklist was adopted by the product team; it reduced pre‑launch risk by 40 % (measured via fewer post‑deployment incidents) and cut investigation time from 3 days to 1 day. The interviewee received a “Bar‑Raiser” commendation for demonstrating ownership, depth of understanding, and data‑driven impact.

---

**Key Takeaway:**  
When explaining ML questions for emailing, anchor your response in Amazon’s Leadership Principles, use STAR to showcase real metrics, and show how you’d design the inference pipeline (e.g., SageMaker Real‑Time Endpoint + CloudWatch) with cost/availability trade‑offs. This signals ownership, deep dive expertise, and a bias for action—all what bar‑raisers listen for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
