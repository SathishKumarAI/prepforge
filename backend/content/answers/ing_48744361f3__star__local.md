---
qid: ing_48744361f3__star__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 360
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:28-05:00'
sources: []
---

**Situation:** During the pilot for our AI‑powered document retrieval system at a mid‑size legal firm, we discovered that their “clean text” assumption was wrong: documents were a mix of scanned PDFs, Excel exports with merged cells, and a 15‑year‑old SharePoint library full of legacy attachments. The OCR confidence scores were hovering around 0.45, and the system couldn’t index key clauses.

**Task:** I had to design an end‑to‑end pipeline that could ingest this heterogeneous data, reliably extract text, and produce searchable embeddings without derailing the pilot timeline or inflating costs.

**Action:** First, I set up a two‑stage ingestion: (1) a lightweight Tesseract OCR module with custom language models for legal jargon; (2) an Excel parser using `pandas` that flattened merged cells into single rows. For SharePoint, I wrote a PowerShell script to bulk export files and store them in Azure Blob Storage. I then used LangChain’s `DocumentLoader` wrappers to unify formats, applied preprocessing steps (deduplication, stop‑word removal), and indexed the embeddings with Pinecone for low latency. Throughout, I ran unit tests on sample batches to ensure 95 %+ OCR accuracy before full deployment.

**Result:** The revamped pipeline reduced processing time from 30 min per batch to 8 min, achieved a 92 % text extraction accuracy, and allowed the pilot team to query documents in under 2 seconds. I learned that early validation of data formats is critical, and that combining open‑source OCR with custom preprocessing can bridge legacy systems without costly migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
