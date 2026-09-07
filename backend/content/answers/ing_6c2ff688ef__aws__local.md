---
qid: ing_6c2ff688ef__aws__local
question: 'Explain: Recruiters — Software Engineer Resume - by Austen McDonald and
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:30-05:00'
sources: []
---

**Answer (Amazon Style)**  

I led a cross‑functional team that built *RecruiterRank*, an ML engine that scores software‑engineering resumes for our hiring pipeline. The goal was to reduce manual triage time by 60 % while maintaining quality hires.

| **S** | **T** | **A** |
|-------|-------|-------|
| **Situation:** Our recruiters spent ~4 h/day reviewing each CV, and the “top‑20” shortlist had a 30 % false‑positive rate. | **Task:** Design an automated ranking system that uses NLP to extract skills, experience, and project impact, then predicts fit against open roles. | **Action:**  
1. Collected 12M resume PDFs → converted to text with Textract.  
2. Trained a BERT‑based encoder (SageMaker) on labeled “fit” vs. “not fit.”  
3. Deployed inference as a Lambda‑driven API behind an Application Load Balancer; used DynamoDB for feature store.  
4. Implemented A/B testing in the recruiting portal, feeding back results to fine‑tune the model every 2 weeks. | **Result:** Cut recruiter triage time by **62 %** (from 4 h to 1.5 h per CV). False‑positive rate dropped from 30 % to **12 %**, and new hires’ performance score improved by 18 %. Cost stayed below $200/month using Lambda’s pay‑per‑invocation model versus a dedicated EC2 cluster that would have cost >$4k. | **Reflection:** I took ownership of the end‑to‑end pipeline, diving deep into feature engineering (e.g., parsing GitHub URLs for repo stars). The biggest failure was an overfitting spike; we resolved it by adding dropout and expanding the training set with synthetic CVs, learning that data diversity beats model complexity. | **Leadership Principle:** *Ownership* – I drove the project from ingestion to production, ensuring alignment with hiring goals and cost constraints.  

**AWS Services Used:** Textract (OCR), SageMaker (training & inference), Lambda (scalable API), DynamoDB (low‑latency feature store), CloudWatch for monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
