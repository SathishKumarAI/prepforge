---
qid: ing_5eb5dde552__eli5__local
question: Compare SFT, RLHF, DPO, and RLVR for improving an instruction-tuned model.
  What data does each need, and when would you pick which?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 382
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:33-05:00'
sources: []
---

Think of a robot learning to play chess from four different coaches.

**SFT (Supervised Fine‑Tuning)** is the “rulebook coach.” It gives the robot many example moves and their correct answers, so it memorises how good players move.  
*Data needed:* pairs of a board position and the best move.  
*When to use:* early training when you want the model to learn basic, safe behaviour.

**RLHF (Reinforcement Learning from Human Feedback)** is the “tournament coach.” After the robot plays a game, humans rate its play as good or bad, and the robot learns to maximise that rating.  
*Data needed:* human evaluations of whole sequences.  
*When to use:* once you have a decent baseline and want the model to improve on real preferences.

**DPO (Direct Preference Optimization)** is the “speed‑training coach.” It directly compares two moves chosen by the robot, keeps the one humans prefer, and discards the other.  
*Data needed:* pairwise human comparisons of choices.  
*When to use:* when you want fast, stable improvements without a full reward model.

**RLVR (Reinforcement Learning with Value‑Rationality)** is the “coach who knows why.” It learns a value function that tells how good each move is and uses it to guide learning, balancing exploration and safety.  
*Data needed:* scores or rankings for many moves plus a baseline of safe play.  
*When to use:* when you need both performance gains and reliable safety guarantees.

So: start with SFT for basics, switch to RLHF or DPO for preference‑driven polish, and consider RLVR when safety and explainability are paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
