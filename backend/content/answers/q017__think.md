---
qid: q017
question: "Explain Reinforcement Learning from Human Feedback (RLHF)."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** This is a hard question, so structure beats rambling — signal you'll give the three-stage pipeline, then limitations. Assume they want the *why* (alignment) framing it.
2. **Mental model.** Goal: align an LLM with **human preferences**. The trick is turning fuzzy "which answer is better?" judgments into a **learnable reward signal**, then optimizing against it.
3. **Reason step by step.** Stage 1 — **SFT**: fine-tune the base model on curated demonstration data. Stage 2 — **reward model**: humans *rank* multiple outputs per prompt; train a model to predict human preference as a scalar reward. Stage 3 — **RL optimization**: optimize the policy (LLM) to maximize that reward, usually with **PPO**, plus a **KL-divergence penalty** against the SFT model so it can't drift and "game" the reward.
4. **Traps to avoid.** Don't say RLHF is training on unlabeled text or quantization, or that humans hand-write every inference-time response — distractors. Don't omit the **KL penalty**; without it you get reward hacking.
5. **Sanity-check + delivery.** Check that all three stages are present and the reward model precedes the RL step. Note limits (reward hacking, labeling cost, reward-model bias) and the newer alternative **DPO**, which skips the explicit reward model. Deliver: "align a model via a human-preference reward model optimized with RL (e.g., PPO)."
