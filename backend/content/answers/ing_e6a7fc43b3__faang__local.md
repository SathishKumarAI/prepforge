---
qid: ing_e6a7fc43b3__faang__local
question: Your corpus is multilingual and users query in several languages. What breaks,
  and how do you fix it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 411
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:44-05:00'
sources: []
---

**Clarify**  
You have a multilingual model that receives queries in many languages but the same knowledge base (corpus) is only in one language. We need to understand: *Which languages are used for queries?* *Is the corpus monolingual or partially translated?* *Do we require real‑time translation or can we batch?*  

**Approach**  
1. Detect query language → route to appropriate processing path.  
2. For each language, apply a *cross‑lingual retrieval* pipeline: translate the query into the corpus language (or embed it in a shared multilingual space).  
3. Rank results using the same scoring function as for monolingual queries.  

**Depth**  
- Use a lightweight NLLB/MarianMT model for on‑the‑fly translation; latency ≈ 30–50 ms per 100 tokens, acceptable for interactive systems.  
- Alternatively, embed both query and corpus with XLM‑R or LASER to avoid explicit translation; similarity computed in shared space (O(n) retrieval).  
- Complexity: Translation adds O(L·T) where L = language model size, T = token count. Embedding approach is O(1) per pair after pre‑computing embeddings.  

**Edge Cases**  
- Low‑resource languages → poor translation quality; fallback to embedding or request user clarification.  
- Mixed‑language queries (code‑switching); detect and segment before translation.  
- Ambiguous terms that shift meaning across languages; use context‑aware NMT.  

**Optimize & Communicate**  
Start with the embedding approach for scalability, then add a fine‑tuned translation module for edge cases. Explain to interviewers how we balance latency, accuracy, and maintenance cost while ensuring consistent relevance across languages. This shows clear problem framing, methodical planning, depth in technical choices, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
