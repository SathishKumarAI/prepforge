---
qid: ing_36b3eecabe__star__local
question: 'Explain: 3.1.2 Document Parsing and Graph Construction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:40-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an automated contract‑analysis engine for thousands of loan agreements that clients had uploaded in PDF and scanned image formats. The legacy system required manual extraction, taking days per batch.

**Task:**  
I was tasked with designing a fully automated pipeline to parse the documents, build structured knowledge graphs (entities → relationships), and feed them into our downstream risk‑scoring model—all within 48 hours of upload.

**Action:**  
First, I integrated Tesseract OCR for scanned PDFs and used spaCy’s multilingual NER to pull out key entities (borrower, lender, interest rate). To capture contextual relations, I ran a dependency parser on the cleaned text, then converted each sentence into a directed graph where nodes were entities and edges represented grammatical dependencies. Next, I applied a Graph Neural Network (GNN) encoder (GraphSAGE) to embed these graphs into 128‑dim vectors. These embeddings were concatenated with traditional features and fed into a gradient‑boosted tree that predicted default probability. We also added an attention layer over the graph to prioritize clauses like “late payment penalties.”

**Result:**  
The new pipeline cut processing time from 3 days to under 2 hours per batch, increased extraction accuracy by 27 % (F1 score rose from .68 to .86), and boosted our risk‑score model’s AUC from .78 to .84. I learned that combining rule‑based parsing with GNN embeddings can turn unstructured legal text into actionable features at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
