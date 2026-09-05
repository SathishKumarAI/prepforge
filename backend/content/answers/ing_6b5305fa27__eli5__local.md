---
qid: ing_6b5305fa27__eli5__local
question: 'Explain: Thread in #feedback — TypeScript AI Framework for Agents and Apps
  | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 187
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:58-05:00'
sources: []
---

Imagine a **Thread** as a notebook where an AI agent writes each step of its conversation, like a diary entry.  
When the agent talks to you or another system, every sentence it sends and receives becomes a new page. The Thread keeps all these pages together so the agent can glance back at earlier context—just as you might flip through your diary to remember why you made a decision.

In Mastra’s TypeScript AI Framework, an **Agent** (the chatbot) creates a Thread for every interaction. Each Thread is stored in a database so it can be retrieved later, letting the Agent recall past questions and answers even after a long break.  
Thus, Threads give the agent memory: they’re the continuous story of the dialogue that keeps the conversation coherent and grounded in prior exchanges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
