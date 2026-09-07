---
qid: ing_74b8f8bae8__faang__local
question: How do you handle retrieval in a multi-turn conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 464
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:15:54-05:00'
sources: []
---

**Clarify**  
The question asks how to retrieve relevant knowledge or context during an ongoing dialogue (e.g., a chatbot). I’d confirm:  
* Are we retrieving from a fixed knowledge base, or from past conversation turns?  
* Is the retrieval neural (dense) or lexical (BM25)?  
* What latency budget and scalability constraints exist?

**Approach**  
1. **Turn‑level context window** – keep the last *N* user‑assistant exchanges in memory.  
2. **Query construction** – concatenate recent turns, optionally add user intent tags.  
3. **Retrieval engine** – use a hybrid of sparse BM25 for exact matches and dense embeddings (e.g., SBERT) for semantic recall.  
4. **Relevance re-ranking** – feed top‑k results into a lightweight transformer that scores relevance conditioned on the conversation state.  
5. **Cache & update** – cache frequent queries, invalidate after a time window or new turn.

**Depth**  
*Complexity*: BM25 is *O(1)* per term; dense retrieval is *O(d·N)* where *d* is embedding dim and *N* docs. Re‑ranking adds *O(k·L²)* for transformer layer *L*.  
*Trade‑offs*: Pure sparse retrieval offers low latency but misses paraphrases; pure dense gives higher recall at cost of GPU inference. Hybrid balances both.

**Edge Cases**  
* Extremely long dialogues → sliding window or hierarchical summarization to keep context size bounded.  
* Ambiguous user intent → fallback to ask clarifying question.  
* Out‑of‑scope queries → return “I don’t know” with a link to help docs.

**Optimize & Communicate**  
Explain that the system starts simple (BM25 + sliding window), monitors latency, and gradually introduces dense re‑ranking only for high‑variance topics. Emphasize continuous A/B testing of recall vs. speed, and logging of misretrieved examples for iterative improvement. This structured plan shows clear problem framing, a scalable solution path, technical depth, edge‑case awareness, and a roadmap for optimization—all key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
