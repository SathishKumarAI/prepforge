---
qid: ing_88244c1cdf__star__local
question: 'Explain: AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:58-05:00'
sources: []
---

**Situation:**  
When EY launched its “AI‑Enabled Advisory” platform, the client‑success team struggled to integrate disparate data sources from legacy ERP and cloud services while keeping latency under five seconds for real‑time analytics.

**Task:**  
I was tasked with designing a scalable AI solution architecture that unified heterogeneous data, enabled predictive modeling, and met strict SLAs for a Fortune 500 client across three regions.

**Action:**  
First, I mapped the data flow using Azure Data Factory to ingest from SAP HANA, Snowflake, and custom REST APIs, applying Delta Lake for ACID transactions. I then built an orchestrated Spark pipeline on Databricks, leveraging MLflow for experiment tracking and model registry. For inference, I deployed a containerized TensorFlow model behind Azure Kubernetes Service with autoscaling rules tied to CPU usage. To keep latency low, I introduced Azure Cache for Redis as a pre‑fetch layer and used feature store services to serve consistent embeddings across microservices. Throughout, I worked closely with security teams to enforce role‑based access via Azure AD and GDPR‑compliant data masking.

**Result:**  
The new architecture cut data ingestion time from 30 minutes to 5 minutes and inference latency from 12 seconds to under 4 seconds, boosting client satisfaction scores by 18%. I learned that marrying cloud‑native data pipelines with an end‑to‑end ML lifecycle framework is key to delivering production‑grade AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
