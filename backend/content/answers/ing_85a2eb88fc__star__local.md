---
qid: ing_85a2eb88fc__star__local
question: 'Explain: Embedding Metadata for Improved Retrieval'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 347
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:19-05:00'
sources: []
---

**Situation:**  
At a fintech startup, our search engine was returning low recall for loan‑application documents: only ~35 % of relevant files appeared in the top 10 results during compliance audits.

**Task:**  
Improve retrieval accuracy by 20 % within three months without adding costly index infrastructure or slowing query latency below 200 ms per request.

**Action:**  
I introduced a metadata‑embedding pipeline. First, I extracted structured fields (applicant name, loan amount, submission date) and unstructured tags (risk score, jurisdiction) from PDFs using Apache Tika and spaCy. Then, with Sentence‑Transformers, I encoded each document into a 384‑dimensional vector that combined both text embeddings and one‑hot encoded metadata features. I indexed these vectors in Elasticsearch’s dense vector field, adding a custom cosine similarity scorer that weighted metadata terms 1.5× higher than raw text. During query time, the system projected user queries into the same space and fetched candidates via kNN, followed by a lightweight re‑ranking step using a logistic regression model trained on click‑through data.

**Result:**  
Recall at top‑10 rose to 57 % (a 22 % lift) while average latency stayed at 180 ms. The team learned that enriching embeddings with curated metadata can dramatically boost precision without overhauling existing search stacks, and the approach scaled to 50k documents with negligible compute overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
