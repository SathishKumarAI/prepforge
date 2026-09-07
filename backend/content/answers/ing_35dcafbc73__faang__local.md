---
qid: ing_35dcafbc73__faang__local
question: 'Explain: A long-running agent drifts: after two hours it is confidently
  working on the wrong thing. Diagnose and fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 428
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:16-05:00'
sources: []
---

**Clarify**  
You have an autonomous AI that should complete a *target task* (e.g., data‑labeling, recommendation). After ~2 h it starts “working on the wrong thing” while still reporting high confidence.  
Assumptions to confirm:  

1. The agent’s internal state is updated by sensor streams and reward signals only.  
2. No external adversarial input or data poisoning has occurred.  
3. Confidence is derived from a learned soft‑max over action logits.

**Approach**  
1. Log all inputs, policy outputs, and confidence scores for the last 24 h.  
2. Detect drift by comparing recent policy distributions to a baseline (KL‑divergence or MMD).  
3. Identify which feature(s) are causing the shift via SHAP/feature importance on the “wrong” actions.  

**Depth**  
- If KL > threshold, flag drift.  
- Retrain the policy using *replay buffers* that include past correct examples (experience replay).  
- Introduce a *confidence‑calibrated loss* (e.g., focal loss) to penalize overconfident wrong predictions.  
- Add an auxiliary “task‑verification” network that checks if the current state matches the task specification; if mismatch → reset or request human intervention.  

**Edge Cases**  
- Sudden sensor noise → false drift detection.  
- Legitimate policy evolution (exploration) → mis‑labeling as drift.  
- Data distribution shift vs. model overfitting.

**Optimize & Communicate**  
Explain that the solution blends online monitoring (KL drift test), corrective learning (replay + calibrated loss), and safety nets (task verifier). Emphasize real‑time alerts, rollback capability, and continuous evaluation to keep the agent on track without sacrificing exploration. This structured plan showcases problem understanding, algorithmic depth, and pragmatic engineering—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
