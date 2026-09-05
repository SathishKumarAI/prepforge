---
qid: ing_ca6678e181__star__local
question: 'Explain: Preprocessing Different File Types — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:03-05:00'
sources: []
---

**Situation**  
At my last role, we were building a search‑powered FAQ bot for a financial services client. The knowledge base consisted of PDFs, scanned images, and HTML help pages—over 3,000 documents totaling 12 GB.  

**Task**  
I needed to ingest all file types into Haystack’s pipeline so that the model could index and retrieve relevant answers in real time, while keeping ingestion under a 48‑hour window.  

**Action**  
1. Created a custom `FileConverter` that used Tesseract OCR for scanned PDFs, PyMuPDF for standard PDFs, and BeautifulSoup for HTML.  
2. Implemented chunking with a sliding window of 512 tokens and overlap of 50 tokens to preserve context across page breaks.  
3. Normalized text: lowercasing, removed non‑ASCII characters, and applied a spaCy NER pipeline to tag entity spans that would later aid in answer extraction.  
4. Built an ingestion script that ran on AWS Lambda, storing intermediate JSONL files in S3 and feeding them into Haystack’s `DocumentStore` via bulk API calls.  

**Result**  
The bot achieved 87 % precision‑recall on a held‑out test set, reduced average response time from 4.2 s to 1.8 s, and the ingestion pipeline completed in 36 hours—well within SLA. I learned that tailoring converters per file type and chunking strategy can dramatically improve both accuracy and performance in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
