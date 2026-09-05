---
qid: ing_0d26b1f96d__fp__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 532
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:49-05:00'
sources: []
---

When a model learns to predict the next token, it implicitly learns a **probability distribution over that token set**.  
Adding new tokens is not just “more vocabulary”; it changes the *support* of the distribution and rewrites the mapping from words to indices.

### What can go wrong?

| Problem | Why it breaks things |
|---------|----------------------|
| **Out‑of‑vocabulary (OOV) collapse** | Tokens that were once represented by a single index now split into sub‑tokens. The model’s learned embedding for the old index no longer exists, so any OOV word becomes *unknown* again. |
| **Distribution shift** | The probability mass previously assigned to a frequent jargon term is redistributed among its new sub‑tokens. Fine‑tuned weights that relied on that mass become misaligned. |
| **Embedding misalignment** | New tokens get random embeddings; the model will treat them as unrelated, even though they’re semantic continuations of existing words. |

### Correct handling

1. **Pre‑tokenizer alignment**  
   * Build a new tokenizer with the added sub‑words.  
   * Map every old token to its new sequence: `old_token → [sub₁,…,subₙ]`.  

2. **Embedding inheritance**  
   * For each new token, initialize its embedding as the average (or weighted sum) of the embeddings of the constituent old tokens. This preserves semantic continuity.

3. **Re‑index mapping**  
   * Keep a *stable* index for every original token that appears in training data; only append indices for truly new sub‑tokens.  
   * Update the model’s embedding matrix: prepend inherited vectors, then extend with random vectors for new entries.

4. **Loss re‑weighting**  
   * If the tokenizer splits a single word into multiple tokens, adjust the loss so that each original word still contributes one gradient step (e.g., by summing logits over its sub‑tokens before computing cross‑entropy).

### Non‑obvious insight

The subtlety is that **tokenization is a reversible transformation** only if you preserve the mapping. By inheriting embeddings and keeping old indices, you maintain the *same probability mass* on the original vocabulary while allowing the model to learn finer granularity. If you let the tokenizer rewrite indices wholesale, you’re essentially training a brand‑new language model with no knowledge of the prior distribution—a costly reset that defeats fine‑tuning’s purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
