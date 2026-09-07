---
qid: ing_8d13f0f428__faang__local
question: 'Explain: When is fine-tuning the wrong call? Describe failure modes you''d
  warn a team about.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 521
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:12:01-05:00'
sources: []
---

**Clarify**  
Fine‑tuning means taking a pretrained model and continuing training on a downstream dataset. The question is: *When does this approach break*? I’ll assume the team has a large foundation model (e.g., GPT‑4 or CLIP), a labeled target corpus, and wants to deploy for a specific task.

**Approach**  
1. Identify key failure modes (catastrophic forgetting, overfitting, distribution shift, safety).  
2. For each, explain the underlying cause, typical signals, and mitigation steps.

**Depth**

| Failure Mode | Why it happens | Warning signs | Mitigation |
|--------------|----------------|---------------|------------|
| **Catastrophic Forgetting** | The model overwrites knowledge of its pre‑training distribution. | Performance drop on a held‑out “pretrain” proxy set; sudden variance in loss. | Use elastic weight consolidation, replay buffers, or adapters to freeze core weights. |
| **Overfitting to Small Data** | Fine‑tuning with < 1k examples sharpens the model to noise. | Validation loss plateaus early, training loss continues decreasing; high test error. | Employ regularization (dropout, weight decay), data augmentation, or few‑shot prompting instead of full fine‑tune. |
| **Distribution Shift** | Target domain differs drastically (e.g., medical imaging vs. natural images). | Metrics degrade sharply on real‑world samples; model confidence is misleading. | Perform domain adaptation (feature alignment) or train a separate lightweight head. |
| **Safety / Bias Amplification** | The fine‑tune dataset contains biased labels or toxic content. | Emergent harmful outputs post‑deployment; audit logs show skewed predictions. | Curate data, use bias‑mitigation loss terms, and run adversarial testing before release. |

**Edge Cases**  
- Extremely small datasets (< 10 examples): prefer prompt engineering.  
- Models with large parameter counts but limited compute: consider LoRA or prefix tuning.

**Optimize & Communicate**  
Summarize the trade‑offs: full fine‑tuning offers maximal expressivity but risks forgetting; adapters preserve base knowledge at a modest performance cost. Explain that monitoring loss curves, validation on a “pretrain” snapshot, and safety audits are essential checkpoints before production. This structured reasoning aligns with FAANG expectations of clear assumptions, methodical analysis, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
