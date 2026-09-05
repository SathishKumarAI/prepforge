---
qid: ing_74f6c28a15__eli5__local
question: 'Explain: Why are math and code so RL-friendly? Explain verifiable rewards
  and the R1-style training recipe.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 284
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:22-05:00'
sources: []
---

Imagine you’re teaching a robot to play chess by giving it a score after every move: +1 for a good move, –1 for a bad one. The game’s rules are fixed, so the robot can always check whether its score is right—no guessing about how the world will change.

**Math and code fit this style perfectly.**  
- **Mathematics** gives you clear, exact formulas; once you plug in numbers, the answer is known.  
- **Code** runs on a computer that follows deterministic instructions; every line produces the same output if the inputs are the same.

Because both give *verifiable rewards*—you can double‑check whether the reward should be +1 or –1—you can let an algorithm explore many possibilities, learn from mistakes, and keep improving without doubt about its learning signal.

The **R1 training recipe** is like a simple “reward‑first” loop:  
1. Run the code (or solve the math problem).  
2. Compute the exact reward.  
3. Adjust the parameters that produced it so future runs get closer to the best reward.

This straightforward cycle works because the reward is always clear, making reinforcement learning (RL) both efficient and reliable in these domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
