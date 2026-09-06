---
qid: ing_6a1c185a69__fp__local
question: 'Explain: Architecture Decision Tree — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 389
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:38-05:00'
sources: []
---

**Why an “Architecture Decision Tree” is needed**

When building an AI system the first question is *what does the model have to do?*  
This determines the loss landscape, data distribution and inference budget.  
Once that problem space is mapped, the only viable models are those whose inductive biases match it—otherwise training will collapse or latency will explode.

**From problem to pattern**

1. **Data geometry → Representation pattern**  
   - *Dense, independent features* → MLPs (fully‑connected).  
   - *Local correlations* → CNNs.  
   - *Sequential dependencies* → RNN/Transformer.  

2. **Scale & distribution → Parallelism pattern**  
   - *Small data, few epochs* → single‑GPU fine‑tuning.  
   - *Massive corpora, low per‑sample cost* → Distributed data‑parallel training (e.g., Megatron‑BERT).  

3. **Inference constraints → Deployment pattern**  
   - *Real‑time edge* → Quantized models + knowledge distillation.  
   - *Batch cloud* → Model servers with autoscaling.

These patterns form a tree: each branch is a decision that narrows the feasible architectures, pruning away suboptimal choices early.

**Deep insight**

Most people treat pattern selection as a checklist; the real lever is *matching the loss surface to the architecture’s inductive bias*.  
If you align the geometry of your data with the model’s structure (e.g., using attention for long‑range dependencies), the optimization landscape becomes smoother, gradients propagate better, and training converges faster—often more than any hyperparameter tweak can achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
