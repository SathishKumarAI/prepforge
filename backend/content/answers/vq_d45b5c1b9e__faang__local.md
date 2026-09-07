---
qid: vq_d45b5c1b9e__faang__local
question: Is it possible to add a parameter while running a saved job?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 531
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:28-05:00'
sources: []
---

**Clarify**  
You’re asking whether you can override or supply extra parameters when re‑running an existing ETL/DBT/Spark job that was previously defined and stored (e.g., in Airflow, dbt Cloud, Databricks). I’ll assume the job is *saved* as a reusable artifact (a DAG, a notebook, or a compiled JAR) and you want to inject new runtime values without editing the source.

**Approach**  
1. Identify the job’s orchestration platform.  
2. Determine if that platform supports “runtime arguments” or “dynamic variables.”  
3. If yes, use the provided API/CLI to trigger the run with overrides.  
4. If no, fall back to a wrapper (e.g., a parameter‑driven DAG) that calls the saved job.

**Depth**  

| Platform | Override Mechanism | Example |
|----------|--------------------|---------|
| **Airflow** | `dag_run.conf` or `trigger_dag` API | `airflow trigger_dag my_dag --conf '{"env":"prod"}'` |
| **Databricks Jobs** | `--parameters` in REST API | POST `/api/2.1/jobs/run-now` with `"notebook_params": {"env":"dev"}` |
| **dbt Cloud** | Job run parameters | Set “Variable values” in the UI or via `dbt-cloud run --vars '{"region":"us"}'` |
| **AWS Glue** | `--arguments` CLI / API | `aws glue start-job-run --job-name myJob --arguments '--env=staging'` |

If the job is a compiled JAR (Spark/Scala), you can pass `--conf spark.my.param=value` or use Spark’s `--driver-arg`.  

**Edge Cases**  
* The saved artifact may hard‑code certain values (e.g., file paths). Overriding them could break the pipeline.  
* Some platforms lock down parameters for security; you’ll need proper permissions.  
* In DAGs that reference external resources, changing a parameter might trigger re‑download or cache invalidation.

**Optimize & Communicate**  
Explain that most modern data‑engineering stacks expose runtime overrides via APIs or UI widgets. Highlight the trade‑off: using native overrides keeps the job definition clean; wrapping in a higher‑level orchestrator adds flexibility but extra maintenance. Conclude with a quick demo of an Airflow trigger command to illustrate the pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
