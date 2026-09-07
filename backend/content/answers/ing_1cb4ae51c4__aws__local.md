---
qid: ing_1cb4ae51c4__aws__local
question: 'Explain: Telemetry — GitHub - langfuse/langfuse: \ud83e\udea2 Open source
  AI engineering platform: LLM evals, observability, metrics, prompt management, playground,
  datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM, and more.
  \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 304
output_tokens: 408
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:13-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of our internal LLM‑monitoring stack (Langfuse) to a fully managed, scalable architecture on AWS so we could meet SLA < 1 s latency for 10k concurrent inference requests and reduce ops overhead by 40 %.  

**Action**  
* **Ownership & Dive Deep:** I scoped the requirements—real‑time metrics ingestion, prompt replay, dataset versioning, and cross‑service observability.  
* **Design:**  
  * **Amazon Kinesis Data Streams** for ingesting telemetry from Langfuse agents (OpenTelemetry exporters).  
  * **AWS Lambda + Amazon DynamoDB** to process events, enrich with context, and store per‑prompt state.  
  * **Amazon OpenSearch Service** for searchable metrics dashboards (Grafana).  
  * **S3 + Glue** for immutable dataset storage and cataloging.  
  * **Amazon EventBridge** triggers downstream alerts in CloudWatch & PagerDuty.  
* **Bias for Action:** Built CI/CD pipelines with AWS CodePipeline, automated schema migrations, and implemented blue/green deployment via Lambda versioning to avoid downtime.

**Result**  
- Latency dropped from 3 s to < 0.8 s (95th percentile).  
- Ops cost reduced by 37 % (from $12k/month to $7.5k).  
- Alerting coverage increased to 99.9 % with automated rollback on failure.

**Learning**  
The biggest pitfall was under‑estimating the cardinality of prompt IDs; adding a composite key in DynamoDB solved eventual consistency issues and improved query speed by 2×.  

*Leadership Principles:* **Customer Obsession, Ownership, Dive Deep, Bias for Action, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
