---
qid: ing_44a5cb0337__star__local
question: What is the difference between a kill switch and a circuit breaker for an
  agent, and why do you need both?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 317
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:15-05:00'
sources: []
---

**Situation:**  
At my previous company we were deploying a reinforcement‑learning bot to manage real‑time bidding for ads. The model’s reward signal was noisy and occasionally drove the agent to submit bids that exceeded our budget by orders of magnitude.

**Task:**  
I had to ensure two things: (1) the bot never breached financial limits, and (2) it could still explore new strategies safely while learning from failures.

**Action:**  
First, I implemented a *kill switch*—a global flag in the control plane that instantly halts all bidding traffic when an anomaly threshold is crossed. It’s triggered by a watchdog service monitoring budget spend and latency spikes; once activated, the agent stops sending requests for 30 seconds. Second, inside the agent itself I added a *circuit breaker* pattern: after three consecutive policy updates that result in negative reward or rule violations, the local circuit trips and temporarily suspends learning from that branch of the policy network. This keeps the agent’s internal state healthy while still allowing it to resume once the issue resolves.

**Result:**  
The kill switch prevented a $12 M budget blow‑out during a test run, and the circuit breaker reduced policy drift by 67%, keeping performance within ±5% of target ROAS over six weeks. I learned that external hard stops guard against catastrophic failures, while internal circuit breakers maintain learning stability without sacrificing agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
