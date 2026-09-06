---
qid: ing_9bc3bf0d86__fp__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 394
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:33-05:00'
sources: []
---

**When to choose OCR vs. a Vision‑Language Model (VLM) for document extraction**

The core problem is *mapping visual content to structured data*.  
*OCR* solves the subproblem “extract raw text” by treating each page as a bitmap and applying character‑level segmentation + recognition. It is optimal when:

1. **The input is predominantly typed or printed** – high‑contrast, regular fonts give deterministic segmentation, so OCR’s confidence scores are reliable.
2. **Latency and cost matter** – a lightweight OCR engine (e.g., Tesseract) runs in milliseconds on CPU, whereas VLM inference often requires GPU and incurs higher latency.
3. **The downstream task needs fine‑grained tokenization** – OCR provides exact character positions, enabling precise bounding boxes for later layout analysis.

A *VLM* is preferable when:

1. **Layout or semantics matter** – the model jointly reasons about text, images, and spatial relationships, so it can resolve ambiguities that pure OCR cannot (e.g., distinguishing “Table” headings from body text).
2. **The source contains mixed media** – handwritten notes, scanned diagrams, or low‑contrast PDFs are better handled by a VLM’s multimodal attention mechanism.
3. **Robustness to distortions is required** – VLMs trained on diverse data generalize across skewed, rotated, or partially occluded pages.

**Non‑obvious insight:**  
A hybrid pipeline that first runs lightweight OCR for quick tokenization and then feeds *only* the ambiguous regions (e.g., where OCR confidence < 0.8) to a VLM can dramatically reduce inference cost while preserving accuracy. This selective refinement turns the VLM into an *adversarial verifier*, not a blanket replacer, aligning computation with uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
