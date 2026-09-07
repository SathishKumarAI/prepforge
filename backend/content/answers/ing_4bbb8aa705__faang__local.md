---
qid: ing_4bbb8aa705__faang__local
question: How can an attacker poison training data or plant a backdoor in a model,
  and how would you catch it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 541
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:24-05:00'
sources: []
---

**Clarify**  
We’re asked how adversaries can *poison* training data or *plant backdoors* in a machine‑learning model, and what detection strategies we’d use. I’ll assume supervised learning on a labeled dataset (e.g., image classification), that the attacker has write access to the training pipeline, and that we have no ground truth labels during training.

**Approach**  
1. Enumerate attack vectors: data injection, label flipping, feature‑space manipulation, poisoned samples with malicious triggers.  
2. Outline detection mechanisms: statistical anomaly checks, outlier removal, trigger‑based testing, model introspection (e.g., weight distribution), and differential privacy audits.  

**Depth**  
- *Poisoning*: An attacker injects a small fraction \(p\) of mislabeled or adversarially crafted samples so the loss surface is subtly skewed. For example, in image nets they may label benign images as “cat” but embed a tiny pattern that causes misclassification only when present.  
- *Backdoor*: The model learns to associate a trigger (e.g., a 3×3 pixel patch) with a target class. During inference, the trigger flips predictions while leaving clean inputs unchanged.  
Detection:  
1. **Statistical outlier detection** – compute per‑sample gradients or loss; flagged samples with unusually high norms suggest poisoning.  
2. **Trigger testing** – systematically insert candidate patterns (e.g., all 8‑bit masks) and measure model confidence; a spike indicates a backdoor.  
3. **Model explainability** – use saliency maps to confirm that the trigger region drives predictions.  
4. **Robust training protocols** – robust loss functions (e.g., TRADES, RANSAC) reduce influence of poisoned points.

**Edge cases**  
- Extremely low‑rate poisoning may evade gradient thresholds.  
- Adaptive attackers can hide triggers in high‑frequency noise or use *label‐free* backdoors that only activate under rare input combinations.  
Testing: run synthetic poison injections and confirm detection metrics (precision/recall).

**Optimize & communicate**  
We’d layer defenses: a pre‑training audit pipeline plus runtime trigger monitoring, each with clear thresholds. I’d explain the trade‑off between false positives (discarding clean data) and missed attacks, and suggest periodic re‑evaluation as model drift occurs. This structured plan showcases problem framing, technical depth, and practical mitigation—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
