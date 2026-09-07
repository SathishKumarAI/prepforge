---
qid: ing_7c78c738b2__faang__local
question: 'Explain: Top- k k OPD. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 508
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:30-05:00'
sources: []
---

**Clarify**  
The question asks to explain *Top‑k k‑OPD* in the context of “Rethinking On‑Policy Distillation of Large Language Models.”  
- **What is OPD?** On‑Policy Distillation: a teacher model generates policy samples (e.g., token logits) that a student learns from while staying on the same distribution.  
- **Top‑k k‑OPD** refers to selecting only the top‑k most probable tokens per step and using a “k‑fold” variant of OPD where we aggregate multiple such top‑k subsets across policy rollouts.

Assumptions: (1) We have access to teacher logits, (2) we can compute top‑k selections efficiently, (3) the student model uses cross‑entropy with these distilled targets.

**Approach**  
1. For each decoding step, gather teacher’s softmax probabilities.  
2. Keep only the *k* tokens with highest probability; zero out the rest.  
3. Normalize the remaining logits to form a new distribution (the “k‑OPD target”).  
4. Train the student by minimizing KL divergence between its own logits and this target across multiple rollouts, effectively sampling from the teacher’s on‑policy distribution.

**Depth**  
- *Complexity*: O(batch × seq_len × k) for top‑k extraction; negligible compared to forward passes.  
- *Trade‑offs*: Larger k preserves more information but increases computational cost and may dilute the student’s focus; smaller k sharpens learning but risks missing important modes.

**Edge Cases**  
- If k ≥ vocabulary size, OPD reduces to vanilla distillation.  
- When teacher assigns equal probability to many tokens, top‑k may be unstable—use temperature scaling or tie‑breaking heuristics.  
- Very small k can cause student overfitting to a narrow subset of actions.

**Optimize & Communicate**  
To improve efficiency, cache the top‑k indices across rollouts and use sparse tensors for the distilled distribution. In an interview, I’d narrate this as: “We prune the teacher’s output to its most informative tokens (top‑k), then repeatedly expose the student to these distilled policies—hence ‘k‑fold OPD.’ This balances fidelity and speed while keeping the student on the same distribution as the teacher.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
