---
qid: ing_9bc3bf0d86__think__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 479
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:13-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   - What is “document‑extraction” in this context? (text only vs. layout+images)  
   - Do we need OCR accuracy, speed, or cost considerations?  
   - Are there regulatory or privacy rules about sending data to external models?

**2. Adopt a two‑tier framework**  
   1. *Pre‑processing tier*: low‑cost, deterministic OCR (e.g., Tesseract) for dense text blocks.  
   2. *Intelligent tier*: Vision‑Language Models (VLMs) that can read layout, images, and context.

**3. Reason through the pipeline decision step‑by‑step**  
   - **Input type** → If the page is a clean scanned PDF with high‑contrast text, start with OCR.  
   - **Layout complexity** → For tables or multi‑column layouts, OCR alone may mis‑order; trigger VLM.  
   - **Image content** → Presence of logos, signatures, or handwritten notes suggests VLM for visual cues.  
   - **Performance budget** → OCR is faster and cheaper; use it first and only fall back to VLM when OCR confidence is low.

**4. Avoid common pitfalls**  
   - Don’t assume “OCR is always enough”; many PDFs have embedded images of text that need visual understanding.  
   - Beware of over‑loading the VLM with every page—this inflates latency and cost.  
   - Remember that sending raw images to a VLM may violate privacy; sanitize data first.

**5. Sanity‑check & communicate**  
   - Run unit tests: give the same document to both paths and compare extraction quality.  
   - Explain the decision logic to stakeholders: “We start with OCR for speed, but if layout confidence < X or images are detected, we hand off to a VLM to capture visual context.”  

By iterating this loop—clarify → model → step‑by‑step reasoning → trap check → sanity test—you build a robust, cost‑effective document‑extraction system that judiciously chooses OCR vs. VLM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
