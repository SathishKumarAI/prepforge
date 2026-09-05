---
qid: ing_3b8fbfba62__eli5__local
question: 'Explain: Agents and Tool Use — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 244
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:39-05:00'
sources: []
---

Think of a large‑language model (LLM) as a very clever kitchen assistant that can follow recipes written in text.  
**Agents** are like the chef who decides what dish to cook next. They read a goal (“make dinner”), look at the ingredients (the data the LLM has seen), and choose a series of cooking steps—“cut onions,” “boil pasta.” Each step is a *tool* call: the kitchen’s knife, stove, or blender.  
When the agent calls a tool, the LLM supplies the instructions, the tool performs the physical action, and the result (e.g., chopped onions) is fed back to the LLM so it can decide the next step.  

So, an *agent* is the decision‑maker that plans and chains tool uses; a *tool* is any external function (calculator, search engine, code executor) that does work the model itself cannot. Together they let the model do complex tasks by combining its language skill with real‑world actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
