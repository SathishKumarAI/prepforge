---
qid: vq_617365f9b4__aws__local
question: WHAT ARE USER-DEFINED FUNCTIONS (UDFS)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 459
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:59-05:00'
sources: []
---

**Answer – “What are User‑Defined Functions (UDFs)?”**

> *Customer Obsession* – I always start by asking: “How does this help the user?”  
> *Ownership* – I own both the design and its operational health.

**S – Situation**  
In a recent data‑engineering project, our analytics team needed to compute a custom similarity score between customer profiles that wasn’t available in Spark/SQL. The built‑in functions were insufficient, so we had to create a reusable UDF.

**T – Task**  
Design, implement, and deploy the UDF across our ETL pipeline while keeping latency < 2 s per 10 k rows and cost under $0.02/GB of processed data.

**A – Action**  
1. **Define the function** in Python, using NumPy for vector math, then register it as a *Spark UDF* (`pyspark.sql.functions.udf`).  
2. **Containerize** the UDF logic with Docker and deploy to AWS Lambda via **AWS Glue** (for Spark on EMR).  
3. Use **Amazon S3** for input data, **EMR Serverless** for compute—auto‑scales from 1–10 workers based on data volume.  
4. Add unit tests in `pytest`, continuous integration with GitHub Actions, and monitor via CloudWatch metrics.

**R – Result**  
- Execution time dropped from 12 s to 1.8 s per batch (≈ 90 % faster).  
- Processing cost reduced by 35 %.  
- The UDF was reused in 3 downstream reports, saving the data‑science team ~30 h of manual coding each month.

**Learning & Bar‑raiser Insight**  
I demonstrated *Ownership* by owning the full lifecycle; I *Dove Deep* into performance and cost trade‑offs; I quantified impact with clear metrics; and I learned that packaging logic in Lambda/Glue keeps UDFs portable and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
