---
qid: ing_4c5f97e014__fp__local
question: 'Explain: NF4 (NormalFloat4) — Quantization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 581
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:47:28-05:00'
sources: []
---

### NF4 (NormalFloat4): A 4‑bit “float” for neural nets

**The problem it solves**  
Modern transformers use 16‑ or 32‑bit floats, yet a single inference can involve billions of parameters. Reducing precision to **4 bits per weight/value** cuts memory and bandwidth by ~8× while keeping the *distribution* of activations close enough that accuracy loss is negligible.

**Why a “normal” float?**  
A conventional IEEE‑754 float packs sign, exponent, mantissa. NF4 inverts this: it keeps a **fixed 3‑bit exponent (including sign)** and a **1‑bit significand**. The exponent encodes *scale* for a group of values (e.g., per‑token or per‑layer), while the single bit says whether the value is “large” or “small.” This matches the observation that neural activations are highly *log‑normal*: most are near zero, with a heavy tail. By letting the exponent capture the log‑scale and the significand encode sign/size, NF4 preserves relative magnitudes better than naïve 4‑bit integers.

**Mathematical justification**  
Let \(x = s \cdot 2^{e}\) where \(s\in\{+1,-1\}\) and \(e\in[-3,\dots,3]\). The quantizer maps any real value to the nearest pair \((s,e)\), minimizing
\[
\min_{s,e} |x - s\,2^e|.
\]
Because the exponent range is logarithmic, the *relative* error stays bounded: \( |x-\hat{x}|/|x|\le 1-2^{-3}\approx0.875\). Yet for small magnitudes the absolute error shrinks to machine precision in that bucket. This hybrid log‑linear scheme is optimal under a **piecewise‑linear reconstruction cost** and preserves *entropy*—the distribution of exponents matches the data’s entropy, maximizing information retention.

**Non‑obvious insight**  
Most quantizers treat all bits equally (uniform or learned). NF4 exploits that neural nets are *scale‑invariant*: multiplying all weights by a constant only changes loss linearly. Thus we can afford a coarse exponent per tensor and a single sign bit per value. The real gain comes from **exponent sharing**: grouping many activations under one scale reduces variance in the reconstruction error, enabling higher effective precision without extra bits.

In practice, NF4 achieves ~3–4 % top‑1 accuracy drop on ImageNet while cutting memory by 8×, making it a sweet spot for edge inference and large‑scale model compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
