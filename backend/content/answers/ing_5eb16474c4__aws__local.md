---
qid: ing_5eb16474c4__aws__local
question: 'Explain: Unsupported operand types for subtraction. Int and'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 412
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:46-05:00'
sources: []
---

**Situation & Task**  
In a production recommendation engine (10 M users, 2 TB of event data) I was troubleshooting an “Unsupported operand types for subtraction. Int and …” exception that surfaced during nightly model training on SageMaker. The pipeline had been running flawlessly for months; the new error appeared after a schema change in DynamoDB that introduced an integer field where the model expected a float.

**Action (Dive Deep & Ownership)**  
1. **Reproduced locally** using a Docker image of the training script and the exact dataset snapshot to isolate the fault.  
2. Logged every data type conversion with `pandas`’ `dtypes` and identified the offending column (`purchase_value`).  
3. Updated the ETL step in Glue to cast the field to `float32` before it entered SageMaker.  
4. Added a **pre‑validation job** (Glue + Athena) that checks for type mismatches and sends alerts via SNS if any are found.  
5. Refactored the training script to use `torch.tensor(..., dtype=torch.float32)` explicitly, guarding against implicit casts.

**Result**  
- Training jobs resumed in < 2 min with 100 % success rate for the next week.  
- Avoided a projected $1.8K loss (SageMaker training cost × 5 hours).  
- The new validation layer reduced future data‑quality incidents by **97 %**.

**Reflection & Learnings**  
I took full ownership of the incident, documented the root cause in Confluence, and presented a post‑mortem to the ML Ops team. The experience reinforced that *Customer Obsession* (ensuring uninterrupted model delivery) and *Bias for Action* (quick, scalable fixes with Glue/SageMaker) are critical when managing large‑scale ML pipelines on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
