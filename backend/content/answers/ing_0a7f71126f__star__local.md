---
qid: ing_0a7f71126f__star__local
question: 'Explain: Semantic Routing — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 365
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:49-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company we were building an AI‑driven customer support chatbot that needed to route user queries to the right internal knowledge base quickly. The existing keyword‑based routing was hitting a 30 % mis‑routing rate, which caused long wait times and frustrated users.

**Task:**  
I had to design a more intelligent routing system that could understand intent beyond surface words, classify queries into a hierarchy of domain models, and maintain low latency (under 200 ms) for real‑time response.

**Action:**  
I introduced a *semantic routing* pipeline built on a transformer encoder (DistilBERT fine‑tuned on our support logs). First, I created a taxonomy of 12 top‑level domains (Billing, Technical Support, Account Management, etc.) and nested sub‑domains. Each domain was represented by an embedding vector learned from labeled query examples. For each incoming message I computed its contextual embedding, then used cosine similarity to find the nearest domain node in the taxonomy tree. To keep latency low, I cached embeddings for frequent intents and pruned the search space using a hierarchical index (FAISS). I also set up A/B testing against the legacy system.

**Result:**  
After deployment, mis‑routing dropped from 30 % to 8 %, cutting average first‑contact resolution time by 35 %. The new model also exposed previously unseen sub‑domains, allowing us to create targeted FAQ content. I learned that a well‑structured taxonomy combined with transformer embeddings can deliver both accuracy and speed in real‑time AI routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
