---
qid: ing_23c3e49ffb__faang__local
question: 'Explain: Build a Tool-Calling Agent — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 509
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:11-05:00'
sources: []
---

**Clarify**  
The interview question asks me to explain how to build a *Tool‑Calling Agent* using the **Haystack** framework (OpenAI/LLM + retrieval). I’ll assume:  
1) The agent must decide when to invoke external tools (e.g., search, calculator, database query).  
2) It should handle multi‑step reasoning and produce final responses.  

**Approach**  
1. **Define the tool interface** – each tool exposes a name, description, and an `execute(input)` API.  
2. **Agent architecture** – use a *Planner + Executor* loop:  
   - Planner (LLM prompt) generates a list of actions (tool calls or finish).  
   - Executor runs chosen tools, feeds outputs back into the planner’s context.  
3. **Memory & state** – maintain a conversation log; after each tool call, append the result as a system message so future planning is informed.  

**Depth**  
- *Planner Prompt*: “You are an assistant that can use tools: Search (query), Calc (expression). Given user request X, decide which tool to call or finish.”  
- The LLM outputs JSON `{action: "Search", arguments: {"query":"..."} }` or `{action:"Finish", output:"..."}`.  
- *Executor* validates the JSON, calls `tool.execute(args)`, captures result, and feeds back as a new message.  
- Loop repeats until an action of type “Finish” is returned.  
Complexity: Each iteration involves one LLM inference (~O(tokens)) plus tool latency; overall cost scales linearly with steps.

**Edge Cases**  
- Invalid JSON → retry or fallback to finish.  
- Tool failure (e.g., API error) → retry logic or graceful degradation.  
- Infinite loops – enforce a max‑step limit (e.g., 5).  

**Optimize & Communicate**  
- Cache frequent tool results to reduce latency.  
- Use chain‑of‑thought prompting to improve planning accuracy.  
- Log each step for auditability and debugging.  
Explain trade‑offs: richer planner prompts → higher token cost but fewer steps; simpler prompts → more iterations.  

This structured design aligns with FAANG expectations: clear assumptions, systematic plan, deep technical detail, robustness considerations, and optimization insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
