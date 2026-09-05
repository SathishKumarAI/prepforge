---
qid: ing_8902b47897__star__local
question: 'Explain: Architecture Patterns — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:54-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were building a virtual financial advisor that could answer user questions using both text and image documents—PDF statements, screenshots of app screens, and even handwritten notes from users.

**Task**  
I had to design an architecture that could ingest all those modalities, retrieve relevant snippets quickly, and generate coherent, context‑aware answers in real time, without exceeding our 200 ms latency budget for the API gateway.

**Action**  
I chose a multimodal Retrieval-Augmented Generation (RAG) pattern. First, I built separate encoders: a BERT‑based text encoder for PDFs, an EfficientNet‑V2 model fine‑tuned on document screenshots, and a lightweight CNN for handwritten notes. All embeddings were pushed to an approximate nearest neighbor index in Milvus, keyed by a unified ID. When a user query arrived, the system ran the query through a shared text encoder, fetched top‑k multimodal vectors, concatenated their raw content into a prompt, and fed it to a GPT‑4o model fine‑tuned on our domain. I added a caching layer for the most frequent queries using Redis to shave off 30 ms.

**Result**  
The new system cut answer latency from 650 ms to under 180 ms and improved user satisfaction scores by 18% (from 82% to 100% “satisfied”). We also reduced our GPU usage by 35% because the retrieval step pruned irrelevant data before generation. I learned that balancing modality‑specific encoders with a unified retrieval layer is key for scalable multimodal RAG deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
