---
qid: ing_60629ae57f__star__local
question: Describe the ReAct pattern. How does it relate to modern native tool calling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:59-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a conversational agent that could automatically retrieve up-to-date financial data from several APIs while still answering user questions in natural language. The existing bot relied on a static knowledge base, so it struggled when users asked for the latest stock prices.

**Task**  
I needed to implement a dynamic reasoning pipeline that could decide which external service to call and incorporate its response into the final answer without human intervention.

**Action**  
I adopted the ReAct (Reason + Act) pattern: the model first “reason” about what data is missing, then “act” by issuing a tool‑call request. I wrapped each API in a native tool wrapper exposed through LangChain’s Tool interface, so the LLM could invoke them directly. The prompt template was crafted to encourage the agent to output a short reasoning step followed by an `Action: <tool_name>(<params>)` token. After receiving the tool response, the agent appended it to its context and produced the final answer. I tuned temperature and added a safety guard that limited calls per turn to avoid infinite loops.

**Result**  
The new bot reduced user wait times from ~12 s (API polling) to <2 s while increasing accurate responses by 35 %. It also cut backend costs because we eliminated unnecessary API calls. The experience taught me how ReAct turns a black‑box LLM into an orchestrated, tool‑aware system that mirrors modern native tool calling frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
