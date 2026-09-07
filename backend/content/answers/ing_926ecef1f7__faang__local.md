---
qid: ing_926ecef1f7__faang__local
question: 'Design cross-lingual RAG: the knowledge base is in English and Hindi, but
  users ask in Tamil, Telugu, or transliterated Hinglish. How do you retrieve and
  answer correctly?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 538
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:59-05:00'
sources: []
---

**Clarify**  
We need a Retrieval‑Augmented Generation (RAG) system that can serve user queries in Tamil, Telugu, or Hinglish while the knowledge base (KB) contains English and Hindi documents. The goal is to retrieve the most relevant KB passages and generate an answer in the user’s language.  
*Assumptions:*  
- KB is static but large (~millions of passages).  
- We have access to multilingual embeddings and translation APIs.  
- Latency must stay below 500 ms for production.

**Approach**  
1. **Language detection & transliteration handling** – detect script; if Latin with Hinglish, map common romanised tokens to native forms.  
2. **Cross‑lingual embedding conversion** – encode the user query into a shared multilingual space (e.g., MUSE or LASER).  
3. **Retrieval** – index KB passages in the same space; perform approximate nearest neighbour search (FAISS) to fetch top‑k English/Hindi snippets.  
4. **Post‑retrieval translation** – translate retrieved passages into the target language using a fine‑tuned NMT model, optionally back‑translate for quality check.  
5. **Generation** – feed translated context + original query to a multilingual LLM (e.g., mT5) and request an answer in the user’s language.

**Depth**  
- Embedding dimensionality 512; FAISS index with IVF+PQ gives O(log N) search, ~30 ms.  
- Transliteration mapping uses a lookup + contextual spell‑checker to reduce noise.  
- NMT inference cost is amortized because we translate only top‑k snippets (~5).  
- LLM generation latency ~200 ms on GPU; total pipeline <500 ms.

**Edge Cases**  
- Ambiguous transliterations (e.g., “ka” could be “का” or “क”). → use language model confidence.  
- Rare words not in KB vocabulary → fallback to retrieval‑only answer with a note.  
- Mixed code‑switching queries → split tokens by script before embedding.

**Optimize & Communicate**  
We can cache frequent query embeddings and translations, batch NMT calls, and monitor error rates per language pair. In production, I’d present a diagram of the pipeline, report latency percentiles, and highlight that cross‑lingual embeddings obviate the need for full bilingual KBs, making the system scalable to new languages with minimal engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
