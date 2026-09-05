---
qid: ing_23c3e49ffb__star__local
question: 'Explain: Build a Tool-Calling Agent — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:28-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the customer support chatbot for a SaaS company that had been receiving complaints about its inability to execute real‑time actions—like booking tickets or pulling up account balances—during conversations.

**Task:**  
I needed to build a tool‑calling agent that could understand user intent, decide when to invoke external APIs (e.g., calendar, payment gateway), and return results back into the dialogue seamlessly, all while keeping latency under 1.5 seconds.

**Action:**  
Using Haystack’s new “Tool Calling” framework, I first defined a set of tool schemas (name, description, required parameters). I then integrated LangChain’s prompt template to generate structured JSON calls from the LLM output. For orchestration, I wrapped each call in an async Python function and used FastAPI for low‑latency endpoints. To keep the model grounded, I added a short “tool usage” log that fed back into the prompt as context. Finally, I set up unit tests with pytest to mock API responses and measure round‑trip time.

**Result:**  
The deployed agent cut support ticket resolution time by 37 % (from 12 min to 7.5 min) and increased user satisfaction scores from 78 % to 92 %. I learned that careful schema definition, prompt tuning, and async orchestration are key to building responsive tool‑calling agents in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
