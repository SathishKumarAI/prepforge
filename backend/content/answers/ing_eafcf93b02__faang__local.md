---
qid: ing_eafcf93b02__faang__local
question: 'Explain: Compatible with Sourcegraph products — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:03-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain why the *Cody* language‑model feature is “compatible” with Sourcegraph’s ecosystem (code search, navigation, refactoring). Confirm assumptions: we’re speaking of an LLM that can ingest a repo, use Sourcegraph’s indexing API, and return context‑aware completions.

**Approach**  
1. Outline the integration points: source‑graph index → Cody prompt → model → enriched UI.  
2. Show data flow: query → search → snippet extraction → contextual prompt → response → display.  
3. Highlight security & privacy controls.

**Depth**  
- **Index‑based Contextual Retrieval** – Cody uses Sourcegraph’s vector store to pull the top *k* relevant files/snippets (≤ 512 tokens). This guarantees that the model sees only code it can legally expose.  
- **Prompt Engineering** – The prompt template embeds file paths, commit hashes, and a concise description of the developer’s intent (“Add null‑check for `user`”).  
- **Fine‑tuning & Retrieval‑Augmented Generation (RAG)** – A small fine‑tuned model runs on top of GPT‑4o, conditioned on retrieved context. This keeps inference latency < 200 ms and reduces hallucinations.  
- **Security** – All requests go through Sourcegraph’s auth layer; the model never receives raw secrets because the index masks them.  
- **Feedback Loop** – Developers can flag incorrect suggestions; these are fed back to a retraining pipeline that updates the retrieval index.

Complexity: Retrieval O(log N) per query, generation O(T) where T is token count (~512). Memory footprint ~1–2 GB for the vector store.

**Edge Cases**  
- Very large repos → fallback to “search‑first” mode.  
- Mixed languages → language‑specific embeddings.  
- Non‑code assets (docs) → flagged and excluded from context.  
- Offline mode → use cached index snapshot.

**Optimize & Communicate**  
Explain that future work could swap the vector store for a graph‑based semantic search to improve recall, or fine‑tune on repo‑specific patterns for higher precision. Narrate by mapping each component back to Sourcegraph’s core value: *search + context = smarter coding*. This demonstrates structured reasoning, depth in ML engineering, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
