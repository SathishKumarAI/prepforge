---
qid: ing_48b7988ef7__eli5__local
question: 'You''re splitting a research agent into an orchestrator and subagents.
  Design the interface: what exactly crosses the boundary in each direction?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 269
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:11-05:00'
sources: []
---

Imagine an orchestra where the **conductor** (the orchestrator) tells the musicians (subagents) when to play, which instrument to use, and how loudly, but never writes every note themselves.  
*What crosses the boundary from conductor to musicians?*  
1. A short **instruction packet**: “Play this melody, at tempo 120, in key C.”  
2. The **current score state** (which measures are we on, what dynamics have been chosen).  

*What comes back from the musicians to the conductor?*  
1. An **execution report**: “I finished measure 3, but I ran out of notes at point X.”  
2. A brief **status update**: “Need more data/clarification on this passage.”

The interface is a simple two‑way conversation: the orchestrator sends clear, minimal commands; subagents reply with concise progress and request updates. This keeps the system modular—each agent can be swapped or upgraded without changing the other side, just like replacing one instrument in an orchestra while keeping the conductor’s score unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
