---
qid: ing_c6dd660bf3__faang__local
question: Why Build Another ETL Pipeline? — I Built My Second ETL Pipeline. This Time,
  I Started Thinking Like a Data Engineer
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 378
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:23:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks why you’d build a *second* ETL pipeline instead of extending the first one. I’ll assume the first pipeline was ad‑hoc, monolithic, and hard to maintain or scale. The goal is to show that re‑engineering for modularity, reliability, and observability can unlock business value.

**Approach**  
1. Identify pain points in the legacy pipeline (spaghetti code, single point of failure).  
2. Define a new architecture: decouple ingestion, transformation, and loading; use orchestration (Airflow/Prefect) and a data lake or warehouse.  
3. Implement incremental processing, schema evolution, and metadata tracking.  

**Depth**  
- **Modularity**: Each stage is a micro‑service with clear contracts, enabling independent scaling.  
- **Observability**: Add metrics (latency, error rates), logs, and alerts; use a DAG to visualize lineage.  
- **Data Quality**: Automate validation rules; fail fast on anomalies.  
- **Cost & Performance**: Use serverless functions for light transforms; batch large jobs with Spark. Complexity stays O(n) per job, but we gain linear scalability.

**Edge Cases**  
- Backward compatibility of downstream consumers.  
- Handling schema drift in source feeds.  
- Failure isolation so a bad transform doesn’t poison the entire pipeline.

**Optimize & Communicate**  
I’d iterate on data models based on usage patterns and document decisions for future engineers. In the interview, I’ll emphasize that the second pipeline isn’t “another tool” but an investment in resilience, maintainability, and faster feature delivery—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
