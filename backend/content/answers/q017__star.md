---
qid: q017
question: "Explain Reinforcement Learning from Human Feedback (RLHF)."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** On an internal assistant project, our fine-tuned model was factually decent but often unhelpful or blunt in tone, and users rated its responses poorly even when they were technically correct.

**Task** I was asked to align the model's outputs with what our users actually preferred, which was hard to capture with a simple loss function.

**Action** I led an RLHF pipeline and explained its three stages to the team. First, we collected human preference data by having annotators rank pairs of model responses from best to worst. Second, we trained a reward model on those rankings to predict which response humans would prefer. Third, we used reinforcement learning, specifically PPO, to optimize the language model to maximize that reward, with a KL penalty so it didn't drift too far from the original model. I owned the annotation guidelines and the reward-model eval.

**Result** Human preference win-rate against the pre-RLHF model rose to 74%, and user satisfaction scores climbed about 25 points. The key insight: RLHF turns fuzzy human preferences into a reward signal you can actually optimize against.
