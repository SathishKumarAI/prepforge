---
qid: ing_f83b8315ad__fp__local
question: 'Q: How do you prevent "Infinite Loops" where agents keep talking to each
  other without solving the task?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 463
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:28-05:00'
sources: []
---

**Why infinite loops happen**

At a microscopic level an agent’s policy is just a function  
\(f_\theta : s \mapsto a\) that maps the current state \(s\) (including
the last utterance) to an action \(a\) (an utterance or a termination
signal).  If the reward structure rewards *any* continuation—say
“keep talking” gives a small positive payoff—then the agent can keep
cycling through states without ever reaching a goal.  The policy has no
gradient that pushes it toward completion; the objective is flat in
the direction of “finish”.

**How to make the policy collapse into a solution**

1. **Explicit termination reward** – assign a large positive reward for
   actions that satisfy the task and a negative penalty for each extra
   utterance.  The Bellman equation then forces the value function to
   grow only when the terminal state is reached.

2. **Information‑theoretic regularisation** – penalise mutual
   information between successive messages:
   \[
   L = -\mathbb{E}[R] + \lambda\, I(a_t;a_{t-1}).
   \]
   High \(I\) means the agent is simply echoing; a low value pushes it to
   produce *informative* utterances that reduce uncertainty about the
   goal.

3. **Curriculum on dialogue length** – gradually increase the maximum
   allowed turns, so early training teaches the agent that long
   conversations are costly before exposing it to longer horizons.

**Non‑obvious insight**

Most systems only penalise *length*; they ignore *redundancy*.  Two
utterances can be short yet useless if they convey no new information.
By explicitly regularising mutual information, we ensure the agent
learns to compress the dialogue into a succinct plan rather than just
shortening it. This bridges the gap between optimisation (reward
maximisation) and geometry (information compression), giving a principled
way to break infinite loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
