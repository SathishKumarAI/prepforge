---
qid: ing_c4f7092c74__eli5__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 264
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:09-05:00'
sources: []
---

Imagine a kitchen that serves three kinds of dishes: homemade (native code), take‑out menus (OpenAPI specs), and remote restaurants (MCP servers). The **tool‑calling layer** is the chef’s recipe book that knows how to fetch, prepare, and serve each dish.

* **Tool interface** – a simple “cook this” command everyone understands.  
  *Unavoidable term:* *Interface* = a set of rules telling objects how they can talk.

* **NativeTool** – reads local recipes (functions written in C/C++/Python).  
* **OpenAPITool** – pulls a recipe from an online menu (JSON description) and turns it into a function call.  
* **MCPTool** – asks another kitchen (remote server) for the dish, then receives the finished plate.

The **ToolRegistry** keeps all three in one list so the agent host can pick any tool by name, ask it to “cook”, and get back the result. This single, tidy cookbook lets the agent use local code, web APIs, or remote services without worrying where they live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
