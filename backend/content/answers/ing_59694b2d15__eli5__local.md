---
qid: ing_59694b2d15__eli5__local
question: 'Explain: Tools & Tool-Calling — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 200
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:10-05:00'
sources: []
---

Imagine you’re in a kitchen that can bake any dish you ask for. **Tools** are the appliances—oven, blender, whisk—that perform specific tasks. **Tool‑calling** is telling the appliance exactly what to do: “heat to 350 °F,” “blend until smooth.” In AI, a language model (like GPT) plays the chef’s mind. It decides which tool to use and sends a short instruction (“call the calculator tool with input ‘5+7’”)—that’s the call. The tool does its job, returns a result (“12”), and the model can weave that answer back into the conversation. LangChain is like a recipe book: it keeps track of all available tools, how to ask them, and how to stitch their outputs together so the AI can solve problems by combining many little helpers instead of doing everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
