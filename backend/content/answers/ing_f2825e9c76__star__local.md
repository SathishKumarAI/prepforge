---
qid: ing_f2825e9c76__star__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:53-05:00'
sources: []
---

**Situation:** In a production chatbot for a fintech client, the LLM was set to stream responses to keep latency low. However, when the model started emitting structured JSON for transaction details or tool calls (e.g., calling a balance‑lookup API), the stream would intermittently break mid‑token, causing parsing errors in our frontend.

**Task:** I had to design a robust streaming pipeline that could correctly capture partial outputs, detect incomplete JSON or unfinished tool call syntax, and seamlessly reassemble them without losing context or user experience.

**Action:** I wrapped the OpenAI `ChatCompletion` stream with a custom parser that buffered incoming chunks. Using a state machine, it tracked opening braces/brackets and quoted strings to know when a full JSON object was received. For tool calls, I intercepted the `<tool_call>` markers, stored arguments until the closing marker, then invoked the external service asynchronously while feeding a “processing” message back into the stream. If the chunk ended mid‑token, I sent a continuation request with the last incomplete token as context to recover. I also added exponential backoff for transient API failures and logged every partial output to aid debugging.

**Result:** The chatbot achieved 99.8% successful JSON parsing under load and reduced overall response latency by 18 %. Additionally, we cut the error‑handling code by half because the streaming logic now self‑rectifies incomplete payloads. This approach taught me how to blend low‑level stream management with high‑level AI workflow orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
