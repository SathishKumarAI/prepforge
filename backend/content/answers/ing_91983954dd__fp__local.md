---
qid: ing_91983954dd__fp__local
question: 'Explain: LLM-based evals (slower, but handles nuance)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 417
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:33-05:00'
sources: []
---

### Why LLM‑based evaluations are slower yet richer

**Fundamental problem:** We want a system that can judge whether a generated text satisfies *all* the hidden desiderata—style, factuality, coherence—without hand‑crafting rules.  
An LLM solves this by **probabilistic inference** over an enormous contextual space: each token is chosen to maximise the joint probability of the entire sequence given its internal knowledge graph.  

1. **Computational cost:**  
   * Every token requires a forward pass through dozens of transformer layers; the cost grows linearly with length and quadratically with the attention window.  
   * In contrast, rule‑based scorers often evaluate in constant time per feature.

2. **Expressivity from geometry:**  
   The hidden state lives in a high‑dimensional manifold where semantic relations are encoded geometrically (e.g., “Paris” is close to “France”). When the LLM evaluates nuance, it implicitly measures distances on this manifold rather than checking discrete conditions—capturing subtle shifts like irony or cultural references.

3. **Probabilistic smoothing:**  
   The model’s softmax output acts as a *distributional* penalty: ambiguous tokens receive lower probability mass, nudging the evaluator to be conservative and thus more nuanced.

**Non‑obvious insight:**  
The evaluation speed is not merely a function of hardware; it is fundamentally limited by the *attention span*. By increasing context length (e.g., via sparse attention or retrieval augmentation), we can reduce per‑token cost while preserving nuance—turning a bottleneck into an opportunity for smarter architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
