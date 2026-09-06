---
qid: ing_c68b9b961f__fp__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 495
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:03:43-05:00'
sources: []
---

### From First Principles

A language model learns a **probability distribution** \(P_{\theta}(x)\) over token sequences by minimizing cross‑entropy on vast corpora.  
When we want the model to behave well in a *specific* setting, we must reshape this distribution without destroying its generality.

| Phase | What happens | Why it works |
|-------|--------------|--------------|
| **Continued pretraining (CPT)** | The same objective (next‑token likelihood) is run on a *domain‑specific* corpus. | CPT nudges the parameters \(\theta\) toward regions of parameter space that assign higher probability to domain tokens, effectively *fine‑tuning the prior*. It preserves the model’s general language skills because the loss remains the same. |
| **Supervised fine‑tuning (SFT)** | A *task‑specific* objective (e.g., classification or generation with a reward) is optimized on labeled data. | SFT reshapes \(P_{\theta}\) to match a target distribution that may differ from natural language statistics. It can overwrite generic knowledge if the task signal dominates. |

**When do we need domain‑knowledge injection?**

- **If the domain vocabulary or syntax diverges sharply** (e.g., medical jargon, legalese), CPT is essential to bring those tokens into the model’s internal representation before any SFT.
- **If the downstream task requires factual consistency** (e.g., question answering in a niche field), injecting curated knowledge—either via CPT on curated corpora or through *retrieval‑augmented* prompts—prevents hallucination and aligns the model with authoritative sources.
- **When data scarcity is an issue**, domain injection via CPT gives the model a richer prior, reducing overfitting during SFT.

**Non‑obvious insight:**  
CPT and SFT are not separate stages but two points on a *continual‑learning manifold*. The optimal strategy is to perform a *small* CPT (a few epochs) followed by a *task‑specific* SFT with a carefully calibrated learning rate. This hybrid schedule keeps the model’s entropy high enough to generalize, yet biases it toward the domain—avoiding the “catastrophic forgetting” that pure SFT can cause.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
