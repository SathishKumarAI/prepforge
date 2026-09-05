---
qid: ing_9bc3bf0d86__eli5__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 274
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:23-05:00'
sources: []
---

Imagine you’re trying to read a handwritten note in two ways.

**OCR (Optical Character Recognition)** is like using a magnifying glass that zooms in on each letter, then spells out the words exactly as they appear. It’s great for clean, printed text or simple forms where you only need the letters themselves and can do it quickly and cheaply.

A **Vision‑Language Model (VLM)** is more like having a friend who not only reads the note but also understands its context—who wrote it, what pictures are drawn beside the words, or whether the page is a messy sketch. The VLM looks at the whole image, pulls out text *and* interprets layout, images, and relationships between elements.

**When to choose each:**
- Use OCR if you just need accurate text from clear scans or PDFs, especially when speed and cost matter.
- Send pages to a VLM when the document contains tables, mixed media, handwritten notes, or when you also want to extract meaning (e.g., “this is a receipt with a total of $23.50”).
In short: OCR = precise letter‑by‑letter reading; VLM = contextual, image‑aware understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
