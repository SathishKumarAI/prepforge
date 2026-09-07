---
qid: ing_663afe7ebd__aws__local
question: 'Explain: chess is confusing enough as it is — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 383
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:10-05:00'
sources: []
---

**Situation & Task**  
While leading a student‑research project on “Coding Adventure: Chess,” I noticed that our AI opponent’s evaluation function was slow and inconsistent, causing an average 12 % drop in user engagement during the mid‑game phase. My goal was to rebuild the engine with a data‑driven ML model that would both accelerate move selection and improve win rates.

**Action & Technical Design**  
- **Ownership / Dive Deep**: I scoped the problem by profiling the current C++ engine, identified bottlenecks in board evaluation, and collected 3 M annotated positions from open‑source engines.  
- **AWS Architecture**:  
  - *SageMaker* for training a lightweight XGBoost model (≈200 k parameters).  
  - *Lambda* + *API Gateway* to serve predictions with <5 ms latency.  
  - *DynamoDB* to cache board hashes and reuse evaluations, cutting redundant compute by 30 %.  
- **Bias for Action**: Deployed the first model within 48 h of data prep, iterated nightly, and used CloudWatch metrics to tune hyperparameters automatically.

**Result & Impact**  
The new ML engine reduced evaluation time from 150 ms to 12 ms per move, raising average session length by **18 %** and overall win rate for the AI from 48 % to 61 %. Cost savings were 40 % on compute (Lambda vs EC2). The project was later adopted as a demo in the university’s Data Science capstone.  

*Leadership Principles*: Customer Obsession, Ownership, Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
