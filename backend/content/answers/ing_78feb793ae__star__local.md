---
qid: ing_78feb793ae__star__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 328
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:57-05:00'
sources: []
---

**Situation**  
In my last role I managed a cloud‑based document ingestion pipeline for an e‑commerce platform that processed over 10 million PDFs per month. A sudden drop in the search relevance score from 0.78 to 0.52 flagged a possible issue, but manual inspection of every file was infeasible.

**Task**  
I needed to detect silently corrupted parsing across the entire dataset without inspecting each page, determine the scope and root cause, and implement a fix that would run at scale.

**Action**  
1. Added a lightweight checksum (SHA‑256) for each original PDF stored in S3.  
2. After parsing, I recomputed checksums on the extracted text blobs and compared them to the originals using a Bloom filter for sub‑second lookups.  
3. Created a distributed Spark job that scanned the delta logs, flagged mismatches, and produced a histogram of error rates by uploader and document type.  
4. Used these metrics to pinpoint a misconfigured OCR engine version in our Docker image, then rolled out an immutable container update with rollback enabled.

**Result**  
The new monitoring detected 3 % of files as corrupted within the first week, restoring search relevance to 0.77 in two days. The checksum strategy added only ~2 ms per file and reduced manual triage from weeks to minutes. I learned that proactive integrity checks can turn a silent failure into a measurable KPI, enabling rapid, data‑driven remediation at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
