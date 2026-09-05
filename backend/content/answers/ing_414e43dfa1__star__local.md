---
qid: ing_414e43dfa1__star__local
question: Do I need an Azure account to use Foundry?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:07-05:00'
sources: []
---

**Situation**  
During a recent data‑science sprint at my previous company we were tasked with building a predictive churn model for our SaaS product. The team had already migrated most of the pipeline to Azure Databricks, but we needed a rapid way to experiment with feature engineering and model validation without spinning up new clusters.

**Task**  
I was responsible for setting up an environment where any analyst could run notebook experiments on shared data, capture results, and easily share dashboards—all within our existing Azure infrastructure—without requiring each user to maintain their own Azure subscription or manage costly resources.

**Action**  
I introduced Foundry’s “Notebooks as a Service” layer. First, I created a single service principal with scoped permissions to the relevant Data Lake storage and Databricks workspace. Then I configured Foundry to use that principal for all notebook executions, so every user could launch notebooks from their browser, pull data via Azure Blob URLs, and write outputs back without needing an individual Azure account. I also scripted a shared Spark session using a small cluster pool (4 workers, 8 GB RAM) and set up automated cleanup jobs to prevent idle costs.

**Result**  
Within two weeks the team moved from ad‑hoc Jupyter notebooks on local machines to a unified Foundry workspace. Notebook execution time dropped by ~30%, and we saved roughly $200/month in avoided cluster usage. I learned that a single, well‑scoped Azure account can power an entire collaborative ML workflow when coupled with Foundry’s service principal integration, eliminating the need for each analyst to manage their own subscription.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
