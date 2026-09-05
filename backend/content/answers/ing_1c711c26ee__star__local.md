---
qid: ing_1c711c26ee__star__local
question: 'Document parsing at scale: PDFs, HTML, spreadsheets, email, scans. What
  breaks and how do you build for it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 423
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:18-05:00'
sources: []
---

**Situation:**  
At my previous firm we launched a data‑ingestion platform that needed to pull structured information from 200k documents per month—PDFs, HTML pages, Excel sheets, and scanned invoices. Half of the PDFs were legacy printouts with low DPI, and the email attachments often came in corrupted formats.

**Task:**  
I had to design an end‑to‑end pipeline that could reliably parse each file type, extract key fields (invoice number, amount, dates), and flag documents where confidence fell below 80% for manual review—all while keeping latency under 30 s per batch of 5k files.

**Action:**  
- Built a modular extractor using `pdfplumber` for PDFs, `BeautifulSoup` for HTML, and `pandas.read_excel` for spreadsheets.  
- Integrated Tesseract OCR with custom pre‑processing (deskewing, binarization) to improve scan accuracy to 95% on low‑res images.  
- Implemented a confidence scoring system: field‑level fuzzy matching against reference schemas plus a lightweight neural net that evaluated layout consistency.  
- Deployed the pipeline in AWS Lambda with step functions for fault tolerance; used SQS queues to decouple ingestion from processing and autoscale based on queue depth.  
- Added an automated alerting dashboard (Grafana + Prometheus) to monitor error rates per document type.

**Result:**  
Processing throughput increased from 80 % success at 60 s latency to 99 % accuracy with <15 s average latency. Manual review tickets dropped by 70%, saving $120k in labor annually. I learned that combining rule‑based extraction with lightweight ML confidence checks, wrapped in a serverless architecture, is key for resilient large‑scale document parsing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
