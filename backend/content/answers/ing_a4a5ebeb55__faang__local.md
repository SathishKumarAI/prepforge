---
qid: ing_a4a5ebeb55__faang__local
question: 'Explain: Failure Mode #1: Retrieval Without a Context Budget'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 506
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:04-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the first failure mode in retrieval‑augmented generation (RAG): *Retrieval without a context budget*. The key assumption is that a language model (LM) can be fed arbitrary amounts of retrieved text, and we want to understand why this breaks down. I’ll confirm that the retrieval system returns a set of documents or passages, and the LM concatenates them into its prompt.

**Approach**  
1. Define what “context budget” means for an LM.  
2. Show how ignoring it leads to token overflow.  
3. Explain downstream effects (attention saturation, hallucination).  
4. Summarize mitigation strategies.

**Depth**  

| Issue | Why it matters |
|-------|----------------|
| **Token limit** | Modern LMs (e.g., GPT‑4) have a hard prompt length (~8 k–32 k tokens). If retrieval returns more, the LM must truncate or the request fails. |
| **Attention saturation** | Attention is O(n²); too many context tokens cause quadratic blow‑up in memory and latency, making inference impractical. |
| **Dilution of relevance** | With a huge prompt, the model’s attention weights spread thin across unrelated passages, reducing the signal for the target answer. |
| **Hallucination risk** | The LM may “fill in” gaps when it cannot attend to all retrieved evidence, generating fabricated facts. |

*Mitigation*: Use a *context budget*—a pre‑defined token cap (e.g., 2 k tokens). Retrieval systems rank and prune results so the total fits this cap; optionally employ hierarchical retrieval or chunking with embeddings.

**Edge Cases**  
- Extremely short answers still need enough context → dynamic budgeting.  
- Retrieval returns highly repetitive passages → budget wasted on redundancy.  
- Tokenization variance (e.g., subword units) can cause misestimates of the budget.

**Optimize & Communicate**  
I’d suggest a two‑stage pipeline: first, embed queries to filter top‑k documents; second, apply a token‑budget aware scorer that selects passages maximizing relevance while respecting the cap. This keeps inference tractable and preserves answer quality. I would conclude by noting that ignoring the context budget is a classic “resource exhaustion” failure—simple to detect (token count > model limit) but costly in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
