---
qid: ing_b22c638cb0__faang__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 572
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:09-05:00'
sources: []
---

**Clarify**  
We’re deciding when to *fine‑tune* a Vision–Language Model (VLM) versus relying on prompt engineering, and which parts of the network to unfreeze. Key assumptions:  

1. **Task specificity** – is it a new downstream task or a domain shift?  
2. **Data volume** – how many labeled image‑text pairs are available?  
3. **Latency & resource constraints** – can we afford extra inference cost?  
4. **Performance targets** – required accuracy, precision/recall trade‑offs.

---

**Approach**  
1. **Baseline evaluation**: run the VLM with zero‑shot prompting on a held‑out validation set.  
2. **If performance is below target**, consider fine‑tuning.  
3. **Determine which layers to unfreeze** based on the signal that matters most for your task (e.g., visual encoder vs. language decoder).  

---

**Depth**  
- *Fine‑tune* when you have ≥ 5k–10k labeled pairs or a domain (medical, legal) where prompt alone can’t capture nuances.  
- **Unfreeze strategy**:  
  - **Visual backbone** – last 1–2 transformer blocks or the final convolutional layers; preserves low‑level feature extraction while adapting high‑level semantics.  
  - **Cross‑modal projector** – freeze early layers, fine‑tune the fusion layer that maps visual features to language tokens.  
  - **Language decoder** – usually kept frozen unless you need domain‑specific vocabulary; if so, unfreeze only the top few transformer blocks.  
- Use *layer‑wise learning rates* (lower for frozen layers) and *gradient clipping* to stabilize training.

---

**Edge cases**  
- Tiny datasets → overfitting; use LoRA or adapters instead of full fine‑tuning.  
- Highly similar prompts to baseline → no gain from fine‑tuning.  
- Latency constraints: fine‑tuned models may be larger; consider distillation afterward.

---

**Optimize & communicate**  
1. **Report ablation**: show performance vs. number of unfrozen layers.  
2. **Explain trade‑offs**: e.g., “Unfreezing the last visual block gives +3 % mAP but adds 0.5 × GPU memory.”  
3. **Iterate**: start with a small fine‑tune (e.g., 1 epoch) to gauge gains before full training.  

This structured reasoning keeps the interviewers aligned on assumptions, plan, technical choices, and practical constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
