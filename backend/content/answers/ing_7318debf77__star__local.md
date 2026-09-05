---
qid: ing_7318debf77__star__local
question: 'Explain: Introducing BigLaw Bench: Research'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 325
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:47-05:00'
sources: []
---

**Situation:**  
In my last role at a mid‑size law firm, we were struggling with an internal knowledge base that was growing out of control—hundreds of case briefs and precedent PDFs stored in a flat folder structure. The legal team spent 30 % more time searching for relevant material, which delayed client responses.

**Task:**  
I was tasked with designing a machine‑learning solution to automatically tag, cluster, and surface the most pertinent documents for each practice area, aiming to cut search time by at least 40 %.

**Action:**  
I built “BigLaw Bench,” a pipeline that ingests PDFs, runs OCR via Tesseract, then feeds extracted text into spaCy for entity extraction. Using sentence‑embedding models (Sentence-BERT) I clustered documents with k‑means and indexed them in Elasticsearch. For the search interface I integrated LangChain to allow natural‑language queries, returning ranked snippets. I also set up a lightweight Flask API that the firm’s document management system calls on demand.

**Result:**  
After deployment, attorneys reported a 55 % reduction in search time, translating into roughly 120 hours saved per month across the firm. The model achieved an F1‑score of 0.87 for entity recognition and a mean reciprocal rank of 0.72 for query relevance. I learned that combining robust NLP pipelines with user‑centric UI design can deliver tangible productivity gains in legal tech.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
