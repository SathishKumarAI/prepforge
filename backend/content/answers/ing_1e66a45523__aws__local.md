---
qid: ing_1e66a45523__aws__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:49-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of our AI‑evaluation platform to a fully serverless stack on AWS. The team needed a way to quickly pull X‑Ray traces and filter them by span name (e.g., `ai.eval.inference`) so that we could surface latency issues in real time for over 200 M evaluation runs per day.

**Action**  
I designed an end‑to‑end pipeline:  
1. **X‑Ray** streams raw trace data to S3 via the X‑Ray daemon.  
2. A scheduled **Lambda** parses the JSON, extracts span names and timestamps, and writes a denormalized Parquet table into Athena.  
3. Consumers query Athena through an API Gateway endpoint that accepts `span_name` as a filter; results are cached in ElastiCache (Redis) for 5 min to keep latency <200 ms.  

I chose serverless to eliminate ops overhead, used **Athena** for ad‑hoc analytics, and leveraged **S3 Glacier Deep Archive** for archival cost control. The design supports >10 k concurrent queries with <0.1 s response time while keeping the monthly bill under $2k.

**Result**  
Post‑migration, we reduced trace‑filtering latency from 5 s to 150 ms (≈97% improvement) and cut ops costs by 35%. The real‑time dashboard now surfaces anomalies in <30 s, allowing engineers to remediate before users hit the system.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results:** Faster insights → happier stakeholders.  
- **Ownership & Dive Deep:** I took full responsibility for the pipeline, debugged data skew issues, and iterated until performance targets were met.  

Bar‑raiser cues: clear ownership, deep technical justification (AWS services, cost/scale trade‑offs), quantifiable impact, and reflection on a failed earlier attempt that taught me to use Parquet instead of CSV for compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
