---
qid: ing_b381e2ba23__aws__local
question: 'Explain: You inherit an 800-line pipeline script from a previous deployment.
  It''s slow and occasionally produces wrong numbers. The original author is gone.
  Go.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 412
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:41-05:00'
sources: []
---

**Situation & Task**  
I was handed an 800‑line Bash/Python ETL pipeline that processed ~30 M rows nightly for the ad‑tech reporting layer. The job ran 8 hrs on an EC2 `m5.large` and produced occasional off‑by‑10% drift in key metrics, jeopardizing downstream billing.

**Action – Dive Deep & Ownership**  
1. **Re‑architect**: Split the monolith into modular Lambda functions (extract → transform → load) orchestrated by Step Functions for clear failure boundaries.  
2. **Stateful storage**: Move intermediate data to S3 with lifecycle policies; use DynamoDB for idempotent state tracking.  
3. **Observability**: Instrument with CloudWatch Logs, Metrics, and X-Ray traces. Added unit tests (pytest) and contract tests against a golden dataset.  
4. **Cost & Scaling**: Leveraged Fargate Spot for heavy transforms; auto‑scales based on queue depth, cutting compute cost by 45 % while keeping SLA <30 min.  
5. **Continuous Delivery**: Implemented CI/CD with CodePipeline + CodeBuild; automated rollback on validation failure.

**Result – Deliver Results**  
- Execution time dropped from **8 hrs → 25 min** (96 % reduction).  
- Accuracy improved to **>99.9 %**, eliminating billing discrepancies that previously cost ~$120k/year.  
- Cost per run fell from $12 → $3, saving ~70 % annually.

**Bar‑raiser takeaways**  
- Demonstrated *Ownership* by taking full responsibility for legacy code.  
- Showed *Dive Deep* with detailed profiling and incremental refactor.  
- Quantified impact (time, cost, accuracy) and iteratively learned from failures to build resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
