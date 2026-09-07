---
qid: ing_8c587d9922__aws__local
question: 'Explain: Databricks System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy ML pipeline (Spark on EMR) to Databricks for a Fortune‑500 retailer. The goal was to cut model training time by 50 % while ensuring GDPR compliance and zero downtime.

**Action**  
I applied *Ownership* and *Dive Deep*:  
1. **Requirements** – real‑time feature ingestion, batch retraining every 12 hrs, and inference latency < 200 ms.  
2. **Design** – built a multi‑cluster architecture: a **Production cluster** (8 m5.xlarge) for inference, a **Training cluster** (20 c6i.large) auto‑scaled via Databricks Auto Scaling, and an **ETL cluster** (4 d3.xlarge).  
3. Leveraged **Delta Lake** for ACID transactions on feature tables, **MLflow** for experiment tracking, and **Databricks Jobs** with DAG orchestration.  
4. Integrated **AWS Glue** to crawl S3 and populate a catalog; used **Amazon SageMaker Endpoint** for real‑time inference, backed by an Elastic Load Balancer.  
5. Implemented cost controls: Spot instances for training, auto‑termination of idle clusters, and per‑job budget alerts via CloudWatch.

**Result**  
- Training time dropped from 6 hrs to 3 hrs (50 % reduction).  
- Inference latency improved from 350 ms to 180 ms.  
- Cost savings of $120K annually through spot usage and cluster right‑sizing.  
- Compliance audit passed with zero data leakage incidents.

**Reflection** – The biggest learning was the importance of *Bias for Action* balanced with *Invent & Simplify*: simplifying the ETL pipeline reduced debugging time by 30 % and made the system easier to maintain, a key bar‑raiser criterion in AWS interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
