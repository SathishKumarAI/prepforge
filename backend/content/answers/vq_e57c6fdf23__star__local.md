---
qid: vq_e57c6fdf23__star__local
question: What are different metadata options in GetMetadata Activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:42-05:00'
sources: []
---

**Situation** – In a recent ADF pipeline I had to audit the freshness of a daily sales lakehouse before downstream reporting could run. The raw files were stored in an ADLS Gen2 container and we needed to know not only when they were last modified but also their size, number of rows, and whether any new partitions appeared.

**Task** – Build a lightweight “metadata collector” that would pull all relevant attributes from the file system and feed them into a validation table without scanning the entire dataset.

**Action** – I used the **GetMetadata** activity twice: first on the container level to retrieve `childItems` (list of files) and `folderSize`. Then, for each child item, I called GetMetadata again with the **metadata options** set to `lastModified`, `size`, `fileExtension`, `contentHash`, and `childItems` for nested folders. I chained these calls in an *ForEach* loop and wrote the results to a SQL DW staging table using a Stored Procedure activity. To keep the run time low, I limited the recursion depth and used `batchSize=1000`.

**Result** – The pipeline now produces a 1‑minute metadata snapshot for every ingestion cycle, capturing 12 k files with an average size of 2 MB each. The validation table shows a 15% drop in stale data incidents, and I learned how to combine multiple metadata options efficiently without full data scans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
