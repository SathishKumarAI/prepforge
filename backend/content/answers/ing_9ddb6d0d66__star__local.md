---
qid: ing_9ddb6d0d66__star__local
question: 'Explain: Iterative Document Enrichment — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 343
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:52-05:00'
sources: []
---

**Situation** – At a fintech startup I was tasked with building a knowledge‑base search for compliance documents that were scattered across PDFs, internal wiki pages, and legacy email archives. The existing keyword search returned 45 % relevant hits, and the team needed to support audit queries within two seconds.

**Task** – I had to design an iterative document enrichment pipeline that would surface high‑confidence facts (e.g., policy dates, regulator names) and feed them back into the retrieval engine so that subsequent queries could be answered more precisely without manual indexing.

**Action** – First, I deployed a lightweight spaCy NER model on each raw document to extract entities. Then I used OpenAI’s embeddings API to convert both the original text and the extracted entity snippets into vector representations stored in Pinecone. For every search request, my system ran a two‑stage retrieval: (1) a quick semantic match against all vectors; (2) an iterative re‑ranking that boosted documents containing entities matching the user query. I added a feedback loop where top‑ranked documents were automatically parsed for new entities, enriching the index in near real time.

**Result** – The enriched search reduced relevant document latency from 3.8 s to 0.9 s and increased precision@10 from 45 % to 78 %. I learned that coupling lightweight NLP with vector‑based retrieval and an automated enrichment cycle can dramatically improve both speed and accuracy in knowledge‑base systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
