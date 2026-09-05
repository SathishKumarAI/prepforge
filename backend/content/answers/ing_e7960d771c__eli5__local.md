---
qid: ing_e7960d771c__eli5__local
question: 'Explain: Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 220
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:16-05:00'
sources: []
---

**Indexing in machine‑learning systems is like a library’s card catalog.**  
When you have millions of data points—images, texts, sensor readings—you don’t want to scan every item each time you ask a question (e.g., “give me all images similar to this one”). An index is a pre‑built lookup table that tells the system exactly where to find relevant items. Think of it as a map that links a few key words or features (the *index keys*) to the locations of full records in storage.  

Just as a librarian uses the catalog to jump straight to the right shelf, an ML model uses the index to fetch only the data needed for training or inference, saving time and memory. The index itself is built once (or updated periodically) by scanning the dataset and recording feature–location pairs. This simple “jump‑to‑the-right‑place” trick keeps large‑scale learning fast and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
