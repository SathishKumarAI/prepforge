---
qid: ing_b2b31563e6__fp__local
question: Compare FP8, INT8, and INT4 quantization for LLM inference. How do you decide,
  and how do you validate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 1010
total_tokens: 1197
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:24:00-05:00'
sources: []
---

**From first principles**

A language model is a parametric function \(f_\theta(x)\) that maps token sequences to probability distributions over the next token.  
During inference we evaluate
\[
y = f_\theta(x)=W\,h + b,
\]
where the dominant operations are matrix–vector multiplications with weights \(W\in\mathbb{R}^{m\times n}\).  
Quantization replaces each real weight or activation by a low‑bit integer:
\[
w \;\longrightarrow\; Q(w) = s\,q, \quad q\in\{-2^{b-1},\dots,2^{b-1}-1\},
\]
with scale \(s>0\). The **error** introduced is
\[
e = w - Q(w)=w-sq.
\]
If we treat the weights as i.i.d. samples from a distribution with variance \(\sigma^2\), the quantization error variance for symmetric uniform rounding is
\[
\sigma_e^2=\frac{s^2}{12}\,(2^{b}-1)^2 .
\]
Thus, for fixed \(s\), **doubling the bit‑width halves the error power**.  

*Why FP8 beats INT8 in practice:*  
- FP8 keeps a *floating point exponent*, allowing the same 8 bits to represent values across several orders of magnitude.  
- For LLMs, weights and activations are highly dynamic: some layers have very large norms (attention heads) while others stay close to zero (feed‑forward residuals).  
- With INT8 we must choose a global scale \(s\) per tensor; the tail of the distribution forces us to inflate \(s\), which under‑quantizes the bulk. FP8’s exponent adapts locally, reducing \(\sigma_e^2\) without extra bits.

*Why INT4 is sometimes viable:*  
- If we first *clamp* weights to a tight range (e.g., via weight‑sharing or per‑group scaling), the dynamic range shrinks.  
- Modern training tricks (quantization‑aware training, KL‑divergence minimisation) can shape the distribution so that 4‑bit integers suffice for inference with negligible loss.  
- The cost savings are linear: \(1/2\) the memory and bandwidth of INT8, which matters on GPU/TPU edge devices.

**Decision rule**

| Criterion | FP8 | INT8 | INT4 |
|-----------|-----|------|------|
| **Accuracy tolerance** (≤ 0.5 % loss) | ✔︎ | ✔︎ | ✘ unless fine‑tuned |
| **Hardware support** (tensor cores, BF16 lanes) | ✔︎ on A100/4090 | ✔︎ on many GPUs | ❓ limited |
| **Memory footprint** | 8 bits | 8 bits | 4 bits |
| **Latency** | ~2× faster than FP32 | ~2× faster | ~4× faster |

Pick FP8 if you need the *universal* accuracy–efficiency sweet spot and your accelerator supports it.  
Choose INT8 when hardware is fixed or when you already have a quantized‑aware training pipeline that keeps errors below 1 %.  
Opt for INT4 only in ultra‑tight edge scenarios where a modest drop (≈ 1–2 %) is acceptable and the model has been specially trained for 4‑bit inference.

**Validation**

1. **Per‑layer sensitivity analysis:**  
   Quantise each layer separately, measure perplexity or top‑k accuracy on a held‑out set; rank layers by degradation.  
2. **Calibration dataset:**  
   Use a representative validation set to compute per‑tensor scales that minimise the KL divergence between full‑precision and quantised activations.  
3. **End‑to‑end fine‑tuning (optional):**  
   Run a short training loop with quantisation‑aware loss; monitor validation loss to ensure no catastrophic drift.  
4. **Statistical error budget:**  
   Compute \(\sigma_e^2\) for each layer and compare against the variance of its activations; if \(\sigma_e^2 / \sigma_{\text{act}}^2 < 10^{-3}\), the quantisation is safe.

A non‑obvious insight: **the dominant source of error is not the bit‑width itself but how well the chosen scale aligns with each layer’s distribution**. Even a coarse 4‑bit representation can outperform a poorly scaled 8‑bit one if the per‑layer scales are optimised for that tensor, which is why calibration and per‑group scaling often make the difference between “acceptable” and “unusable” quantisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
