---
qid: ing_20e9f03416__faang__local
question: 'Explain: Positional information — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 576
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:01:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep rundown of *positional information*—how language models (LLMs) know the order of tokens. I’ll assume we’re talking about transformer‑based LLMs, not RNNs or CNNs.

**Approach**  
1. Define why position matters.  
2. Show the two classic encoding schemes (sinusoidal & learned).  
3. Explain how they integrate with token embeddings and why that works.  
4. Touch on variants (relative/absolute, rotary, etc.) to demonstrate breadth.

**Depth**  
- **Why order?** Transformers are permutation‑invariant; without a signal, the self‑attention matrix treats all tokens equally.  
- **Absolute sinusoidal encoding** (Vaswani et al., 2017): for position *p* and dimension *i*,  
  \[
  PE_{(p,i)} = 
  \begin{cases}
    \sin(p / 10000^{i/d}) & i\text{ even}\\
    \cos(p / 10000^{i/d}) & i\text{ odd}
  \end{cases}
  \]
  This gives each position a unique vector that can be added to the token embedding. The periodicity allows the model to extrapolate to longer sequences.  
- **Learned absolute encoding**: a separate embedding table indexed by *p*. Simpler, but requires training data for every length seen.  
- **Relative/rotary encodings** (e.g., Rotary Position Embedding): encode relative distances directly into attention scores or key/value projections, improving generalization and reducing memory.  

All schemes are *additive* (or multiplicative) to the token embedding before the first transformer layer, preserving linearity so that downstream layers can learn interactions.

**Edge Cases**  
- Very long sequences: sinusoidal encodings may lose resolution; relative methods help.  
- Zero‑padding positions: must mask attention or set positional vectors to zero to avoid leaking padding info.  
- Pretraining vs fine‑tuning: some models freeze position embeddings to maintain consistency across tasks.

**Optimize & Communicate**  
I’d highlight that sinusoidal encodings trade off a tiny bit of expressive power for the benefit of generalization and no extra parameters, which is why many production LLMs use them. Learned encodings are easier to implement but risk overfitting to seen lengths. Relative schemes offer a middle ground with better extrapolation at modest computational cost. Conclude by noting that the choice depends on deployment constraints (memory, latency) and data distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
