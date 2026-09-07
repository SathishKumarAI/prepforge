---
qid: ing_48744361f3__aws__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 519
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:19-05:00'
sources: []
---

**Situation & Task**  
During the AI‑powered document ingestion pilot I discovered that customer “clean text” was actually a mix of scanned PDFs, Excel exports with merged cells, and an old SharePoint repository (15 yrs). The pipeline stalled because OCR wasn’t in place and our schema mapping failed on malformed tables. My goal: get the data into the NLP model within two weeks while keeping cost under $5k.

**Action**  
1. **Ownership & Bias for Action** – I convened a cross‑team task force (Data Engineering, Security, Legal).  
2. **Dive Deep** – Conducted a quick audit: 12 TB of PDFs, 4 TB of Excel, 0.5 TB SharePoint blobs.  
3. **Technical Design** – Built an ingest layer using  
   * **Amazon Textract** (OCR + table extraction) for PDFs & scanned docs.  
   * **AWS Glue** to flatten merged‑cell Excel sheets into Parquet, applying a schema‑validation job.  
   * **S3 EventBridge** triggers for new SharePoint uploads via AWS Transfer Family.  
4. **Scalability/Cost** – Textract at $1.50 per page (~$6k/month), Glue ETL jobs 30 min × 10 hrs → ~$0.20/hr, S3 storage ~ $0.023/GB → <$120/month. Total projected spend: **$7k/mo**, within the pilot budget after rounding down by reusing existing Spot instances for Glue.  
5. **Deliver Results** – Deployed a CI/CD pipeline (CodePipeline) that auto‑runs the extraction on every upload, outputs clean JSON to an Athena data lake for downstream ML.

**Result**  
Within 10 days we processed 95 % of the legacy docs with <1 % OCR errors (verified by manual sampling). The NLP model now receives ready‑to‑use text, improving inference latency from 12 s to 2.5 s per document—a **58 % speedup** and projected cost savings of ~$3k/month.

**Learning & Bar‑raiser Insight**  
I documented the failure mode, updated the requirements spec, and added a “Data Quality Gate” in future pilots. The bar‑raiser will note my end‑to‑end ownership, data‑driven impact (speedup, cost), deep dive into legacy formats, and proactive learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
