---
qid: ing_2ffc09833b__think__local
question: 'Explain: Query Routing and Classification — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 452
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:20:06-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify what “Query Routing” and “Classification” mean in a production RAG (Retrieval‑Augmented Generation) system.  
   - Assume we’re dealing with a large‑scale, real‑time service that must decide which knowledge source to consult for each user query.  

**2️⃣ Mental model / framework**  
   - Think of the system as a pipeline: *User Query → Pre‑processing → Routing Decision → Retrieval → Generation*.  
   - Model routing as a classification problem where each class corresponds to a backend (e.g., FAQ DB, external API, internal knowledge graph).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Feature extraction**: token counts, embeddings, intent tags, domain keywords.  
   2. **Model selection**: lightweight classifier (logistic regression, small transformer) that can be served at low latency.  
   3. **Training data**: historical logs labeled with the backend that produced the best answer.  
   4. **Inference**: compute a probability vector; pick top‑k or threshold to route.  
   5. **Fallback & monitoring**: if confidence is low, send to a generic retriever or human in the loop.  

**4️⃣ Common traps to avoid**  
   - Overfitting on sparse labels → use regularization and data augmentation.  
   - Ignoring latency budgets → keep feature extraction fast (e.g., use cached embeddings).  
   - Treating routing as static → continually re‑train with new logs to adapt to evolving content.  

**5️⃣ Sanity‑check & communicate**  
   - Verify that the classifier’s accuracy on a held‑out set meets SLA requirements.  
   - Explain the trade‑off: higher precision in routing reduces retrieval cost but may miss edge cases; lower precision increases coverage but can overload expensive backends.  
   - Present results as simple metrics (accuracy, latency) and a diagram of the end‑to‑end flow to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
