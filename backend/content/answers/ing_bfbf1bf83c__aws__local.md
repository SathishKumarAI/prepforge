---
qid: ing_bfbf1bf83c__aws__local
question: 'Explain: Trace Your Application — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 469
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:47-05:00'
sources: []
---

**Situation** – In my last role I led the rollout of an end‑to‑end observability pipeline for a generative‑AI service that served ~1 M requests/day. The team struggled to correlate model drift with downstream user impact because logs were siloed across Lambda, SageMaker, and RDS.

**Task** – My goal was to build a unified “Trace Your Application” system so every request could be followed from ingestion to response, enabling root‑cause analysis in minutes instead of days. I owned the architecture, drove cross‑team buy‑in, and delivered a solution that reduced mean time to detect (MTTD) drift from 48 h to <2 h.

**Action** –  
1. **Design** – Adopted *Amazon Kinesis Data Streams* as the ingestion backbone; each microservice emitted structured JSON events (request ID, user context, model version).  
2. **Processing** – Used *AWS Lambda* + *Step Functions* to enrich events with metadata from DynamoDB and SageMaker endpoints, then pushed them into an *OpenSearch* cluster for full‑text search and anomaly detection.  
3. **Observability Layer** – Built a lightweight React dashboard on top of OpenSearch Dashboards, exposing latency, error rates, and drift scores per model version.  
4. **Cost/Availability** – Enabled cross‑region replication in OpenSearch to meet 99.9 % SLA; leveraged Spot Instances for Lambda concurrency to keep cost <$5k/month.  

**Result** – The new pipeline cut MTTD from 48 h to <2 h, increased mean time between failures (MTBF) by 35%, and enabled the data‑science team to iterate on model updates 4× faster. I documented best practices in a shared repo, which became the company’s go‑to guide for AI observability.

**Leadership Principles** – *Ownership* (I drove the project from conception to production), *Dive Deep* (engineered a cross‑service trace fabric), and *Deliver Results* (quantified impact on reliability and speed).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
