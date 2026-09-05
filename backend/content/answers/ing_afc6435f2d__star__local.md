---
qid: ing_afc6435f2d__star__local
question: 'Explain: Building a Chat Agent with Function Calling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 313
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:38-05:00'
sources: []
---

**Situation:** In my last role at FinTech Co., the product team wanted to add a conversational assistant that could schedule meetings and pull real‑time account data for users, but our existing chatbot framework only supported plain text responses.

**Task:** I was tasked with building a new chat agent that could call backend APIs—like calendar sync and account balance queries—directly from user utterances, while keeping latency below 200 ms and ensuring secure data handling.

**Action:** I chose the OpenAI GPT‑4 Turbo model with function calling. First, I defined a JSON schema for each API: `schedule_meeting`, `get_balance`. Then, in the agent loop, I let the LLM decide whether to generate text or invoke a function by inspecting the `function_call` field. For execution, I wrapped the calls in a FastAPI service that verified OAuth tokens and logged all interactions. To keep response time low, I pre‑fetched user data on login and cached it with Redis, so the agent could reply instantly after a function call.

**Result:** The new chat agent reduced manual scheduling time by 65 % for sales reps (from 15 min to 5 min per week) and increased user satisfaction scores from 4.2 to 4.8 out of 5. I learned that careful schema design, caching, and secure API orchestration are critical when marrying LLMs with real‑world services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
