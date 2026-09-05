---
qid: vq_8158160376__star__local
question: How do you manage schema drift in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:06-05:00'
sources: []
---

**Situation:**  
At my previous role I was migrating a legacy on‑prem data lake to Azure Data Factory for a quarterly reporting pipeline. The source tables were frequently updated with new columns and changed datatypes, causing our existing ADF pipelines to fail during the copy activity.

**Task:**  
I had to implement a robust schema drift handling strategy so that downstream analytics remained uninterrupted while keeping ETL costs low.

**Action:**  
First, I added a “Schema Drift” setting in each Copy Activity and enabled *Detect column mapping* so ADF would auto‑generate mapping for new columns. Then, I created an Azure Function triggered by Data Factory’s *On Failure* event that queried the source schema via REST API, compared it with the existing sink schema stored in an Azure Table, and generated a delta script. This script was applied to a Synapse SQL pool using PolyBase to add missing columns with default values. Finally, I scheduled a nightly “Schema Sync” pipeline that ran the function, updated the sink, and logged changes to an Event Grid topic for audit.

**Result:**  
The drift handling reduced pipeline failures from 45% during the first month to <5%, saving us about 12 hours of manual debugging per week. The automated sync also cut storage costs by 18% because we avoided unnecessary re‑ingestion of unchanged data. I learned that coupling ADF’s built‑in drift detection with a lightweight serverless delta engine gives both flexibility and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
