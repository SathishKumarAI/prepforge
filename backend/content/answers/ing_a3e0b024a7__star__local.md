---
qid: ing_a3e0b024a7__star__local
question: 'Q: What is the "Property Graph" in LlamaIndex and why is it superior to
  basic Vector RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 338
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:13-05:00'
sources: []
---

**Situation:**  
When I joined a startup building an AI‑powered legal research assistant, our data team was struggling to surface relevant case law from a massive corpus of PDFs and court opinions. The existing solution used plain vector embeddings (Vector RAG) but returned noisy results because it ignored relationships between cases, statutes, and judges.

**Task:**  
I had to design a retrieval layer that could capture legal entities and their interconnections while still leveraging LlamaIndex’s powerful text generation capabilities, all within our 2‑month sprint.

**Action:**  
I introduced the Property Graph model in LlamaIndex. First, I parsed each document with spaCy to extract entities (case names, statutes, parties) and relationships (cited by, decided by). Using Neo4j as the backend, I stored these nodes and edges, assigning weights based on citation frequency. Then, I built a hybrid query engine: a graph traversal identified top‑k related cases, and those passages were embedded into LlamaIndex’s vector store for semantic ranking. This approach combined structured reasoning with dense retrieval.

**Result:**  
The new system cut precision error from 35% to 18%, boosted recall by 12 points, and reduced average query latency from 1.8 s to 0.9 s. The legal team reported that attorneys could find precedent faster, and I learned how graph semantics can dramatically enhance retrieval quality over plain vector methods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
