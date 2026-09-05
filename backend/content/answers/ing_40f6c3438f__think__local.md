---
qid: ing_40f6c3438f__think__local
question: 'Explain: Padding side — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 429
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:58:12-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Identify what “padding side” means in sequence‑to‑sequence models (e.g., left‑ or right‑padded tokens).  
   * Assume the user knows Hugging Face Transformers but not the specifics of tokenization/padding in generation.  

**2. Adopt a mental model**  
   * Think of a batch as a matrix: rows = sequences, columns = time steps.  
   * Padding is inserted to make all rows equal length; “side” determines whether the real tokens are shifted left or right.

**3. Step‑by‑step reasoning**  
   1. Explain how tokenizers add special `[PAD]` tokens and why we need a mask (`attention_mask`).  
   2. Show that during training, the model learns to ignore padding via the mask; during generation, the decoder must know where real data starts.  
   3. Describe Hugging Face’s `padding_side='right'` (default) vs `'left'`: how it affects `input_ids`, `attention_mask`, and `decoder_input_ids`.  
   4. Illustrate with a small example: input “Hello world” → token ids, padded right vs left, resulting shapes.  

**4. Common traps to avoid**  
   * Forgetting that the encoder/decoder must use consistent padding sides.  
   * Mixing up `attention_mask` (1 for real tokens) with `decoder_attention_mask`.  
   * Assuming padding has no effect on generation length or beam search.

**5. Sanity‑check & communicate clearly**  
   * Verify that the example’s shapes match typical Hugging Face outputs (`batch_size x seq_len`).  
   * Summarize why left‑padding is useful for certain models (e.g., causal language models) and right‑padding for others (e.g., encoder‑decoder).  
   * End with a quick “remember” bullet: consistent padding side → correct masks → proper generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
