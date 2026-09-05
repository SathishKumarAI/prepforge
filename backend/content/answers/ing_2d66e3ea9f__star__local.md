---
qid: ing_2d66e3ea9f__star__local
question: 'Explain: You need to process 10M document pages per month. VLM or traditional
  OCR? Do the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 348
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:59-05:00'
sources: []
---

**Situation** – In Q2 last year my team was tasked with indexing a 10‑million page archive for an enterprise search product. The pages were scanned PDFs from multiple vendors, each averaging 5 MB uncompressed.

**Task** – We had to extract searchable text and metadata within two weeks while keeping costs under $50k/month.

**Action** – I first benchmarked a VLM (Vision‑Language Model) like BLIP on a sample of 10,000 pages: inference time was ~0.35 s per page on an A100 GPU, so 10M pages would need roughly 3,650 GPU hours → ~$14k/month just for compute. Traditional OCR with Tesseract+LangDetect processed at ~2 pages/sec on CPU; scaling to 10M pages required a 500‑core cluster, costing $8k/month in cloud compute plus storage. I also profiled error rates: VLM achieved 92% character accuracy but struggled with low‑resolution scans, whereas OCR hit 95% and was more robust across formats. Given the tighter budget and higher reliability for our use case, we chose a hybrid pipeline—Tesseract for bulk OCR, followed by a lightweight transformer for disambiguation on the top 5% of ambiguous pages.

**Result** – The final pipeline processed all 10M pages in 13 days, stayed under $9k/month, and improved search recall by 12%. I learned that model choice must balance inference cost, accuracy, and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
