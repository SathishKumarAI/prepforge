---
qid: ing_3626f7beb0__faang__local
question: 'Explain: Naive RAG (Retrieve-then-Generate) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 477
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:58-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Explain the core idea behind **Naïve Retrieve‑then‑Generate (RAG)** and its fundamentals.  
*Assumptions to confirm:*  
- Audience knows basic LLMs but not RAG specifics.  
- “Naïve” refers to the simplest pipeline: one retrieval step followed by generation.  
- Evaluation metrics (e.g., relevance, hallucination) are understood.

**2️⃣ Approach**  
1. Define the two stages—retrieval and generation.  
2. Show how they interact in a linear flow.  
3. Highlight why this is called “naïve” versus more sophisticated RAG variants.  

**3️⃣ Depth** (≈110 words)  
Naïve RAG first **queries an external corpus** using the user prompt or a transformed query to retrieve *k* documents via TF‑IDF, BM25, or dense embeddings (e.g., DPR). The retrieved passages are concatenated into a single context string and fed to a pre‑trained language model (e.g., GPT‑3) as the only input. The LLM then **generates** an answer conditioned on this combined prompt.  
Key trade‑offs:  
- *Speed:* Retrieval is fast, but generation may hallucinate if context is noisy.  
- *Scalability:* Index size limits real‑time retrieval; larger contexts strain token budgets.  

**4️⃣ Edge Cases**  
- **No relevant docs:** model produces generic or hallucinated content.  
- **Over‑long context:** truncation leads to loss of critical facts.  
- **Query drift:** the retrieval query may diverge from user intent, causing mismatch.  
Test with: empty hits, varying k, and noisy corpora.

**5️⃣ Optimize & Communicate**  
Improvements include multi‑round retrieval (feedback loop), dynamic prompt formatting, and fine‑tuning on retrieved data. When presenting, emphasize the linearity of naïve RAG to set expectations for baseline performance before moving to advanced architectures like **Dual‑Encoder RAG** or **ReRanked Retrieval**. This structure demonstrates clear problem framing, systematic solution design, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
