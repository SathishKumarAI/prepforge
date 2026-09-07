---
qid: ing_576dad563d__faang__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 420
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:05-05:00'
sources: []
---

**Clarify**

> “Build or extend an evaluation set with synthetic data.”  
> • Goal: enrich test coverage for a model (e.g., NLU) while keeping real‑world relevance.  
> • Assumptions to confirm: target domain, label granularity, acceptable bias budget, and downstream usage of the eval set.

**Approach**

1. **Define coverage gaps** from current eval statistics (class imbalance, edge cases).  
2. **Generate synthetic samples** that target those gaps using a controllable generator (e.g., GPT‑style fine‑tuned on domain data or rule‑based templates).  
3. **Label via human‑in‑the‑loop or high‑confidence model inference**, ensuring minimal noise.  
4. **Blend** synthetic and real examples proportionally, preserving the original distribution.

**Depth**

- Use *conditional generation* (prompt engineering + fine‑tuning) to maintain style/semantics.  
- Apply *adversarial augmentation*: perturb key tokens while keeping labels intact.  
- Complexity: O(N·T) where N is synthetic size and T inference time; acceptable for moderate sets.  
- Trade‑offs: higher recall of rare cases vs. risk of overfitting to generator artifacts.

**Edge Cases**

- *Distribution shift*: synthetic samples may not reflect true user language, hurting generalization.  
- *Label noise*: generators can hallucinate labels—needs rigorous validation.  
- *Bias amplification*: if training data is biased, synthetic data will mirror and possibly magnify it.

**Optimize & Communicate**

Explain that we’ll iteratively evaluate model performance on a held‑out real set to detect degradation, then prune or re‑generate offending samples. Emphasize continuous monitoring of label quality metrics (e.g., BLEU for text, confusion matrix drift). This narrative showcases structured reasoning, technical depth, and awareness of failure modes—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
