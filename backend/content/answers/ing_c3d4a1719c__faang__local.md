---
qid: ing_c3d4a1719c__faang__local
question: Is Fine-Tuning Always the Answer? — Fine-Tuning Explained for Noobs (How
  Pretrained Models Learn New Skills)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 556
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:25-05:00'
sources: []
---

**Clarify**  
The interviewer wants to know if fine‑tuning is the *only* way to adapt a pretrained model to new tasks. Key assumptions: (1) we have a large, generic foundation model; (2) downstream data may be limited or domain‑specific; (3) computational budgets vary.

**Approach**  
1. List common adaptation techniques.  
2. Contrast when fine‑tuning works best vs alternatives.  
3. Discuss trade‑offs: data, compute, generalization, safety.

**Depth**  

| Technique | How it works | When to use | Complexity |
|-----------|--------------|-------------|------------|
| **Full fine‑tuning** | Update all weights on task data | Sufficient labeled data; tight latency budget | O(N) parameters, high GPU usage |
| **Adapter / LoRA modules** | Insert small trainable layers (or rank‑deficient updates) | Limited compute or multi‑task settings; want to keep base frozen | O(k·N), k≪1 |
| **Prompt tuning** | Keep weights fixed, learn soft prompts | Few data points; inference speed critical | O(P) tokens, negligible GPU |
| **Knowledge distillation** | Train a smaller model to mimic the fine‑tuned one | Deployment on edge devices | Extra training loop, but lightweight inference |
| **Zero‑shot / Retrieval‑augmented** | Use prompting or retrieval instead of weights | Extremely low data; want broad coverage | Minimal compute, relies on external index |

Fine‑tuning is *not* always optimal. If data are scarce or you need to serve many tasks from a single model, prompt or adapter methods preserve the base knowledge and reduce overfitting. For domain‑specific safety constraints, distillation can enforce compliance while keeping inference fast.

**Edge cases**  
- **Catastrophic forgetting**: full fine‑tuning may erase prior skills—use adapters or elastic weight consolidation.  
- **Out‑of‑distribution inputs**: prompting can still leverage the base model’s generality better than a narrowly fine‑tuned one.  
- **Compute limits**: prompt tuning is almost free but may underperform on complex tasks.

**Optimize & communicate**  
Explain that the “best” method depends on data availability, latency, and deployment constraints. Offer a quick decision tree: if you have ≥1M labeled examples → full fine‑tuning; else → adapters or prompting, possibly followed by distillation for edge use. Highlight trade‑offs in a slide‑style summary to keep interviewers engaged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
