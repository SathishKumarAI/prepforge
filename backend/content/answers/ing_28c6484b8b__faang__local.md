---
qid: ing_28c6484b8b__faang__local
question: 'Explain: What does the temperature parameter actually do? Give the formula.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 465
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:19-05:00'
sources: []
---

**Clarify**  
The question asks for a concrete description of the *temperature* hyper‑parameter used in sampling from language models (e.g., GPT). We assume we’re dealing with discrete token probability distributions \(p_i\) produced by the model’s softmax layer and that “temperature” controls randomness of the next-token choice.

**Approach**  
1. Restate the softmax equation.  
2. Show how temperature scales logits before exponentiation.  
3. Explain the effect on the resulting distribution (peaked vs. flat).  

**Depth**  
The temperature‑adjusted probability for token \(i\) is

\[
p_i^{(\tau)}=\frac{\exp\!\left(\dfrac{z_i}{\tau}\right)}
                 {\sum_j \exp\!\left(\dfrac{z_j}{\tau}\right)},
\]

where \(z_i\) are the logits and \(\tau>0\).  
- \(\tau=1\): no change.  
- \(\tau<1\): divides logits → exponentials grow faster → distribution becomes *sharper* (high‑probability tokens dominate).  
- \(\tau>1\): divides logits → exponential growth slows → distribution flattens, increasing diversity and risk of incoherence.

Complexity: \(O(V)\) for vocabulary size \(V\); same as standard softmax. No extra memory beyond the logits.

**Edge Cases**  
*Very small \(\tau\)* (e.g., 0.1) can cause numerical overflow in exponentials; we clamp or use log‑sum‑exp tricks.  
*Very large \(\tau\)* leads to uniform sampling, which may produce nonsense; practitioners set a practical upper bound.

**Optimize & Communicate**  
- Use temperature as a tunable knob during inference to balance creativity vs. factuality.  
- In production, we expose it via an API flag and log its value for reproducibility.  
- When explaining to non‑technical stakeholders: “Temperature is like turning up or down the volume of randomness; lower = more deterministic, higher = more varied.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
