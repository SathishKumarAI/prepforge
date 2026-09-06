---
qid: ing_18eea53170__think__local
question: 'Explain: How do you evaluate agents? Compare trajectory-based and outcome-based
  approaches.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 431
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:22:39-05:00'
sources: []
---

**Thinking Process for Answering “How do you evaluate agents? Compare trajectory‑based and outcome‑based approaches.”**

1. **Clarify the scope & assumptions**  
   - Assume we’re talking about *intelligent agents* in RL or decision‑making systems.  
   - Define “evaluate” as measuring performance against a task or objective, not just debugging.  
   - Note that trajectory‑based metrics look at *how* an agent acts over time; outcome‑based metrics look at *what* it achieves.

2. **Choose a mental model**  
   - Use the *agent–environment interaction loop*: state → action → next state, reward.  
   - Map evaluation to two axes: *process* (trajectory) and *result* (outcome).  
   - Think of each approach as a different cut through this loop.

3. **Step‑by‑step reasoning**  
   - List common trajectory metrics (e.g., cumulative reward, episode length, state visitation frequency).  
   - Explain how they capture behavior patterns, exploration/exploitation trade‑offs, and safety constraints.  
   - Contrast with outcome metrics (success rate, final score, task completion time).  
   - Discuss when each is useful: early training diagnostics vs. deployment benchmarks.

4. **Avoid common traps**  
   - Don’t conflate high cumulative reward with “good” outcomes; a policy could chase rewards poorly.  
   - Beware of over‑optimizing trajectory metrics that lead to brittle or unsafe behavior.  
   - Remember that outcome metrics can hide suboptimal intermediate behavior that may matter for safety.

5. **Sanity‑check & communicate**  
   - Verify that each metric logically follows from the agent–environment loop.  
   - Use concrete examples (e.g., a navigation robot: trajectory = path smoothness; outcome = arrival time).  
   - End with a concise comparison table and highlight trade‑offs, so the answer is clear and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
