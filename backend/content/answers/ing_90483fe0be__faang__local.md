---
qid: ing_90483fe0be__faang__local
question: 'Explain: Key hyperparameters — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 735
total_tokens: 968
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:55-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *key hyper‑parameters* that govern **fine‑tuning** and **alignment** of large language models, and why they matter. I’ll assume we’re dealing with transformer‑based LLMs (e.g., GPT‑4) and that the audience knows basic training concepts.

---

### 1️⃣ Approach  
- Identify the *core knobs* in each phase:  
  - **Fine‑tuning**: learning rate, batch size, number of epochs, weight decay, gradient clipping.  
  - **Alignment**: reward model temperature, KL penalty coefficient, sampling strategy (top‑k/temperature), and RL‑HF hyper‑parameters.  
- Explain *how* each knob shapes the learned policy or output distribution.
- Mention trade‑offs (stability vs speed, overfitting vs under‑learning).

---

### 2️⃣ Depth  

| Phase | Hyper‑parameter | Effect | Typical Ranges |
|-------|-----------------|--------|----------------|
| **Fine‑tuning** | `lr` | Controls step size; too high → divergence, too low → slow convergence. | 1e-5 – 3e-4 (for adapters) |
| | `batch_size` | Determines gradient estimate noise; larger → smoother updates but higher memory. | 8–64 tokens per GPU |
| | `epochs` | Over‑training risk vs data coverage. | 2–10 for domain adaptation |
| | `weight_decay` | Regularizes weights, prevents overfitting. | 0.01 – 0.1 |
| | `grad_clip_norm` | Caps exploding gradients. | 1–5 |
| **Alignment** | `temperature` (reward model) | Sharpens preference distribution; low → deterministic. | 0.7–1.3 |
| | `KL_penalty` | Keeps policy close to base LLM, avoids catastrophic drift. | 0.01 – 0.1 |
| | `top_k / top_p` | Controls diversity of sampled outputs during RL‑HF rollouts. | k=40, p=0.9 |
| | `policy_lr` (RL) | Balances exploration vs exploitation. | 1e-5 – 3e-4 |

*Complexity*: Fine‑tuning is O(#steps × model_size); alignment adds an inner RL loop but remains linear in the number of rollouts.

---

### 3️⃣ Edge Cases  
- **Very low lr** → model never adapts.  
- **High KL penalty** → policy becomes stuck at pre‑fine‑tuned behavior.  
- **Large batch size on limited GPU** → OOM, forcing gradient accumulation (slow).  

Testing: run sanity checks with synthetic data; monitor loss curves for oscillations or plateaus.

---

### 4️⃣ Optimize & Communicate  
- Use *learning‑rate schedules* (cosine decay) to adaptively reduce lr.  
- Apply *gradient checkpointing* to push batch size higher without OOM.  
- For alignment, tune KL penalty via a small validation set of human preferences to avoid over‑regularization.

In interviews, I’d emphasize that mastering these knobs is less about memorizing numbers and more about understanding the *signal–noise trade‑off* they control: fine‑tuning sharpens the model’s knowledge; alignment shapes its behavior within safety constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
