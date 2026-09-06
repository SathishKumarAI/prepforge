---
qid: ing_e1deb6c207__fp__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 567
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:16-05:00'
sources: []
---

**Choosing between full‑fine‑tuning (FT) and parameter‑efficient fine‑tuning (PEFT)**

| Goal | What it solves | Why the method works |
|------|----------------|---------------------|
| **Maximal task performance** | Adjust every weight to fit a new dataset | The model can represent any function in its hypothesis space; no architectural bias limits learning. |
| **Low‑resource adaptation** | Keep most weights fixed, only tweak a small subset | By anchoring the backbone to a rich pre‑trained prior, we reduce sample complexity and avoid catastrophic forgetting. |

### How to decide

1. **Data budget & overfitting risk**  
   * **FT**: Requires \(O(\text{params})\) samples to estimate gradients reliably. With few examples, variance explodes → overfit.  
   * **PEFT**: Only a handful of parameters (e.g., LoRA rank‑\(r\)) are updated; effective dimensionality shrinks, so even 10 k shots can suffice.

2. **Compute & storage constraints**  
   * **FT**: Needs full‑size checkpoints for every task—impractical in multi‑task or edge settings.  
   * **PEFT**: Store only a delta (often <1 % of the base size), enabling on‑device fine‑tuning.

3. **Task similarity to pre‑training data**  
   * **Highly similar** → PEFT often reaches near‑optimal performance.  
   * **Drastically different** (e.g., vision‑to‑language transfer) → FT may be necessary because the backbone’s inductive biases are insufficient.

4. **Deployment latency & inference cost**  
   * PEFT can introduce a small extra matrix multiplication, but the base model remains unchanged; FT keeps inference identical to pre‑trained.

### Non‑obvious insight

PEFT is not merely “cheaper” – it **regularizes implicitly**. By freezing most weights, we enforce that new knowledge be expressed as a *low‑rank perturbation* of the prior. This aligns with the principle of *information bottleneck*: the model retains only the most relevant features for the task, often leading to better generalization than an unconstrained FT that can drift into over‑parameterized noise.

> **Rule of thumb**:  
> • If you have ≥ 1M labeled samples and compute is cheap → FT.  
> • Otherwise (few shots, many tasks, limited storage) → PEFT with LoRA/Adapter or prompt tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
