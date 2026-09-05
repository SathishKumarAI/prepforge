---
qid: ing_3bd99025bc__star__local
question: 'Explain: I found a bug, or I want to improve the course'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 317
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:20-05:00'
sources: []
---

**Situation:**  
During my capstone on a reinforcement‑learning model for autonomous drone navigation, I noticed the reward signal was clipping at 0.8 due to an off‑by‑one error in the environment wrapper. The training curves plateaued around 55% success after 30k steps, far below the target 80%.

**Task:**  
I had to identify the bug and refactor the reward calculation so that it correctly reflected the drone’s distance from the goal while keeping the learning stable.

**Action:**  
First I instrumented the wrapper with a debug logger and plotted the raw reward distribution. The logs revealed that the goal‑distance function was using integer division in Python 2 style, truncating decimals. I rewrote the method to use `float()` casting, added unit tests for edge cases, and updated the OpenAI Gym interface. To avoid exploding gradients, I also introduced a soft‑clipping scheme with a tanh layer before feeding rewards into the loss function.

**Result:**  
After deploying the fix, training converged in 18k steps to an 84% success rate on the validation set—an 8% absolute improvement and a 40% reduction in training time. I learned that small numerical quirks can cripple RL performance, so rigorous logging and type‑safe coding are essential in AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
