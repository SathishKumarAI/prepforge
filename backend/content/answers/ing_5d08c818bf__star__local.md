---
qid: ing_5d08c818bf__star__local
question: 'Explain: Setting Up Your Environment and Loading the Data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 391
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:07-05:00'
sources: []
---

**Situation:**  
At my last job, we were tasked with building a churn prediction model for a telecom client who had ~1.2 million rows of customer usage logs spread across three CSVs and an SQL database. The data scientist team had limited GPU access and the company’s policy required reproducible environments.

**Task:**  
I needed to create a clean, version‑controlled environment that could pull the raw files from S3, ingest them into a Spark DataFrame, perform initial sanity checks, and expose a single training dataset for downstream modeling.

**Action:**  
First, I set up a Conda environment with `python=3.10`, pinned `pandas`, `numpy`, `pyarrow`, and `dask[distributed]` to handle the data size without blowing memory. Using Docker Compose, I spun up a PostgreSQL container for the SQL tables and an S3‑compatible MinIO server so we could test locally. Then I wrote a modular ETL script in Python that used `sqlalchemy` to query the DB, `boto3` to stream CSVs from S3, and `dask.dataframe.read_csv` with chunking for parallel read. I added a quick sanity‑check function that logged null ratios and value distributions into a JSON report, which was automatically uploaded back to MinIO.

**Result:**  
The entire pipeline ran in under 12 minutes on a single machine, producing a 1.5 GB Parquet file ready for model training. The reproducible Docker image lowered onboarding time for new data scientists from days to hours, and the audit trail of the ETL script helped us win a compliance review. I learned that investing in environment consistency early saves huge debugging time later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
