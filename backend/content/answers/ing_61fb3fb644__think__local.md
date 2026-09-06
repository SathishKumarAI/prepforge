---
qid: ing_61fb3fb644__think__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 452
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:30:20-05:00'
sources: []
---

**1. Clarify the question & assumptions**

- “SFT” = *Supervised Fine‑Tuning* of a language model.
- “Loss masking” refers to which tokens’ prediction errors are used when computing the loss.
- Assume we’re working with standard next‑token (autoregressive) training on text that contains both a prompt and a target continuation.

**2. Mental model / framework**

Think of the training data as a sequence *P + T* (prompt + target).  
During forward pass the model predicts every token, but during back‑prop we can choose to count only some of those predictions in the loss. Masking is simply setting a binary mask vector that zeroes out undesired positions.

**3. Step‑by‑step reasoning**

1. The objective is to teach the model to generate *T* given *P*.  
2. If we include losses on prompt tokens, the model will be penalized for reproducing what it already saw, which gives no new learning signal.  
3. Moreover, back‑prop through prompt predictions would encourage the model to “memorize” the prompt rather than learn to predict future tokens.  
4. By masking (i.e., setting loss=0) on all prompt positions, we focus gradient updates solely on predicting *T*.  
5. The mask is typically a tensor of shape `(batch_size, seq_len)` with 1s for target tokens and 0s for prompts.

**4. Common traps to avoid**

- Forgetting that the model still needs to see prompt tokens during forward pass; only the loss is masked.
- Masking too aggressively (e.g., also masking special tokens like `<EOS>` if they belong to the target).
- Assuming “masking” means removing those tokens from the sequence – it does not.

**5. Sanity‑check & verbalizing**

- Verify that after masking, the gradient norm comes only from target positions.
- Explain: *“We mask prompt tokens because their predictions are already known; we want gradients to teach the model how to continue from them, not how to reproduce them.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
