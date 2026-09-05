---
qid: ing_c7ceefbb0a__star__local
question: 'Explain: Parallel Extractors vs Single-Pass — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 356
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:09-05:00'
sources: []
---

**Situation:**  
At my last firm we were building a contract‑review platform for a law firm that had over 150,000 pages of PDFs and scanned images. The client demanded near real‑time extraction of clauses with a tolerance below 2 % error.

**Task:**  
I needed to design an extraction pipeline that could process each document in under 30 seconds while keeping the OCR cost per page low.

**Action:**  
Instead of the usual single‑pass approach—running OCR, then NLP, then post‑processing sequentially—I split the job into parallel extractors. First, a lightweight Tesseract OCR ran on GPU shards to produce raw text blobs. Simultaneously, a transformer‑based layout parser (LayoutLMv3) extracted structure and tags from each page in memory. Both streams fed into a shared queue where a rule‑based post‑processor merged entity spans and resolved conflicts. I used Apache Kafka for stream orchestration, enabling back‑pressure handling when OCR lagged behind NLP.

**Result:**  
Processing time dropped from 1 minute per document to 22 seconds on average—an 80 % speedup—while the overall error rate fell from 4.5 % to 1.8 %. The architecture also cut OCR costs by 30 % because we could run Tesseract only on pages flagged as containing text, leaving scanned images for a secondary OCR pass. I learned that decoupling heavy NLP tasks from OCR and using stream‑based parallelism is key in scaling document intelligence at enterprise scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
