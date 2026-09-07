---
qid: ing_5b8b851700__aws__local
question: 'Explain: Files in This Folder — Interview Prep'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 453
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:11-05:00'
sources: []
---

**Situation & Task**  
I was tasked to overhaul the “Files in This Folder – Interview Prep” repository that our hiring team used for candidate prep. The folder contained dozens of PDFs, Markdown notes, and legacy scripts that were hard to search, version‑controlled, and often duplicated across branches.

**Action (Design & Execution)**  
1. **Ownership & Dive Deep** – I wrote a Python script that scanned the repo, identified duplicates, and generated an audit report (`duplicate_files_report.csv`).  
2. **AWS Architecture** – Migrated all assets to an S3 bucket with versioning enabled. Implemented AWS Lambda (Python 3.11) + API Gateway for on‑demand search via a lightweight REST endpoint. Added DynamoDB to index metadata (size, last modified, tags).  
3. **Scalability & Cost** – S3’s “Standard-IA” tier stored infrequently accessed files at ~$0.01/GB/month; Lambda kept compute costs <$1/day.  
4. **Bias for Action** – Rolled out the new structure in a single day, updated GitHub Actions to push changes automatically, and set up CloudWatch alerts for any failed syncs.

**Result (Quantified Impact)**  
- Reduced storage cost by 35 % (from $120/month to $78/month).  
- Cut search time from ~30 seconds to <2 seconds for any file.  
- Eliminated 22 duplicate files, saving 4 GB of space and reducing build times by 12 %.  

**Learning & Bar‑raiser Insight**  
I learned that a small, automated audit can surface hidden waste quickly; the key is to expose the problem early so stakeholders see tangible ROI. I also discovered that Lambda’s cold starts are negligible for our read‑heavy workload because we use Provisioned Concurrency for peak interview periods. The bar‑raiser will note my ownership in driving end‑to‑end change, depth of technical design, and clear metrics that tie back to business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
