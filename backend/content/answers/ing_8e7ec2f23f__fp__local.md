---
qid: ing_8e7ec2f23f__fp__local
question: 'Explain: Cfg1 Block — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 469
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:04-05:00'
sources: []
---

**Why the “Cfg1” block appears in an annotated ResNet‑50**

The core of a residual network is to learn *increments* to an identity mapping.  
Let \(x\) be the input feature map and \(F(x)\) the function a conventional CNN would
have to approximate.  In practice, learning \(F(x)=0\) (the identity)
is far easier than learning arbitrary large transformations.  
Therefore ResNet introduces

\[
y = x + F(x;\theta),
\]

where \(F\) is implemented as two \(3\times3\) convolutions plus batch‑norm
and ReLU, and the *shortcut* (identity or a \(1\times1\) projection when channel counts change) simply adds \(x\).

The **Cfg1 block** in the annotated guide exemplifies this idea.  
It contains:

| Layer | Purpose |
|-------|---------|
| Conv‑3×3 → BN → ReLU | first non‑linear feature extractor |
| Conv‑3×3 → BN      | second linear map that will be added to the shortcut |
| Add                | element‑wise summation of shortcut and residual |
| ReLU               | final activation after the addition |

Why this specific order?  
Adding before the last ReLU preserves gradient flow: if the residual
output is zero, the backward signal still passes through the identity branch.  
If we reversed it (ReLU → Add), dying neurons could block gradients.

**Non‑obvious insight:**  
The *projection shortcut* (when dimensions change) can be omitted for the **first** block of a stage because the input already matches the output shape.  Skipping the projection saves parameters and computation without harming representational power, as the residual branch can compensate.  Many implementations add a useless \(1\times1\) conv in that position—an easy optimisation to catch.

In short, Cfg1 is a textbook residual unit: it demonstrates how a minimal “add‑after‑conv” structure solves vanishing gradients and simplifies training while keeping the network expressive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
