---
qid: vq_eb6e35bcc0__faang__local
question: What is Machine Learning Bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 536
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:04-05:00'
sources: []
---

**Clarify**  
*Question*: “What is machine‑learning bias?”  
Assumptions I’d confirm:  
1. The speaker wants a definition that ties to fairness in AI.  
2. They’re interested in both statistical and societal dimensions.  
3. We’ll focus on supervised learning contexts where training data drives predictions.

**Approach**  
I’ll:  
- Define bias in the ML sense (systematic error).  
- Contrast it with human/social bias.  
- Explain sources (data, algorithm, evaluation).  
- Give a concise example.  
- End with mitigation tactics and trade‑offs.

**Depth**  

> **Machine‑learning bias** is a systematic deviation between the model’s predictions and true outcomes that arises because the training data or learning process fails to represent the target population adequately. It manifests as *disparate impact* on protected groups, even when the algorithm itself is “fair” in isolation.  
> 
> **Sources**  
> 1. *Sampling bias*: over‑/under‑representation of subgroups (e.g., gender imbalance in image datasets).  
> 2. *Labeling bias*: noisy or subjective labels that encode human prejudices.  
> 3. *Algorithmic bias*: optimization objectives that favor accuracy over fairness, or regularizers that ignore group constraints.  
> 4. *Evaluation bias*: metrics that mask disparities (accuracy vs. equalized odds).  
> 
> **Example**: A hiring model trained on past hires will learn to prefer male applicants if the historical dataset contains a gender imbalance.  
> 
> **Mitigation**  
> • Re‑sampling or re‑weighting data.  
> • Fairness constraints (e.g., demographic parity, equalized odds).  
> • Post‑processing calibration per group.  
> • Continual monitoring for drift.

**Edge Cases**  
- Highly imbalanced data where minority signals are drowned out.  
- Non‑stationary environments causing label shift over time.  
- Multi‑task settings where fairness on one task hurts another.

**Optimize & Communicate**  
I’d emphasize that bias is not a property of the algorithm alone but of the entire ML pipeline. Highlight trade‑offs: tighter fairness constraints often reduce overall accuracy; thus, we must balance business objectives with ethical standards and explainability. This structured narrative shows clear problem framing, thoughtful solution design, and awareness of real‑world pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
