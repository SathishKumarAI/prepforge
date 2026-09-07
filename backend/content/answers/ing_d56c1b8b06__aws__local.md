---
qid: ing_d56c1b8b06__aws__local
question: 'Explain: SQL — Top 8 Standards Every Developer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 590
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:12-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑engineering team for a recommendation engine at my last company, we noticed that ad‑hoc SQL queries were slowing down model training pipelines and causing data drift. I was tasked with standardizing SQL practices so every developer could write clean, reproducible code that fed our SageMaker models reliably.

**Action (SQL — Top 8 Standards)**  
| # | Standard | Why it matters | AWS service used |
|---|----------|----------------|------------------|
| 1 | **Use explicit column lists** – no `SELECT *` | Prevents schema changes from breaking downstream jobs | Redshift, Athena |
| 2 | **Consistent naming conventions (snake_case)** | Easier to read & auto‑generate code | Glue Catalog |
| 3 | **Parameterize queries with bind variables** | Avoids SQL injection and improves caching | Athena |
| 4 | **Write idempotent CTEs** | Guarantees deterministic results across runs | Redshift |
| 5 | **Document business logic in comments & Markdown** | Enables knowledge transfer to ML engineers | S3, CodeCommit |
| 6 | **Limit result set size (TOP/N)** | Controls memory usage during training | Athena |
| 7 | **Use window functions for ranking instead of correlated subqueries** | Reduces execution time by > 50% | Redshift |
| 8 | **Automate linting with sqlfluff in CI/CD** | Enforces style & catches bugs early | CodePipeline |

I added these rules to our Terraform‑managed Glue Catalog and integrated `sqlfluff` into our CodeCommit pipelines. After rollout, query runtimes dropped from an average of **12 s** to **7.8 s**, and the number of failed training jobs fell by **35 %** because data quality issues were caught earlier.

**Result**  
The team now owns a single source‑of‑truth for feature tables; model accuracy improved by 4 pp due to cleaner inputs, and we saved roughly **$18k annually** in compute costs by eliminating unnecessary scans.  

**Bar‑raiser takeaways** – I demonstrated *Ownership* (taking responsibility for data quality), *Dive Deep* (profiling query plans), quantified impact, and learned from the initial spike in failure rates to refine our lint rules further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
