---
qid: ing_8817c6c9cc__aws__local
question: 'Explain: Quick Navigation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:01-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team, we were migrating our inference pipeline from a custom schema validator to **Pydantic v2**. The onboarding time for new data scientists was 3 days because they had no clear way to navigate the massive docs or quickly test field validation logic.

**Action**  
I built an internal “Quick Navigation” cheat‑sheet that maps common use cases (e.g., nested models, custom validators, discriminated unions) to specific Pydantic features.  
- Created a **CLI tool** (`pydantic‑nav`) that parses the official docs and generates a searchable index of examples.  
- Added a **sandbox notebook** that auto‑generates minimal reproducible validation scripts (using `pydantic.eval`).  
- Integrated the tool into our CI pipeline to surface deprecated APIs in pull requests.

Technically, I leveraged AWS Lambda + S3 for the doc crawler, DynamoDB for the index, and CloudWatch for metrics. The solution is stateless, scales horizontally with Lambda concurrency, costs <$0.01 per invocation, and has 99.9 % availability via multi‑AZ deployment.

**Result**  
New ML engineers reduced onboarding from **3 days to 1 day**, cutting support tickets by **42 %**. The sandbox notebook was used in **12 PRs/month** and decreased validation bugs in production by **18 %**. I also documented lessons learned about balancing developer ergonomics with infrastructure cost, which informed our next‑gen schema system.

**Leadership Principles**  
- *Customer Obsession* – directly improved the developer experience.  
- *Ownership* – owned the full stack from docs to CI integration.  
- *Dive Deep* – dissected Pydantic internals and AWS services to craft a lightweight, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
