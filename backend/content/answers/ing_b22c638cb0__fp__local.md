---
qid: ing_b22c638cb0__fp__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 412
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:53-05:00'
sources: []
---

Fine‑tuning a vision‑language model (VLM) is not a binary “prompt or train” decision; it is a *budgeted adaptation* problem.  
The VLM’s pre‑trained weights encode a joint distribution \(P(\text{image},\text{text})\) that captures generic multimodal correlations.  When you want the model to specialize to a new task \(T\), you must decide whether the existing distribution is already close enough or if you need to reshape it.  

**Criterion:**

1. **Data‑efficiency** – If you have >10 k labeled pairs for \(T\) and the loss surface is smooth, fine‑tuning will reduce variance more than prompting can.  
2. **Task shift** – For domain shifts (medical imaging, satellite imagery), the low‑level visual features change; you must unfreeze early convolutional layers.  
3. **Output fidelity** – If \(T\) requires precise generation (e.g., captioning with domain‑specific terminology), fine‑tuning the language head gives higher token‑wise accuracy than a prompt that relies on zero‑shot inference.

**What to unfreeze?**  
- *Vision encoder*: early layers for new visual statistics; middle layers for moderate shifts.  
- *Cross‑modal attention*: if you need richer interaction between image and text embeddings.  
- *Language decoder head*: always fine‑tune the output projection to match target vocab distribution.

**Non‑obvious insight:**  
Even when prompting works, a tiny “adapter” (e.g., a 2‑layer MLP added after the cross‑modal attention) can capture task‑specific biases with <1 % extra parameters. This hybrid strategy preserves the universal knowledge while allowing rapid specialization—often outperforming both full fine‑tuning and pure prompting on low‑resource tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
