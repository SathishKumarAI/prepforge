---
qid: ing_ce0432b00f__aws__local
question: 'Explain: Enterprise Sales Director, Consumer Business Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 470
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:52-05:00'
sources: []
---

**Enterprise Sales Director – Consumer Business Services (AWS)**  
*Leadership Principles: Ownership & Customer Obsession*

**Situation:**  
I led a cross‑functional team of 12 (sales, product, data science) to grow the consumer‑services portfolio in APAC. The goal was to double ARR while maintaining a 95 % win rate on high‑margin deals.

**Task:**  
Design a data‑driven sales enablement framework that leverages machine learning to prioritize prospects, forecast revenue, and personalize outreach.

**Action:**  
1. **Data Pipeline & Feature Engineering** – Built an ETL pipeline in *AWS Glue* feeding *Amazon Redshift*. Features included past purchase velocity, churn risk scores from a customer‑segmentation model, and real‑time engagement signals (clickstream via Kinesis).  
2. **Predictive Model** – Trained a Gradient‑Boosted Tree model on SageMaker, achieving 0.81 AUC for deal conversion. Deployed with *SageMaker Endpoint* behind an API Gateway to serve scores in <50 ms.  
3. **Sales Playbook Integration** – Embedded predictions into the CRM (Salesforce) via a custom Lightning component. Sales reps received “hot‑lead” flags and suggested messaging templates, reducing proposal cycle time by 30 %.  
4. **Scalability & Cost** – Leveraged *SageMaker Neo* for edge inference on mobile devices, cutting endpoint costs by 25 % (from $0.12/hr to $0.09/hr). Implemented auto‑scaling groups and Spot Instances to keep monthly spend <$15k.

**Result:**  
- ARR grew from $18M to $36M in 12 months (+100 %).  
- Win rate rose to 97 %.  
- Sales cycle shortened by 30 % (avg 14→10 days).  

*Bar‑raiser cues:* ownership of the end‑to‑end pipeline, depth in data modeling, quantified impact, and iteration after a failed model (re‑engineered features post‑deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
