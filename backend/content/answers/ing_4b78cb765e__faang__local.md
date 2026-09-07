---
qid: ing_4b78cb765e__faang__local
question: 'Explain: Decoder-Only (Most LLMs Today) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 514
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:50-05:00'
sources: []
---

**Decoder‑Only LLMs – Inside the Architecture**  
*Meta/Google style interview response*

---

### 1️⃣ Clarify  
You’re asking how today’s large language models (LLMs) that only use a decoder stack work internally, and what makes them “decoder‑only.” I’ll assume:  

- The model is trained autoregressively on next‑token prediction.  
- We’re focusing on the transformer block layout, attention mechanism, and training objective.  

---

### 2️⃣ Approach  
1. Describe the *transformer decoder* architecture.  
2. Explain masked self‑attention and why it’s key to decoding.  
3. Outline tokenization, positional encoding, and the output head.  
4. Touch on pretraining loss and fine‑tuning tricks.

---

### 3️⃣ Depth  
- **Architecture**: Each layer has *masked multi‑head self‑attention* → residual + LayerNorm → position‑wise feed‑forward (FFN) → residual + LayerNorm.  
- **Masked Attention**: For token *i*, the attention mask blocks all positions > *i*. This guarantees that predictions depend only on past tokens, enabling autoregressive generation.  
- **Positional Encoding**: Learned or sinusoidal embeddings added to input token embeddings to provide order information.  
- **Output Head**: A linear projection (weight tied with embedding) + softmax over the vocabulary gives next‑token probabilities.  
- **Training Objective**: Minimize cross‑entropy loss on the true next token at every position, summed across tokens and batches.  

---

### 4️⃣ Edge Cases  
- **Very long contexts** → memory blowup; solutions: sparse attention or linearized self‑attention.  
- **Tokenization mismatches** (e.g., subword boundaries) can distort learned semantics.  
- **Training instability** if residual scaling is off; careful initialization helps.

---

### 5️⃣ Optimize & Communicate  
- *Efficiency*: replace dense softmax with sampled softmax or adaptive vocab to reduce O(V).  
- *Parallelism*: pipeline and model parallelism across layers for > 10B params.  
- When explaining, I’d narrate the flow from raw text → token embeddings → stacked masked attention → FFN → logits, emphasizing how each component preserves causality while capturing long‑range dependencies.  

*Word count: ~200 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
