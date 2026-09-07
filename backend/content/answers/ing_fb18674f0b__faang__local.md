---
qid: ing_fb18674f0b__faang__local
question: 'Explain: Pattern: Advanced RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 411
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:23:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *Advanced Retrieval‑Augmented Generation (RAG) pattern* and its design patterns in AI.  
Assumptions:  
1. The audience knows basic RAG (retrieval + language model).  
2. We’re discussing production‑ready architectures, not toy demos.  

**Approach**  
1. Define core RAG workflow.  
2. Highlight advanced variants (dynamic indexing, multimodal retrieval, federated sources).  
3. Map each variant to canonical software patterns (Strategy, Observer, Circuit Breaker, etc.).  

**Depth**  
- **Baseline RAG**: vector store → query encoder → nearest‑neighbor search → prompt construction → LLM inference.  
- **Advanced Enhancements**:  
  - *Dynamic Re‑ranking* – Strategy pattern to swap ranking algorithms (BM25 ↔ dense).  
 ‑ *Multimodal Retrieval* – Adapter/Bridge pattern to unify text, image, audio encoders before indexing.  
  - *Federated Sources* – Composite pattern to treat disparate APIs as a single searcher; Circuit Breaker for fault tolerance.  
  - *Feedback Loop* – Observer pattern: user feedback triggers retraining or cache invalidation.  

**Edge Cases**  
- Cold‑start embeddings → fallback to keyword search.  
- Drift in source data → expiration policy (TTL).  
- Latency spikes → bulk‑fetching and pre‑warming caches; test with synthetic load.

**Optimize & Communicate**  
Explain trade‑offs: richer retrieval ≠ higher latency; use sharding + approximate NN for speed, but monitor recall.  
Narrate by walking through a user query from ingestion to LLM output, showing where each pattern plugs in and how it keeps the system modular, testable, and resilient.  

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
