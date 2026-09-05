---
qid: ing_544df589a3__eli5__local
question: 'Explain: Introduction — Zero-Shot Local Document Parsing with Gemma 4:
  Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 242
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:30-05:00'
sources: []
---

**Imagine a librarian who never sees the books in the library before but can still find what you need by looking at their covers and spine labels.**  
In zero‑shot local document parsing, we give a language model (Gemma 4) a fresh PDF—just like that unknown book—and ask it to read and understand its content without having been trained on that exact file. We treat the whole PDF as an *image*: every page is turned into a picture of text and layout. The model looks at this “cover” image, identifies key shapes (headings, paragraphs, tables), and extracts the information, just as the librarian glances at the spine to know where to find the requested section.  
*Zero‑shot* means no extra training on that specific PDF; *local parsing* refers to reading only the given document rather than searching a database. This approach lets us quickly analyze new PDFs with minimal setup, like a skilled reader spotting patterns in an unfamiliar book at first glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
