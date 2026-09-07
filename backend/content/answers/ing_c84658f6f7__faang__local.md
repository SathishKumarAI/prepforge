---
qid: ing_c84658f6f7__faang__local
question: 'Q9: How would you handle documents with tables, charts, and images?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 517
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:06-05:00'
sources: []
---

**Clarify**  
You’re asking how to ingest semi‑structured documents (PDFs, Word files) that contain tables, charts, or embedded images into an AI pipeline. I’ll assume: *a) the goal is to extract meaningful text and metadata; b) downstream tasks may include search, summarization, or QA; c) the input format varies widely but we can rely on OCR and layout‑analysis libraries.*  

**Approach**  
1. **Pre‑process** → convert each page to a raster image (PDF → PNG).  
2. **Layout analysis** → run a vision model (e.g., Detectron2 or Google’s LayoutLMv3) to segment text blocks, tables, and figures.  
3. **OCR & table parsing** → use an OCR engine (Tesseract + LSTM or a commercial API) for plain text; for tables apply a table‑recognition model that outputs a structured CSV/JSON.  
4. **Image understanding** → feed images to CLIP or a vision transformer to generate captions or embeddings.  
5. **Indexing & storage** → store extracted tokens, table cells, and image embeddings in a vector DB (FAISS/Pinecone) alongside the original PDF for provenance.

**Depth**  
- OCR accuracy ≈ 97% on clean scans; degraded by skew → apply deskewing.  
- Table extraction runs in O(n_pages × n_cells).  
- Embedding generation is linear in image count but can be batched.  
- Trade‑off: heavier models (LayoutLMv3) give better layout fidelity at the cost of ~200 ms per page.

**Edge Cases**  
- Multi‑column PDFs → merge blocks correctly.  
- Scanned documents with noise → use de‑noise filters before OCR.  
- Embedded SVG charts → rasterize at high DPI to preserve detail.  
- Non‑English scripts → switch OCR engine or fine‑tune on target language.

**Optimize & Communicate**  
I’d first prototype on a small corpus, benchmark OCR and table accuracy against ground truth, then iterate: add adaptive thresholding for skew, cache embeddings, and expose an API that returns the original document alongside structured data. I’d explain my pipeline stepwise to interviewers, highlighting how each component addresses a specific challenge (layout vs. content) and how performance scales with document size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
