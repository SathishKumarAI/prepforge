---
qid: ing_26fb187e53__fp__local
question: Why do LLMs famously miscount the number of r's in "strawberry"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 485
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:03-05:00'
sources: []
---

### Why a Large Language Model (LLM) gets the r‑count wrong in “strawberry”

The *problem* is that an LLM must predict each next symbol **without explicit bookkeeping**.  
Its objective during training is to minimize cross‑entropy:

\[
L(\theta)= - \sum_{t}\log p_\theta(x_t|x_{<t}),
\]

so the model learns a probability distribution over tokens conditioned on past context, never an exact counter.

1. **Token granularity** – Modern LLMs split text into subword units (e.g., byte‑pair or unigram vocab).  
   “strawberry” is tokenised as *stra*, *w* , *berr* , *y*.  
   The two r’s are buried inside the third token (*berr*), so the model only sees a single subtoken that contains both, not individual characters.

2. **Training bias** – During training the loss for each character is diluted over its token.  
   The gradient that pushes the model to distinguish “two r’s” versus “one r” is weak; the model instead optimises overall perplexity on huge corpora where the exact count of a single letter rarely matters.

3. **Contextual inference** – When asked “How many r’s are in strawberry?”, the model must *hallucinate* a numeric answer from its learned language patterns, not from any counting mechanism.  
   The most frequent pattern it has seen is that words ending with *-berry* contain two r’s, so it defaults to 2 even when the tokenisation collapses them.

**Non‑obvious insight:** The error arises not from a lack of logic but from *information loss in tokenisation*. A single subtoken can encode multiple letters; once they’re merged, the model never learns that those letters are distinct. To count correctly would require an auxiliary architecture that tracks character positions—something LLMs deliberately avoid to keep training efficient.

In short, the LLM’s miscount is a direct consequence of its probabilistic, token‑based design, not a failure of reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
