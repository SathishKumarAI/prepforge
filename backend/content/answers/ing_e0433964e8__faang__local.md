---
qid: ing_e0433964e8__faang__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 492
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:20:48-05:00'
sources: []
---

**Clarify**  
The problem: a large language model (LLM) returns responses that ignore the search results provided by an external retriever and instead relies on its internal knowledge base. I’ll assume we have a hybrid retrieval‑augmented generation pipeline where the LLM receives the query plus a set of retrieved documents, but it still generates text without referencing them.

**Approach**  
1. Verify data flow: ensure that the search results are actually fed to the LLM (e.g., as a prompt prefix or key/value).  
2. Inspect tokenization and prompt format—LLM might treat the docs as background noise if not clearly highlighted.  
3. Add explicit “source” markers or a structured prompt template (`<search>…</search>`).  
4. If using a fine‑tuned model, re‑train with retrieval‑augmented supervision (e.g., use Retrieval-Augmented Generation loss).  
5. Test by measuring the overlap between generated text and search documents.

**Depth**  
- **Prompt Engineering**: prepend “Relevant sources below:” followed by `<<doc1>>…<<doc2>>` so the model learns to cite them.  
- **Retrieval‑Augmented Loss**: during fine‑tuning, penalize generation that diverges from the retrieved context (e.g., use a cross‑entropy loss over the retrieved token span).  
- **Model Architecture**: if using an encoder–decoder LLM, feed the search results into the encoder side; for decoder‑only models, concatenate them to the prompt.  
- Complexity: O(L) where L is combined length of query + docs; fine‑tuning adds ~O(N*L).  

**Edge Cases**  
- Extremely long docs → truncate or chunk.  
- Ambiguous queries leading to low‑quality hits → fallback to internal knowledge.  
- Mismatched tokenization (e.g., special tokens) causing the model to skip docs.

**Optimize & Communicate**  
Iterate on prompt templates, monitor “source coverage” metric, and adjust loss weighting until the LLM consistently references search results. I’d explain this pipeline to stakeholders as a two‑step system: retrieval → prompt conditioning → generation, with end‑to‑end evaluation to ensure alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
