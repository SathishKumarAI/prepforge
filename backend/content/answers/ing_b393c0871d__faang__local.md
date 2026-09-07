---
qid: ing_b393c0871d__faang__local
question: 'Q: How do you prevent "Agentic Drift" in long-running tasks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 464
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:33-05:00'
sources: []
---

**Clarify**  
You’re asking how to stop an autonomous agent from deviating (“agentic drift”) while it’s executing a long‑running task (e.g., a robotic process or continuous ML inference). Key assumptions: the agent has a goal hierarchy, state persistence across runs, and some form of self‑monitoring. I’ll confirm that we have access to logs, a feedback loop, and an external supervisor.

**Approach**  
1. **Define clear sub‑goals** with hard constraints.  
2. **Implement watchdog timers & sanity checks** on state transitions.  
3. **Enforce policy‑based rollbacks** when drift is detected.  
4. **Continuous learning from human feedback** to tighten the reward signal.

**Depth**  
- *Goal hierarchy*: Use a hierarchical MDP where high‑level policies delegate to lower‑level controllers, each with bounded horizons.  
- *Sanity checks*: At every decision step, evaluate invariants (e.g., total resource usage ≤ budget). If violated, trigger an interrupt.  
- *Policy rollback*: Maintain a checkpointed policy snapshot; upon drift detection, revert to the last safe policy and log the deviation.  
- *Reward shaping*: Add penalty terms for unexplained state changes or for violating domain constraints.  
Complexity: O(1) per step for checks, with occasional O(N) rollbacks (N = number of checkpoints), negligible compared to task runtime.

**Edge Cases**  
- Sudden environment shifts that invalidate invariants → false positives.  
- Over‑conservative penalties causing under‑performance.  
- Logging failures leading to undetected drift.  
Test by injecting synthetic anomalies and measuring rollback frequency vs. task success.

**Optimize & Communicate**  
Iteratively tighten invariants based on observed drift patterns, reducing false positives while maintaining safety. In interviews, explain how each layer (hierarchy, watchdogs, rollbacks) forms a defense‑in‑depth strategy, and quantify trade‑offs with time/space overhead. This demonstrates structured problem solving, clear communication, and deep technical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
