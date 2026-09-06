---
qid: ing_df42d1a8b2__fp__local
question: 'Q: Why is the LoRA alpha parameter usually set to 2x the rank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 563
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:33-05:00'
sources: []
---

**Why LoRA sets \(\alpha\approx 2\,r\)**  

LoRA rewrites a frozen weight matrix \(W_0\in\mathbb{R}^{d\times d}\) as  
\(W=W_0+\frac{\alpha}{r}AB^\top\), where \(A,B\in\mathbb{R}^{d\times r}\).  
The goal is to keep the *magnitude* of the update comparable to that of \(W_0\) so that gradients see a well‑scaled problem and training remains stable.

1. **Spectral‑norm preservation** – For random Gaussian \(A,B\), \(\|AB^\top\|\approx r\,\sigma_A\sigma_B\).  
   Setting the prefactor to \(\alpha/r\) makes \(\|W-W_0\|\approx \alpha\,\sigma_A\sigma_B\).  
   Empirically, \(\sigma_A,\sigma_B\approx 1/\sqrt{d}\), so \(\|W-W_0\|\sim \alpha/d\).

2. **Matching the pretrained scale** – The original weight has Frobenius norm \(\|W_0\|\sim d\).  
   To make \(\|W-W_0\|\) a constant fraction of \(\|W_0\|\), we need \(\alpha/d\approx c\), i.e. \(\alpha\propto r\).

3. **Optimization dynamics** – With \(\alpha=2r\), the low‑rank term contributes about twice as much to the gradient norm as a single column of \(W_0\).  
   This yields a learning rate that is neither too small (slow adaptation) nor too large (oscillation).

**Non‑obvious insight:**  
The factor 2 isn’t arbitrary; it balances *rank* and *magnitude*. As \(r\) grows, the update space expands but each direction becomes weaker. Doubling \(\alpha\) compensates for this dilution, keeping the effective step size per rank‑unit constant across different \(r\). Thus LoRA’s “2× rank” rule is a principled scaling that preserves spectral norm and stabilizes training regardless of how many low‑rank factors we add.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
