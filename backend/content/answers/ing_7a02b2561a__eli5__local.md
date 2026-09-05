---
qid: ing_7a02b2561a__eli5__local
question: 'Explain: State Machines (LangGraph) — State Management Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:51-05:00'
sources: []
---

Imagine you’re running a kitchen that serves only three dishes—burger, pizza, and salad.  
Each dish is a **state** (a distinct mode the kitchen can be in).  
When an order comes in, the kitchen follows a set of **rules**: if it’s a burger order while the kitchen is in the *pizza* state, it first finishes the current pizza and then switches to the *burger* state.  

In LangGraph, a **state machine** works the same way.  
- **State** = the current “mode” or context of your AI (e.g., collecting data, summarizing, asking for clarification).  
- **Transition** = a rule that tells the AI how to move from one state to another when certain conditions happen (like receiving user input or completing a task).  

By arranging states and transitions neatly—just like the kitchen’s recipe card—you keep the AI organized, avoid confusion, and make sure it always knows what step comes next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
