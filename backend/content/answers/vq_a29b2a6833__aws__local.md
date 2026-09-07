---
qid: vq_a29b2a6833__aws__local
question: Is there a formatter for SQL or PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 387
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:55-05:00'
sources: []
---

**Situation / Task**  
I was leading the refactor of our data‑engineering pipeline at a fintech firm that generated > 2 TB of raw SQL/PL‑SQL scripts each month. The scripts were written in multiple styles, causing build failures and hard‑to‑read logs.

**Action**  
1. **Ownership & Bias for Action:** I scoped the problem, interviewed 12 data engineers, and mapped pain points to a single requirement: *“All scripts must be consistently formatted before CI runs.”*  
2. **Dive Deep & Invent & Simplify:** After evaluating open‑source tools (sqlformat, sql-formatter), I built an AWS‑native solution using:
   - **AWS CodeBuild** with a Docker image that bundles `sqlparse` and custom formatting rules.
   - **AWS Lambda** to trigger on every PR in our GitHub repo via EventBridge, auto‑applying the formatter before tests run.
3. **Deliver Results:** The pipeline now formats 200+ scripts per day, reducing build failures by **87 %** (from 18/200 to 2/200) and cutting manual review time from ~4 hrs/month to <30 min.

**Result**  
- **Scalability:** Dockerized formatter scales with CodeBuild’s concurrent builds; Lambda remains stateless.  
- **Availability:** 99.95 % uptime, backed by multi‑AZ deployment.  
- **Cost:** <$50/month vs the previous $200/month spent on manual QA.

**Learning**  
The key insight was that a small, AWS‑managed formatter could replace ad‑hoc scripts and eliminate human error—demonstrating ownership, depth, and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
