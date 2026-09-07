---
qid: ing_9d92f2dc2b__faang__local
question: 'Explain: What Makes Something an Agent — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 422
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:50:30-05:00'
sources: []
---

**Clarify**  
The question asks for the defining traits of an *AI agent* as discussed in “What Makes Something an Agent — AI Agents Explained.” We’ll assume the audience knows basic ML concepts and that we should highlight perception, decision‑making, action, and learning.

**Approach**  
1. Restate the core definition.  
2. List the four pillars (perception, reasoning, actuation, learning).  
3. Give concrete examples for each pillar.  
4. Summarize how these pillars combine to form an autonomous agent.

**Depth**  
An AI agent is any system that **observes its environment through sensors, processes those observations via a policy or model, selects actions via actuators, and improves over time through learning**.  
- *Perception*: Sensors (cameras, microphones) produce raw data; feature extraction turns it into usable states.  
- *Reasoning*: A policy π(s) or value function V(s) maps perceived state to an action. Classical planners use symbolic logic; deep RL uses neural nets.  
- *Actuation*: The chosen action is executed—robot joints move, a dialogue system speaks, or a recommendation engine displays content.  
- *Learning*: Supervised, reinforcement, or unsupervised objectives adjust the policy so future decisions yield higher expected reward or lower loss.

**Edge Cases**  
A purely reactive rule‑based script (no learning) still counts as an agent because it perceives and acts, but lacks adaptation. A static AI model that never interacts with an environment is not an *agent*—it’s just a model.  

**Optimize & Communicate**  
Emphasize the loop: **Sensing → Decision → Acting → Feedback → Learning**. Highlight trade‑offs: richer perception improves performance but increases latency; deeper learning models boost accuracy at computational cost. Conclude by noting that any system fitting this closed loop, regardless of domain, qualifies as an AI agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
