---
qid: ing_54e5f60e93__faang__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 461
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:24-05:00'
sources: []
---

**Clarify**  
You’re asking why neural nets “forget” a task they barely see during training and what that means for continual learning. I’ll assume we’re dealing with supervised or reinforcement learning where the model is fine‑tuned on a stream of tasks, each represented by a small dataset.

**Approach**  
1. Define catastrophic forgetting (CF).  
2. Explain why rare tasks are vulnerable: data imbalance & weight updates.  
3. Mention mitigation techniques: replay, regularization, dynamic architectures.  

**Depth**  
- **CF** occurs when gradients from new samples overwrite representations that encoded the old task. Rare tasks provide few gradients, so their signal is drowned by frequent ones.  
- *Replay*: store a small buffer of exemplars or generate synthetic data to interleave during training; mitigates drift but incurs storage/compute overhead.  
- *Regularization* (EWC, SI): penalize changes to weights important for past tasks; requires estimating Fisher information or importance scores—scales poorly with many tasks.  
- *Dynamic architectures*: grow new neurons/heads per task; preserves old knowledge but can lead to parameter blow‑up.  
- *Parameter isolation + meta‑learning*: learn a “core” set of parameters that adapt quickly to new, rare data without affecting the core.

**Edge cases**  
- Extremely imbalanced streams → replay buffer may never contain enough rare samples.  
- Tasks with overlapping feature spaces → regularization may still cause drift if importance scores are inaccurate.  
- Non‑stationary environments where task distribution shifts abruptly can break assumptions of all methods.

**Optimize & communicate**  
I’d prioritize a hybrid: small episodic memory + lightweight regularizer (e.g., SI) for low‑resource settings, while scaling to larger systems with generative replay. I’d explain the trade‑offs in a diagram, quantify expected forgetting via test accuracy over time, and iterate on buffer size or regularization weight based on validation curves. This showcases structured thinking, depth of knowledge, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
