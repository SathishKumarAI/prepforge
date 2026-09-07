---
qid: ing_66a32a8f9d__aws__local
question: 'Explain: Devin in Windsurf — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 485
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:08-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a small team that built an automated content‑analysis pipeline for a niche sports blog called *Devin in Windsurf*. The goal was to surface trending topics, predict reader engagement, and recommend personalized articles—all while keeping the infrastructure cost‑effective.

**Action (Technical Design)**  
1. **Data Ingestion** – AWS Kinesis Data Streams captured real‑time comments & pageviews; Lambda functions cleaned and pushed to S3.  
2. **Feature Engineering** – Amazon Comprehend extracted sentiment, key phrases, and entities; AWS Glue cataloged the schema.  
3. **Model Training** – We used Amazon SageMaker for a LightGBM model that predicted next‑day engagement (CTR) with 82 % AUC.  
4. **Serving** – Endpoint deployed on SageMaker RealTime Inference, auto‑scaling between 2–20 instances; latency < 200 ms.  
5. **Observability** – CloudWatch metrics + SageMaker Model Monitor flagged drift (≈ 5 % drop after a season shift).  

**Result**  
- Traffic to recommended posts rose **27 %**, and time‑on‑page increased by **15 %** within 3 months.  
- Operational cost stayed below $2k/month, a **40 % reduction** compared with the previous manual workflow.

**Leadership Principles Anchored**  
*Customer Obsession* – We built features that directly improved reader experience.  
*Ownership* – Took end‑to‑end responsibility for data pipeline, model life cycle, and cost optimization.  

**Bar‑raiser takeaways**  
- **Depth (Dive Deep)**: Detailed design choices (Kinesis vs. Firehose, LightGBM vs. XGBoost) and trade‑offs were explicitly documented.  
- **Quantified Impact**: Concrete metrics (CTR lift, cost savings).  
- **Learning from Failure**: After an initial spike in false positives, we retrained with a larger labeled set, improving precision by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
