---
qid: ing_af98a58ba4__fp__local
question: 'Explain: Storage — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 394
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:44-05:00'
sources: []
---

**Back‑of‑the‑Envelope Storage Estimation for Machine Learning Systems**

When designing a machine‑learning pipeline, the first question is *how much disk space will we need?*  
The answer follows from the **data–model complexity triangle**:  
1. **Input data size (D)** – raw features, images, logs, etc.  
2. **Model parameter count (P)** – each weight needs a byte‑ish representation; deep nets can reach billions of parameters.  
3. **Intermediate artefacts (I)** – training checkpoints, sharded tensors, feature maps.

A minimal estimate is  

\[
S_{\min} \approx D + P\times b + I
\]

where *b* ≈ 4–8 bytes per weight (float32/float64).  
Because **model size grows linearly** with the number of layers and width, any increase in expressiveness immediately inflates storage. Moreover, **checkpointing every epoch** multiplies by the number of epochs *E*:  

\[
S_{\text{check}} \approx E \times (P\times b)
\]

A non‑obvious insight: **data augmentation does not linearly inflate storage** if performed on‑the‑fly; only pre‑computed augmentations add to *D*. Thus, the dominant term is often checkpoints unless you store intermediate feature maps for later use.  

Finally, remember that *storage* is a proxy for *bandwidth*: larger *S* means slower I/O, which can become the bottleneck before compute. A simple back‑of‑the‑envelope estimate therefore guards against both disk exhaustion and hidden performance regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
