---
qid: ing_d6a2639b85__fp__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 497
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:27-05:00'
sources: []
---

**Label bias** emerges when a language model’s internal representation of class labels is disproportionately shaped by the *order* and *frequency* of those labels in an in‑context prompt, rather than by the semantic content of the examples themselves.

---

### From the core problem to the bias

In‑context learning (ICL) lets a model infer a task from a handful of labeled demonstrations. Formally we sample a set  
\[
D=\{(x_i,y_i)\}_{i=1}^k
\]
and ask the model to predict \(y_{k+1}\) for a new input \(x_{k+1}\). The model’s probability is  
\(P(y|x,D)=\sigma(\mathbf{w}_D^\top \phi(x))\), where \(\mathbf{w}_D\) is implicitly learned from the prompt.  

If the labels in \(D\) are presented as “A, B, C…” with uneven spacing or repeated patterns, the attention mechanism assigns more weight to the *token positions* of those labels than to their semantic embeddings. Consequently, \(\mathbf{w}_D\) becomes a function of label placement: the model learns to copy the *last seen* label or prefers labels that appear earlier in the prompt.

---

### Deeper principle

This is an instance of **information bottleneck** applied to discrete tokens: the model compresses the high‑dimensional input into a small set of “context cues.” When cue capacity is limited, it resorts to low‑cost heuristics—here, positional bias over semantic similarity. The phenomenon parallels *order effects* in human cognition where earlier items are recalled more easily.

---

### Non‑obvious insight

Most practitioners attribute poor ICL performance solely to insufficient examples. However, **label bias can dominate even with perfectly representative data**: if a prompt repeats the same label multiple times (e.g., “Yes Yes No”), the model will *over‑prioritize* that label regardless of input features. Mitigation requires controlling not just example quantity but also *label distribution and ordering*, for instance by randomizing label positions or inserting neutral tokens between labels. This subtle engineering can dramatically shift the implicit weighting from positional to semantic, restoring true generalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
