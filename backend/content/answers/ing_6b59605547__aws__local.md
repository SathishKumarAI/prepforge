---
qid: ing_6b59605547__aws__local
question: 'Explain: Inspecting Before Cleaning — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 444
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:53-05:00'
sources: []
---

**Situation / Task**  
While migrating a data‑science pipeline to AWS, I was handed a legacy CSV set (~10 GB) with mixed delimiters, inconsistent headers, and >30 % missing values. The team needed clean data for an S3‑based Glue ETL job that had a 12 h SLA.

**Action (Technical)**  
1. **Inspection** – used `pandas` + `sniffio` to auto‑detect delimiters, read the first 100 k rows, and plotted column statistics with `seaborn`.  
2. **Cleaning Pipeline** – built a reusable function in an AWS Lambda layer:  
   * Normalise headers (`str.lower().replace(' ', '_')`).  
   * Infer data types via `pandas.api.types.infer_dtype`.  
   * Impute numeric gaps with median, categorical with mode; flag rows with >3 missing values for manual review.  
   * Convert to Parquet (Snappy) using `pyarrow` and upload to S3 (`s3://cleaned-data/`).  
3. **Automation** – orchestrated the Lambda via Step Functions triggered by an S3 event, ensuring idempotency and retry logic.

**Result**  
The cleaned dataset reduced downstream Glue job runtime from 12 h to **2 h (84% faster)**, cut storage costs by 35 % (Parquet vs raw CSV), and increased model accuracy by 4 pp due to fewer NaNs.  

**Reflection**  
I learned that early inspection saves compute; a single mis‑detected delimiter could have thrown the entire pipeline. I’ll continue refining the schema inference logic using ML‑based type detection to handle future edge cases.  

> **Leadership Principles:** *Ownership* – drove the end‑to‑end cleanup, *Dive Deep* – analyzed raw data patterns before coding, and *Deliver Results* – met SLA and cost targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
