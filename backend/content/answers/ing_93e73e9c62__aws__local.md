---
qid: ing_93e73e9c62__aws__local
question: 'Explain: What Information to Capture — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 478
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:21-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional squad building an LLM‑powered recommendation engine, we discovered that our evaluation pipeline was ad‑hoc: every test run produced raw logs but no reproducible metrics. The CTO demanded a “complete guide” for what to capture so the model could be audited and continuously improved.

**Action (Design)**  
I drafted a data‑driven capture schema and built it into our CI/CD using AWS services:

| Data | Capture method | AWS service | Reasoning |
|------|----------------|-------------|-----------|
| **Input prompt & context** | Structured JSON in S3 event payload | S3 + Lambda | Immutable, searchable |
| **Model version & hyper‑params** | Tag on the SageMaker endpoint | SageMaker Model Registry | Traceability |
| **Raw logits & token probs** | Stream to Kinesis Firehose → Redshift | Firehose + Redshift | Allows statistical analysis (entropy, bias) |
| **Evaluation metrics** | Lambda aggregates into DynamoDB table | DynamoDB + Athena | Low‑cost, fast queries |
| **Human‑review scores** | App writes to SQS → Glue ETL → Parquet in S3 | Glue + S3 | Cost‑effective storage for audit trail |

We added a “bias & safety” flag that triggers an automatic rollback if metrics dip below 0.85 precision or 0.2 fairness gap, satisfying **Ownership** and **Bias for Action**.

**Result**  
Within three sprints we reduced model drift incidents by 73 % (from 5 to 1 per month) and cut evaluation latency from 12 min to 3 min. The audit log now supports quarterly compliance reviews with < $0.01 per evaluation, meeting our cost‑budget.

**Reflection**  
I learned that capturing the *right* telemetry is as critical as model accuracy; missing a single data point can stall root‑cause analysis. By diving deep into AWS tooling and framing metrics around customer impact, we turned ad‑hoc logs into actionable insights—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
