---
qid: ing_80a54e3d27__faang__local
question: 'Explain: Position Encodings — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 591
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:07-05:00'
sources: []
---

**Clarify**  
You’re asking how large‑language models (LLMs) inject positional information into token sequences so the transformer can respect order. I’ll assume we’re talking about standard *positional encodings* used in GPT/Transformer‑XL style architectures and that you want a concise technical explanation, not code.

---

### Approach
1. **Define the problem** – Transformers lack inherent sequence awareness; tokens are processed in parallel.  
2. **Show the solution** – Add a positional vector to each token embedding before feeding it into self‑attention.  
3. **Explain implementation variants** – sinusoidal vs learned embeddings, and why we add them element‑wise.

---

### Depth
- **Sinusoidal encoding (Vaswani et al., 2017)**: For position *p* and dimension *i*,  
  \[
  PE_{(p,i)} = 
  \begin{cases}
    \sin(p / 10000^{i/d_{\text{model}}}) & i\ \text{even}\\
    \cos(p / 10000^{(i-1)/d_{\text{model}}}) & i\ \text{odd}
  \end{cases}
  \]
  This produces a smooth, continuous representation that allows extrapolation to longer sequences (the model can infer relative positions from the frequency patterns).

- **Learned positional embeddings**: Treat positions as trainable vectors \(P_p \in \mathbb{R}^{d_{\text{model}}}\). Simpler and often more accurate for fixed‑length corpora, but cannot extrapolate beyond trained max length.

- **Addition vs concatenation**: We add the encoding to the token embedding (element‑wise), preserving dimensionality and allowing the attention mechanism to learn relative differences naturally. Concatenation would double dimensions and require redesigning layers.

- **Complexity**: O(1) per position; negligible overhead compared to self‑attention’s \(O(L^2 d_{\text{model}})\).

---

### Edge Cases
- **Very long sequences**: Sinusoidal encodings extrapolate, learned embeddings saturate.  
- **Variable batch sizes**: Need broadcasting or padding of positional tensors.  
- **Zero‑padding tokens**: Should not receive positional bias; typically masked in attention.

---

### Optimize & Communicate
To improve efficiency on GPU/TPU, precompute sinusoidal tables once and reuse across batches. If memory is tight, generate positions on‑the‑fly using a lightweight kernel. I’d explain that while learned embeddings offer slight accuracy gains for fixed vocabularies, sinusoidal encodings give the model flexibility—a trade‑off worth discussing with the team.

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
