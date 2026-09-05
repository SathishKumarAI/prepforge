---
qid: ing_31ff550cd2__star__local
question: 'Explain: Pattern 3: Vision-First (Page-as-Image) — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 351
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:14-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the search experience for a legal‑document portal that served over 80 k case files. Users complained the text‑only index missed key facts hidden in scanned PDFs and annotated screenshots.

**Task:**  
I needed to build a multimodal Retrieval-Augmented Generation (RAG) system that could ingest both the OCR text and the visual layout, then answer queries as if it had read the whole page as an image.

**Action:**  
First I extracted high‑resolution page images and ran them through CLIP to get dense visual embeddings. For the text side I used a fine‑tuned T5 encoder on the OCR output. I built a joint vector index in FAISS where each document’s visual and textual vectors were concatenated, weighting the image component 0.6 to reflect its importance. During retrieval, the query was passed through the same dual encoders; the top‑k results fed into a BART decoder that generated concise answers, conditioned on both embeddings. I also added a confidence score based on cosine similarity across modalities.

**Result:**  
After deployment, search precision rose from 68 % to 83 %, and user satisfaction scores improved by 15 pts in the quarterly survey. The system handled 4× more image‑heavy documents without slowing response time. This project taught me that treating a page as an integrated visual–text unit can unlock insights that pure NLP misses, especially when coupled with a lightweight multimodal RAG pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
