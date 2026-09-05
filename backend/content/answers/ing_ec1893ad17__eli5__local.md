---
qid: ing_ec1893ad17__eli5__local
question: 'Explain: The Agent Formula — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 309
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:18-05:00'
sources: []
---

Think of an AI as a **robot chef** in a kitchen that wants to make the best dish possible.

1. **Perception (Sensors)** – The chef’s eyes, nose, and taste buds scan the pantry: what ingredients are available, how fresh they are, and how much is needed.  
2. **State (Memory)** – The chef keeps a mental recipe card that records everything seen so far—ingredients measured, steps taken, any changes made.  
3. **Policy (Decision rule)** – A simple instruction book tells the chef what to do next: “If you have tomatoes and basil, add them; if you’re out of salt, skip that step.”  
4. **Action (Actuators)** – The chef’s hands chop, stir, or season—these are the actions that change the kitchen environment.  
5. **Reward (Feedback)** – After tasting, a score is given: higher for delicious dishes, lower for bland ones.  

The **Agent Formula** ties these together: *Observe → Update state → Choose action by policy → Act → Receive reward*. Like the chef, an AI keeps track of what it sees, remembers past moves, follows a rulebook to decide what to do next, acts in the world, and learns from how good or bad its results are. This cycle lets the agent improve over time, just as a cook refines recipes through practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
