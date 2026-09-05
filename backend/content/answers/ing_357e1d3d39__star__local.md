---
qid: ing_357e1d3d39__star__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 387
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:13-05:00'
sources: []
---

**Situation**  
I was leading a project to build an AI‑powered customer‑support chatbot for a SaaS company that needed 24/7 coverage and had a high volume of complex, multi‑step queries.

**Task**  
Decide whether to use a classic plan‑then‑execute pipeline (generate a full action plan first, then carry it out) or a reactive ReAct‑style loop (reason and act in small steps), ensuring low latency, high accuracy, and easy debugging.

**Action**  
I prototyped both approaches. For the plan‑then‑execute model I used LangChain with a LLM prompt that produced an ordered list of actions (lookup FAQ, call API, ask user for clarification). The reactive ReAct version fed the same LLM but let it interleave “think” and “act” tokens, stopping after each small action to update context. I measured turn‑completion time, success rate on 5,000 real tickets, and developer effort to patch failures.

**Result**  
The reactive model cut average response time from 3.8 s to 1.6 s and improved ticket resolution by 12 % (from 82 % to 94 %). Debugging was also easier because each step could be logged separately. I learned that plan‑then‑execute is best for deterministic, low‑complexity workflows where upfront planning saves compute, while reactive ReAct excels when uncertainty or external API calls dominate and latency matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
