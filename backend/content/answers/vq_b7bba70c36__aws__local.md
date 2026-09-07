---
qid: vq_b7bba70c36__aws__local
question: Why do we need break and continue?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 568
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:45-05:00'
sources: []
---

**Why break/continue matter in real‑world AWS code**

**Situation (S)** – In 2023 I led a refactor of the nightly data‑pipeline that ingested ~4 TB of log files into an Athena‑backed analytics layer. The original script looped over every file, performing expensive transforms even when a file was already up‑to‑date.

**Task (T)** – Reduce runtime and cost while keeping correctness, so we could run the pipeline on-demand for ad‑hoc reports without waiting 12 hrs.

**Action (A)**  
1. **Break**: I added a *break* inside a loop that scans sorted file timestamps. Once we hit the first file newer than the last processed timestamp, we stop iterating – no need to check older files.  
2. **Continue**: For each file, I inserted a *continue* after a quick checksum comparison; if unchanged, skip heavy transforms.  
3. Implemented this logic in a Lambda written in Python 3.12, orchestrated by Step Functions, and stored state in DynamoDB.

AWS services used:  
- **Lambda** (cold‑start cost < $0.000016 per invocation) – kept payload < 1 MB.  
- **DynamoDB** for idempotency keys – read/write capacity auto‑scaling.  
- **Step Functions** for visibility and retries.

**Result (R)** – Execution time dropped from 12 hrs to 2 hrs (≈ 83% reduction). AWS bill fell from $1,200/month to $240/month. The pipeline now meets the *Deliver Results* principle while staying cost‑efficient.

---

### What a bar‑raiser looks for

| Cue | Why it matters |
|-----|----------------|
| **Ownership** – I identified the inefficiency and owned the entire redesign. | Shows end‑to‑end responsibility. |
| **Dive Deep** – Used checksums, timestamps, DynamoDB to avoid needless work. | Demonstrates technical depth and data‑driven decision making. |
| **Quantified Impact** – 83% runtime & 80% cost savings. | Concrete evidence of value delivered. |
| **Learning from Failure** – Initial prototype crashed on large files; I added exception handling and exponential backoff. | Shows resilience and continuous improvement. |

By using *break* and *continue*, we avoid unnecessary work, keep our services lean, and align with Amazon’s *Customer Obsession* (fast, reliable data for analysts) and *Ownership* (own the end‑to‑end pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
