---
qid: ing_501841fb18__faang__local
question: 'Explain: RAG Fundamentals. — AI Daddy \u00b7 Learn AI System Design and
  Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 481
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:39-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) Fundamentals**

| Step | What it does | Why it matters |
|------|--------------|----------------|
| **1️⃣ Retrieval** | Query a large document store (vector DB or keyword index) with the user prompt → fetch top‑k relevant passages. | Provides up‑to‑date, domain‑specific knowledge that a frozen model can’t remember. |
| **2️⃣ Augmentation** | Concatenate or embed retrieved snippets into the generation context. | Keeps the prompt length manageable while giving the language model concrete facts to use. |
| **3️⃣ Generation** | Feed augmented prompt to a generative LM → produce answer. | Leverages powerful reasoning/fluency of LLMs while grounding output in real data. |

### Key Design Points
- **Indexing**: Use dense embeddings (e.g., Sentence‑BERT) for semantic recall; optionally hybrid with sparse TF‑IDF for exact matching.
- **Retrieval latency**: Cache popular queries, use FAISS or Milvus for sub‑millisecond nearest‑neighbor lookups.
- **Context size**: Trim retrieved docs to fit the model’s token budget; rank by relevance + novelty.
- **Safety & hallucination**: Add a verification step—cross‑check facts against multiple sources before final answer.

### Trade‑offs
| Aspect | Speed | Accuracy |
|--------|-------|----------|
| Dense retrieval | Fast, but can miss exact matches | Good semantic recall |
| Sparse retrieval | Slower, but precise keyword hits | Exact facts |

### Edge Cases to Test
- No relevant docs → fallback to LLM alone or “I don’t know”.
- Conflicting passages → conflict resolution logic (majority vote, source credibility).
- Extremely long prompts → chunking and iterative refinement.

### Optimizations
- **Pre‑fetch** top‑k for common prefixes.
- **Cache embeddings** of static documents.
- **Parallel retrieval + generation** pipelines to hide latency.

> **Bottom line:** RAG blends the best of retrieval systems (precision, freshness) with LLMs (flexibility, fluency). Mastering its trade‑offs and edge cases is key for any AI system design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
