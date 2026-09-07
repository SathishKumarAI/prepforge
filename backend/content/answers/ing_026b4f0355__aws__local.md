---
qid: ing_026b4f0355__aws__local
question: 'Explain: F3: Single PR runs a corner of the eval that misses regressions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 349
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:42-05:00'
sources: []
---

**Situation / Task**  
In our ML platform we run nightly evaluation jobs (F3) that execute a subset of unit tests for each new PR. The goal was to reduce pipeline time while still catching most performance regressions.

**Action**  
I first *dive deep* into the test matrix: 1200+ evals, only 12% hit in F3. I built a lightweight metrics dashboard (CloudWatch + Grafana) and ran a controlled experiment:  
- **Baseline:** F3 runs all 12 % tests → 30 min pipeline, 2 % regression failures.  
- **Proposed:** Add a data‑driven selector that picks the top‑5 regressions per metric from the last 10 releases (S3 + Athena).  

I rewrote the selector in Lambda (Python), stored the list in DynamoDB, and updated the CI workflow to run only those tests. I also added a *fallback* flag that triggers the full suite if any failure is detected.

**Result**  
- Pipeline time dropped from **30 min → 10 min** (≈ 67 % reduction).  
- Regression detection rate stayed at **≥ 98 %** of the baseline, with only one missed case that was caught by the fallback.  
- Cost: Lambda invocations < $0.01/day vs. previous EC2 usage of $5/month.

**Reflection**  
I owned the change and iterated quickly (Bias for Action). The metrics dashboard now informs future test selection, so we continue to *Invent & Simplify* while keeping customer‑centric quality high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
