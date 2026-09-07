---
qid: vq_e4c51df317__aws__local
question: What method do you use to clean the data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional team building an image‑classification model for a retail catalog. The raw dataset contained 1 M images with inconsistent labels and missing metadata, which caused a 30 % drop in validation accuracy.

**Action – Data‑Cleaning Pipeline**  
*Ownership & Bias for Action*: I designed an end‑to‑end ETL pipeline on **AWS Glue** + **Amazon S3**.  
1. **Deduplication** – hashed image bytes; removed 12 % duplicates (≈120k images).  
2. **Metadata validation** – used a Spark job to cross‑check product IDs against the catalog DB in **RDS Aurora**; flagged 4 % of records for manual review.  
3. **Label correction** – built a lightweight inference model on **SageMaker Batch Transform** that re‑labels ambiguous images, improving label precision from 82 % to 94 %.  
4. **Quality scoring** – applied a rule‑based score (resolution ≥ 800×600, EXIF data present) and dropped 3 % of low‑quality images.

*Dive Deep & Invent*: I stored intermediate results in **S3 Glacier Deep Archive** for cost efficiency while keeping the final cleaned set on S3 Standard-IA to balance access latency and cost (~$0.004/GB/month).

**Result**  
The cleaned dataset increased model accuracy from 78 % to 91 %, a 13 point lift, and reduced training time by 25 %. The pipeline now runs automatically on new data every week with < 5 min processing time.

**Bar‑raiser Takeaway**  
I demonstrated ownership (led the entire pipeline), depth (used Spark & SageMaker for granular checks), quantified impact (accuracy +13 pts, cost savings $2k/month), and learned that automating quality gates prevents cascading errors in downstream ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
