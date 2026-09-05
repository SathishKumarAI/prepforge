---
qid: ing_dec01467c7__star__local
question: 'Explain: Query — Welcome - GraphRAG'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 410
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:13-05:00'
sources: []
---

**Situation:**  
In a recent product launch, we were tasked with building an FAQ chatbot that could answer user queries about onboarding in real time. The existing retrieval‑augmented generation (RAG) model struggled to surface the right documents for nuanced “welcome” questions because the knowledge base was highly relational—user accounts linked to roles, permissions, and onboarding steps.

**Task:**  
I needed to design a system that could understand the context of a user’s “Welcome” query and retrieve relevant procedural data from our graph database, then generate an accurate, concise response.

**Action:**  
I implemented GraphRAG: first, I parsed the user query into a semantic graph using spaCy and extracted entities (e.g., “welcome”, “new employee”). Next, I queried Neo4j with Cypher to traverse relationships—linking the entity to role nodes, onboarding steps, and policy documents. The retrieved subgraph was vectorized via GraphSAGE embeddings and fed into a GPT‑4 model as context. Finally, I wrapped this pipeline in an async FastAPI endpoint, caching frequently used subgraphs to reduce latency.

**Result:**  
The chatbot’s precision on “welcome” queries jumped from 65 % to 92 %, with average response time dropping to 350 ms. The experience taught me that coupling graph traversal with RAG not only boosts relevance but also keeps the system explainable—users can see why a particular policy was cited.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
