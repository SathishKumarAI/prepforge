---
qid: ing_fdcbbee547__think__local
question: Why do transformer training recipes use learning-rate warmup, and what does
  the rest of the schedule look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 570
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:45:56-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - *What* is meant by “training recipes” (e.g., BERT, GPT‑3)?  
   - Assume a typical large‑scale transformer trained with Adam/AdamW on GPUs/TPUs.  
   - Recognize that “warmup” refers to gradually increasing the learning rate from zero to a target value.

**2. Mental model / framework**  
   - View training as an optimization process over a non‑convex loss surface.  
   - Warmup mitigates the risk of large gradients at initialization, especially with layer‑norm and residual connections that can amplify updates.  
   - After warmup, the schedule usually follows either a *linear decay*, a *cosine annealing* (with or without restarts), or a *plateau‑based* schedule.

**3. Step‑by‑step reasoning**  
   1. **Why warmup?** At initialization weights are random; gradients can be huge and destabilise training. Gradually increasing LR gives the optimizer time to adjust momentum terms (Adam’s moving averages).  
   2. **Typical warmup duration:** 1–5 % of total steps (e.g., 10k–30k steps for a 3‑million‑step run).  
   3. **Post‑warmup schedule:**  
      - *Linear decay:* \( \eta_t = \eta_{\max} \times (1 - t/T) \).  
      - *Cosine annealing:* \( \eta_t = \eta_{\min} + \frac{1}{2}(\eta_{\max}-\eta_{\min})(1+\cos(\pi t/T)) \).  
   4. **Optional restarts** (SGDR) or **plateau‑based reductions** after validation loss plateaus.

**4. Common traps to avoid**  
   - Forgetting that Adam’s bias‑correction terms also need a warmup period.  
   - Using too short a warmup, leading to gradient explosions.  
   - Mixing schedules (e.g., linear decay followed by cosine) without clear rationale.

**5. Sanity‑check & verbalise**  
   - Plot LR vs. step count; ensure it starts near zero, rises smoothly, then follows the chosen decay curve.  
   - Check that training loss behaves steadily during warmup and doesn’t diverge.  
   - Explain: “We use warmup to tame early gradients; afterward we slowly reduce LR—often linearly or with a cosine schedule—to allow fine‑grained convergence.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
