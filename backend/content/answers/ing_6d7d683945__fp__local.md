---
qid: ing_6d7d683945__fp__local
question: 'Explain: Instruction-Tuned Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 382
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:57:05-05:00'
sources: []
---

**Instruction‑tuned embeddings** are vector representations that have been *re‑optimized* so that the direction of each vector encodes how a model should respond to a *specific instruction*.  

1. **Fundamental problem** – In vanilla language models, a token’s embedding is learned purely from next‑token prediction. The resulting space captures syntactic and semantic regularities but says nothing about “how to act” when prompted.  
2. **Why it must work this way** – An instruction can be viewed as a constraint on the probability distribution over outputs: *given input \(x\) and instruction \(i\), produce output \(y\)*. To satisfy many such constraints efficiently, we need a representation that linearly separates “instruction‑compatible” from “incompatible” contexts.  
3. **Deeper principle** – This is an instance of **linear projection in high‑dimensional geometry**: the instruction vector \(\mathbf{i}\) defines a hyperplane; embeddings \(\mathbf{e}(x)\) are projected onto it, and the dot product \(\mathbf{i}\!\cdot\!\mathbf{e}(x)\) becomes a score for compliance. The training objective pushes compliant pairs to high similarity while pushing others apart—effectively performing **contrastive optimization** in a shared vector space.  
4. **Non‑obvious insight** – Because the instruction vectors are learned jointly with token embeddings, *the same embedding can encode multiple “modes” of behavior*. A single word may lie on different sides of different instruction hyperplanes, allowing one model to act as a multi‑task system without explicit branching. This shared geometry is why instruction tuning scales: new instructions merely add new directions in the existing space rather than training fresh parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
