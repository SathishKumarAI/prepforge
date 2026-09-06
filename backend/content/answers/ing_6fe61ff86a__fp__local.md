---
qid: ing_6fe61ff86a__fp__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 448
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:02:05-05:00'
sources: []
---

**Triage of a Wrong RAG Response**

1. **Problem framing**  
   The user’s complaint signals a *semantic drift* between the query and the retrieved evidence—an error in the information‑retrieval (IR) or generation stage. To fix it, we must isolate whether the fault lies in retrieval, ranking, or synthesis.

2. **Evidence audit**  
   - Re‑run the vector search with the original query; compare top‑k vectors to the ones returned in the faulty answer.  
   - Inspect cosine similarities and document metadata for each candidate.  
   - If the relevant documents are missing, it’s a *retrieval* defect (e.g., index drift or embedding mismatch).

3. **Ranking verification**  
   - Re‑rank retrieved docs using an alternate scorer (e.g., BM25 + dense embeddings).  
   - Check if the correct passage moves up; if not, the issue is deeper in retrieval.

4. **Generation check**  
   - Feed the same evidence to a *copy‑paste* baseline (no LLM). If it still misrepresents, the problem lies upstream.  
   - If the copy‑paste answer is correct but the LLM version isn’t, we have a *generation hallucination*: the model over‑generalises or misinterprets context.

5. **Root‑cause insight**  
   The subtle culprit most people miss is **context window truncation**: when the concatenated evidence exceeds the token limit, the LLM may drop earlier passages that contain the correct answer. This is not a hallucination but an *information loss* error.

6. **Remedy & feedback loop**  
   - If retrieval fails, re‑index or refine embeddings.  
   - If ranking fails, adjust fusion strategy.  
   - If generation fails due to truncation, implement sliding windows or hierarchical summarisation before decoding.

By treating the assistant as a pipeline of *information flow*, we systematically isolate errors and correct them—mirroring how an engineer would debug a signal chain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
