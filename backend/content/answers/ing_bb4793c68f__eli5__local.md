---
qid: ing_bb4793c68f__eli5__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 429
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:07-05:00'
sources: []
---

Imagine you’re a librarian who has just received 10 million books that were photocopied in black‑and‑white. Your goal is to pull out the title, author, and date from each copy so you can catalogue them.

**Pipeline**

1. **Scan → OCR (Optical Character Recognition)**  
   The copier’s image of each page is turned into a block of text. Think of it like a photocopier that “reads” the words for you.

2. **Chunk & Prompt → LLM (Large Language Model)**  
   Each document is split into small chunks (≈ 1 k characters) and fed to an AI model with a prompt such as “Give me the title, author, and date.” The model reads each chunk and writes the three fields in a structured format.

3. **Post‑process & Store**  
   The extracted triples are cleaned (fix typos), merged if split across chunks, and written into a database.

**Cost/Latency Estimate**

- OCR: 0.01 USD per page → 10 M pages ≈ $100 k.  
- LLM: 1 k‑token chunk costs ~0.0004 USD; average 5 chunks per doc → 50 M tokens ≈ $20 k.  
- Total ≈ $120 k.

Latency: each page goes through OCR (≈ 0.05 s) + LLM (≈ 0.1 s). For a single document, ~0.15 s; for 10 M docs in parallel on cloud GPUs, overall wall‑time can be a few hours, not days.

So, you turn scanned images into text, ask an AI to pull out the three fields from each chunk, and then stitch them together—costing about $120 k and finishing in a handful of hours with modern hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
