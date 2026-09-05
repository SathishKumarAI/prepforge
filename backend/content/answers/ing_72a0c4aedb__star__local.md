---
qid: ing_72a0c4aedb__star__local
question: 'Explain: Creating Vision+Text RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 367
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:40-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a customer support chatbot that could answer product‑related questions by pulling in both product images and text descriptions from our internal knowledge base. The existing bot only used text, so it often missed visual cues like color or shape.

**Task** – I needed to design a Retrieval Augmented Generation (RAG) pipeline that could embed both vision and text modalities, retrieve the most relevant multimodal documents, and generate accurate answers in real time for our 10k daily user queries.

**Action** – I started by setting up Haystack’s `DocumentStore` with Elasticsearch. For embeddings, I used a pre‑trained CLIP model to encode images and a Sentence‑Transformers model for text; I stored both vectors in the same index. Next, I implemented a custom `MultiModalRetriever` that queries the vector store using a combined similarity score (weighted 0.6 image + 0.4 text). For generation, I fine‑tuned a T5 model on our FAQ data, feeding it the retrieved multimodal context via a prompt template. Finally, I wrapped everything in a Flask API and added caching to keep latency below 500 ms.

**Result** – The new bot reduced answer time from 2.3 s to 0.4 s per request and increased customer satisfaction scores by 18 % (CSAT rose from 72 % to 85 %). I learned that balancing modality weights and caching are key trade‑offs for production RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
