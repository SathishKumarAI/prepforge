---
qid: ing_3367ee97c3__aws__local
question: 'Explain: Checking the Cleaned Data — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 563
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:34-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined a fintech startup, the data science team was drowning in over‑30 GB of raw CSV logs from our payment gateway. Each file had inconsistent delimiters, missing headers, and random non‑ASCII characters. The product manager demanded a clean dataset within 48 hrs to launch an ML fraud detector.

**Action (A)**  
I took ownership by building an automated ETL pipeline in **AWS Glue** using Python `pandas` & `csv`.  
1. **Ingest:** Triggered on S3 uploads, the crawler catalogued schema variations.  
2. **Clean:** A custom Glue job ran a deterministic script:  
   * Standardized delimiters (`;`, `|`) → comma.  
   * Dropped rows with > 20% nulls (≈ 12 % of data).  
   * Normalised text to UTF‑8, removed control chars.  
   * Parsed timestamps into ISO format and added a UTC flag.  
3. **Validate:** Employed `Great Expectations` assertions; any failure sent an SNS alert to the ops team.  
4. **Store:** Resulted in a single partitioned Parquet table on S3 (≈ 8 GB), registered in Athena for downstream SageMaker training.

**Result (R)**  
- Reduced dataset size by 74 %, cutting storage costs from $1,200/month to $260/month.  
- The fraud model trained 2× faster and achieved an AUC‑ROC of **0.97** versus the previous 0.91.  
- Delivery was 18 hrs ahead of deadline, earning a “Customer Obsession” commendation.

---

### Technical Design Highlights
| Concern | Choice | Reasoning |
|---------|--------|-----------|
| Scalability | Glue ETL + Spark | Handles petabytes; auto‑scales workers. |
| Availability | S3 + Athena | Multi‑AZ durability, serverless query. |
| Cost | Parquet compression + Glue job schedules | 80 % less I/O than CSV. |
| Trade‑off | Using Python over Scala | Faster dev cycle; acceptable for 30 GB data size. |

**Leadership Principles Reflected:**  
- **Ownership** – drove end‑to‑end pipeline from scratch.  
- **Dive Deep** – quantified null rates, character issues, and performance gains.  

Bar‑raisers look for measurable impact, architectural rigor, and a clear learning loop—here I iterated on validation rules after the first run to eliminate false positives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
