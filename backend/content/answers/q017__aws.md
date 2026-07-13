---
qid: q017
question: "Explain Reinforcement Learning from Human Feedback (RLHF)."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain RLHF as the three-stage process that aligns an LLM with human preferences. First, supervised fine-tuning on high-quality demonstrations. Second, collect human rankings of multiple model outputs and train a reward model to predict which response people prefer. Third, use reinforcement learning, typically PPO, to optimize the LLM against that reward model, so it generates outputs humans rate higher, while a KL penalty keeps it from drifting too far from the base model.

To show **Dive Deep** and **Learn and Be Curious** I'd connect it to preference work I did on a smaller scale: rather than full RLHF, I used preference data to build an eval and reward-style scoring that ranked candidate responses, which let us pick better outputs and measurably improved human preference win-rate by about 15 points without a full RL loop.

The trade-offs I'd name: human labeling is expensive and can encode annotator bias; the reward model can be gamed, producing verbose or sycophantic outputs; and RL training is unstable. That's why lighter alternatives like DPO now trade some flexibility for stability and simplicity. On AWS I'd manage data and training with SageMaker and Ground Truth for human labeling.

A bar-raiser listens for whether I understand each stage's role, the reward-hacking and bias failure modes, and can reason about when a simpler preference method suffices.
