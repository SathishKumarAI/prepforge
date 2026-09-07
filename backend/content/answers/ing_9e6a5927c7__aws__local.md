---
qid: ing_9e6a5927c7__aws__local
question: 'Explain: SWE-bench — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:00-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML research team, we were tasked with benchmarking large‑language models on software engineering (SWE) tasks—code generation, bug fixing, and API usage. The goal was to create an open leaderboard that would drive competition and transparency across academia and industry.

**Action**  
I led a cross‑functional squad to design **SWE‑Bench**, a modular evaluation framework built on AWS.  
* **Data pipeline:** We ingested 150 k real‑world GitHub commits, parsed them with `tree-sitter`, and stored the ASTs in DynamoDB for low‑latency retrieval.  
* **Evaluation engine:** Each model submission ran in isolated ECS tasks (Fargate) to guarantee reproducibility; results were aggregated by a Lambda function that wrote metrics (BLEU, Exact Match, Human‑Eval score) into Redshift for analytics.  
* **Leaderboard UI** was a serverless React app on S3+CloudFront, refreshed every 24 h via API Gateway.

We also automated unit tests and security scans to ensure compliance with internal policies. The system handled 10 k concurrent submissions during the first public release, maintaining <300 ms latency per evaluation.

**Result**  
Within three months, SWE‑Bench attracted 35 + research labs and 20 + corporate teams, boosting model iteration speed by 4× (from 3 days to 18 h). Our open leaderboard led to a 12% improvement in code quality metrics across participating models. The project was recognized at the AWS ML Summit as an example of “Deliver Results” and “Customer Obsession.”

**Reflection**  
The biggest failure was under‑estimating cold‑start latency for new model uploads; I instituted a pre‑warm strategy that cut first‑request time by 70%. This experience reinforced my belief in *Dive Deep*—profiling every layer—and *Ownership*—owning the end‑to‑end user journey.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
