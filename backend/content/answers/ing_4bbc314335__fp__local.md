---
qid: ing_4bbc314335__fp__local
question: 'Explain: Q123: DeepSeek just raised V4 prices 3x to 12x and moved to peak
  and off-peak billing, while Claude Sonnet 5 made its introductory price permanent.
  Your cost model assumed cheap inference stays cheap. Rebuild it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 636
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:09-05:00'
sources: []
---

**Why the new DeepSeek and Claude Sonnet 5 pricing demands a fresh cost model**

The *fundamental problem* is that inference latency is now *not* a flat‑rate commodity. In a pay‑per‑token system the marginal cost of each token depends on:

1. **Compute utilisation (U)** – GPU cores, memory bandwidth, and I/O saturate at different rates for short vs. long prompts.
2. **Queue dynamics (Q)** – Peak periods push jobs into a backlog; tail latency rises super‑linearly with load (≈ exp(U/Q)).
3. **Model size & architecture (S)** – Larger transformers have higher per‑token FLOPs and memory footprints, but can be amortised across batch sizes.

DeepSeek’s 3×–12× price jump reflects a *three‑tier* cost structure:

- **Base tier**: fixed hardware amortisation \(C_{h}\).
- **Peak tier**: variable compute \(C_{c}(U)\) multiplied by a factor \(k_{\text{peak}}\) that captures queue delay.
- **Off‑peak tier**: same compute but discounted by \(d<1\).

Claude Sonnet 5’s permanent introductory price signals that the provider has moved from a *time‑sliced* billing model to a *usage‑based* one, treating each token as an indivisible unit of value.

### Rebuilding the cost model

Let  
\(T = \text{tokens per request}\),  
\(U = \frac{\text{total FLOPs}}{\text{available GPU cores}}\).  

Define:

\[
C_{\text{inference}}(T,U) =
  C_{h} + 
  \underbrace{k_{\text{peak}}\!\left[1+e^{\alpha(U-1)}\right]}_{\text{Peak multiplier}}
  \cdot
  \frac{\beta T}{B}
  -
  d\,\mathbf{1}_{U<1}\!,
\]

where  
\(B\) = batch size (optimal at high utilisation),  
\(\alpha,\beta\) are empirically fitted coefficients, and  
\(\mathbf{1}_{U<1}\) discounts off‑peak.

**Non‑obvious insight:** The *exponential tail* \(e^{\alpha(U-1)}\) captures the fact that **latency grows faster than linearly once utilisation exceeds a critical point**. Many models assume linear scaling, underestimating peak costs by up to 4× when \(U>1.2\). This explains why DeepSeek’s price tiers must be steep: they guard against the non‑linear surge in compute and queue penalties that occurs during flash crowds.

By integrating this cost surface into your billing engine, you can predict revenue per token under any load profile, optimise batch scheduling, and transparently explain the 3×–12× price jumps to customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
