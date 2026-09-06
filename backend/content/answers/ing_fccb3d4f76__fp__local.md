---
qid: ing_fccb3d4f76__fp__local
question: 'Explain: An LPU has no HBM at all, just on-die SRAM. Redo the decode roofline
  argument for that machine and tell me what changes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 493
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:08-05:00'
sources: []
---

**Roofline for a LPU with only on‑die SRAM**

| **Fundamental problem** | The processor must sustain a *compute intensity* (operations per byte of data moved) that matches its peak FLOP/s divided by the memory bandwidth it can deliver from on‑die SRAM.  
| **Why it matters** | With no high‑bandwidth memory (HBM), the LPU’s effective bandwidth collapses to the on‑die SRAM access rate, typically an order of magnitude lower than HBM. The roofline therefore tilts steeply: the *memory‑bounded* region starts at a far higher intensity.  
| **Roofline construction** | 1. Compute peak = \(P_{\text{peak}}\) FLOP/s (given). 2. Bandwidth = \(B_{\text{SRAM}}\) Bytes/s from SRAM controller. 3. Roof slope = \( \frac{P_{\text{peak}}}{B_{\text{SRAM}}}\) FLOP/Byte. 4. Plot performance vs. intensity; the horizontal *compute roof* is \(P_{\text{peak}}\), the sloped *memory roof* uses the SRAM bandwidth.  
| **Changes compared to HBM** | • The memory‑roof line moves upward (higher slope). • Algorithms that were compute‑bound with HBM become memory‑bound: an operation requiring 4 bytes per FLOP now sits below the new roof, forcing lower achievable performance unless data reuse is increased.  
| **Non‑obvious insight** | *Data locality becomes a first‑class design constraint.* Because SRAM can only supply ~10–20 GB/s, every kernel must be engineered to fit its working set into SRAM or aggressively stream from higher‑level caches. Even seemingly “compute‑heavy” kernels (e.g., deep‑learning convolutions) may become bandwidth‑bounded if their weight tensors exceed SRAM capacity, revealing that raw FLOP counts are insufficient without a careful analysis of data movement patterns.  

Thus, the roofline for an LPU with only on‑die SRAM is dominated by a much steeper memory slope, forcing algorithm designers to prioritize locality and reuse over sheer arithmetic density.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
