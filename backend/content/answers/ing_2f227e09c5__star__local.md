---
qid: ing_2f227e09c5__star__local
question: 'Explain: Pattern 4: Multi-Vector Query — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:50-05:00'
sources: []
---

**Situation:**  
When launching our recommendation engine for the e‑commerce platform, we noticed that user click‑through rates dropped by 18% after adding new product categories. Our search layer was still a single‑vector lookup in Elasticsearch, so it couldn’t capture nuanced relationships between text descriptions and image embeddings.

**Task:**  
I needed to redesign the retrieval pipeline so that a single query could simultaneously search across multiple modalities—text, image, and user intent vectors—while keeping latency under 150 ms for real‑time recommendations.

**Action:**  
I migrated the vector store to Milvus and defined three separate collections: `text_vec`, `image_vec`, and `intent_vec`. For each incoming request I generated embeddings with Sentence‑BERT (768 dims), CLIP (512 dims), and a lightweight user‑profile model (256 dims). Using Milvus’s multi‑vector query API, I sent all three vectors in one call, weighted them 0.4:0.3:0.3, and applied a cosine similarity threshold of 0.75. The results were merged with a top‑k re‑ranking step that penalized duplicate items.

**Result:**  
The new multi‑vector search cut the click‑through rate drop to +7% over three months, boosted overall conversion by 12%, and kept query latency at ~120 ms. I learned that leveraging vector databases for simultaneous multimodal retrieval can dramatically improve relevance without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
