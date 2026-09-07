---
qid: ing_568a8d13bc__aws__local
question: 'Explain: Input Validation Layers — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 400
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:52-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a “tool‑agent” platform that let data scientists trigger ETL jobs via natural‑language prompts. Early adopters complained that malformed inputs caused costly retries and corrupted downstream pipelines. I owned the problem: design an *Input Validation Layer* (IVL) that would catch errors before agents hit production.

**Action & Design**  
I scoped requirements—real‑time validation, zero latency, auditability—and chose a two‑tier IVL:

1. **Schema Validator** – implemented as a Lambda@Edge function behind API Gateway, using *AWS Glue Schema Registry* to enforce JSON schema and field types.  
2. **Business‑Rule Engine** – a Step Functions workflow that calls an Amazon SageMaker inference endpoint (custom rule model) for context‑aware checks (e.g., date ranges, user quotas).

Both tiers write validation logs to *Amazon Kinesis Data Firehose* → *S3* and publish alerts to SNS. For scalability I leveraged Lambda’s auto‑scaling and Step Functions’ state persistence; availability was 99.99% by placing functions in two AZs.

**Result**  
After rollout, invalid request rate dropped from **12 % to <0.5 %**, cutting downstream job failures by **35 %** and saving ~$150k annually in compute costs. The IVL also reduced mean time to resolution for validation bugs from 3 days to under an hour.

**Learning & Bar‑Raiser Insight**  
I practiced *Ownership*—owning the end‑to‑end flow—and *Dive Deep*, inspecting failure logs to refine rule models. I quantified impact with clear metrics, and documented lessons in a post‑mortem, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
