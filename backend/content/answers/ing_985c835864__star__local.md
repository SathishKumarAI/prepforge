---
qid: ing_985c835864__star__local
question: 'Explain: Zero-Shot Local Document Parsing with Gemma 4: Treating PDFs as
  Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 366
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:21-05:00'
sources: []
---

**Situation**  
In a recent contract‑management system overhaul at my company, we had to extract structured data from hundreds of legacy PDF contracts that were scanned and heavily formatted. The existing OCR pipeline was brittle—50 % extraction accuracy—and the PDFs varied wildly in layout.

**Task**  
I needed to build a zero‑shot parsing solution that could read any contract without retraining on labeled examples, preserve formatting context, and return clean JSON fields (party names, dates, clauses) within 2 s per document for real‑time user queries.

**Action**  
I converted each PDF page into high‑resolution PNGs using Ghostscript, then fed them into Gemini‑4’s multimodal prompt: “Read this contract image and extract the parties, effective date, and termination clause.” I wrapped the model calls in a lightweight FastAPI microservice, added a caching layer for repeated queries, and used LangChain to post‑process the raw text with regex rules for dates. To keep latency low, I ran the inference on an A10 GPU and limited the prompt to a single page when possible.

**Result**  
Accuracy jumped from 50 % to 88 % F1 across our test set of 200 contracts, and average inference time dropped to 1.4 s per document. The system also handled previously unsupported scanned PDFs without manual annotation, freeing up 30 hrs of data‑engineering effort each month. I learned that treating PDFs as images with a powerful multimodal LLM can bypass brittle OCR pipelines when coupled with smart prompt design and lightweight post‑processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
