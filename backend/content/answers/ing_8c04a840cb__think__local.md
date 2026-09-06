---
qid: ing_8c04a840cb__think__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 607
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:19:46-05:00'
sources: []
---

**Metacognitive Blueprint for Explaining In‑Context Learning**

1. **Clarify the Question & State Assumptions**  
   - The user asks *why* a frozen model can “learn” from a prompt.  
   - Assume: (a) weights are fixed, (b) we’re dealing with transformer‑based LMs, (c) the prompt is treated as additional context tokens.

2. **Choose a Mental Model**  
   - Think of the model as a *conditional density estimator*: it predicts next token given all previous tokens.  
   - In‑context examples are just extra tokens that bias this conditional distribution through attention and positional embeddings.

3. **Reason Step‑by‑Step**  
   1. **Tokenization & Embedding** – every word/character becomes a vector; the prompt’s vectors enter the same pipeline as any other text.  
   2. **Self‑Attention Conditioning** – each layer computes queries, keys, values for all tokens; attention weights are influenced by similarity between query (current token) and key (all prior tokens).  
   3. **Contextual Reweighting** – the prompt’s “instruction” or example pairs create high‑similarity patterns that steer attention toward desired outputs.  
   4. **Implicit Parameter Adaptation** – although weights don’t change, the *activations* shift because the prompt acts as a small dataset; the network behaves as if its parameters were fine‑tuned to those examples.  
   5. **Output Biasing** – logits for next token are pulled toward tokens that fit the context pattern, yielding the “learning” effect.

4. **Common Traps to Avoid**  
   - *Assuming weight updates* (confuse with fine‑tuning).  
   - Ignoring positional embeddings—without them the prompt would be meaningless.  
   - Overlooking that only the *attention pattern* changes, not the model’s learned weights.

5. **Sanity Check & Communicate**  
   - Test mentally: give a few example pairs in a prompt; see how attention aligns to answer tokens.  
   - Explain clearly: “The model isn’t changing its knowledge; it’s re‑using the same parameters but reshaping internal activations so that the prompt conditions the next‑token distribution.”  

Using this framework, you can confidently articulate why frozen weights still allow a language model to perform in‑context learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
