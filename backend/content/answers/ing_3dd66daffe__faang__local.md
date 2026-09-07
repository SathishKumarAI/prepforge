---
qid: ing_3dd66daffe__faang__local
question: 'Explain: Agent Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 470
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:50-05:00'
sources: []
---

**Clarify**  
The interview asks me to explain *Agent Patterns* in the context of AI systems. I’ll assume they mean common architectural or behavioral templates that AI agents follow—e.g., reactive, deliberative, hybrid, and hierarchical patterns—and how these help structure perception–action loops. I’d confirm whether they want a high‑level design overview or code‑centric details.

**Approach**  
1. Define an “agent” (perceives environment → decides actions).  
2. Enumerate core patterns: reactive, deliberative, hybrid, hierarchical.  
3. For each, describe typical components (sensors, planners, effectors) and flow.  
4. Highlight trade‑offs (latency vs. optimality).  
5. Conclude with when to pick which pattern.

**Depth**  
- **Reactive agents**: Pure perception → action mapping (e.g., Braitenberg vehicles). No internal state; low latency, limited foresight.  
- **Deliberative agents**: Maintain a world model + planner (A*, RRT). High computation, can optimize long‑term goals.  
- **Hybrid agents**: Combine reactive “fast‑path” with deliberative “slow‑path”; common in robotics (e.g., ROS behavior trees).  
- **Hierarchical agents**: Decompose tasks into sub‑agents; useful for complex missions (navigation + manipulation).  

Each pattern specifies a *control loop* and data structures (belief state, action stack). Complexity scales from O(1) per sensor tick for reactive to exponential in planning horizon for deliberative.  

**Edge Cases**  
- Highly dynamic environments → reactive may fail; need fallback plans.  
- Partial observability → belief state must handle uncertainty (POMDPs).  
- Real‑time constraints → hybrid is safest.

**Optimize & Communicate**  
I’d stress that selecting a pattern depends on latency, optimality, and environment predictability. I would illustrate with a quick pseudocode sketch of a reactive loop versus a deliberative planner. Finally, I’d note how modern frameworks (ROS2, ML‑based planners) often blend these patterns to balance speed and intelligence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
