---
qid: ing_b820151fcf__faang__local
question: 'Explain: A customer wants an assistant over their internal knowledge base
  and asks whether to fine-tune. Prompting, RAG, or fine-tuning - walk through the
  decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 565
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:29-05:00'
sources: []
---

**Clarify**  
We’re asked whether a client should fine‑tune an LLM on their internal docs, use prompting, or Retrieval‑Augmented Generation (RAG). Key assumptions:  
1) The knowledge base is proprietary and likely contains many niche terms.  
2) Latency constraints are moderate (e.g., < 200 ms per query).  
3) The user volume is high enough that model costs matter but not so huge that storage becomes prohibitive.

**Approach**  
Evaluate each strategy on 1) relevance, 2) cost/latency, and 3) maintenance.  

| Strategy | Relevance | Cost & Latency | Maintenance |
|----------|-----------|----------------|-------------|
| Fine‑tuning | High (model internalizes style & jargon) | High compute upfront; inference cheap | Requires periodic re‑train on updates |
| Prompting (chain‑of‑thought, few‑shot) | Medium (depends on prompt quality) | Low cost; fast | Minimal effort |
| RAG | Very high (retrieves exact passages) | Moderate compute per query; can cache embeddings | Need to index & update docs |

**Depth**  
- **Fine‑tuning**: Use a base model like Llama‑2‑7B, fine‑tune on QA pairs derived from the KB. Pros: answers are coherent and self‑contained. Cons: if the KB changes often, re‑training is costly; risk of overfitting to stale data.  
- **Prompting**: Provide a concise system prompt plus dynamic context snippets (e.g., last 3 sentences). Works well for short queries but struggles with long‑form explanations or rare terminology.  
- **RAG**: Index the KB with embeddings, then at inference embed the user query and retrieve top‑k passages. Feed those into the LLM as context. Gives precise grounding, handles updates instantly, and keeps token usage low.

**Edge Cases**  
- Extremely large KB → embedding index may exceed memory; consider hierarchical retrieval or chunking.  
- Highly confidential data → fine‑tuning might risk model leakage; RAG can keep raw text offline.  
- Real‑time policy changes → only RAG ensures up‑to‑date answers.

**Optimize & Communicate**  
Recommend a hybrid: start with RAG for accuracy and low maintenance, then evaluate performance. If latency or cost become critical, consider fine‑tuning the retrieval‑augmented model (e.g., train a lightweight adapter). Explain to stakeholders that RAG gives the best trade‑off now, while fine‑tuning can be revisited once usage patterns are clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
