---
qid: ing_eee356b5a1__star__local
question: 'Explain: Basic Prompting — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 320
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:08-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we were launching a new fraud‑detection chatbot that needed to interpret user queries and fetch the right data from our SQL database. The existing model returned generic answers because it didn’t understand the specific context of each request.

**Task:**  
I had to redesign the prompt flow so the language model could reliably translate natural language questions into precise SQL statements, improving accuracy and response time for the support team.

**Action:**  
First, I mapped out common user intents (e.g., “Show me all transactions over $5k last month”). Using OpenAI’s GPT‑4 with a few‑shot prompt, I constructed a template that included example question–SQL pairs. I added a system instruction to enforce SQL syntax and a stop token after the closing semicolon. Then I integrated the prompt into our FastAPI backend, passing user input through the model and executing the returned query against PostgreSQL. To keep latency low, I cached frequent queries and limited context length to 512 tokens.

**Result:**  
Accuracy of generated SQL rose from 68 % to 94 %, cutting average response time from 3.2 s to 1.4 s. The support team reported a 40 % reduction in ticket volume for data‑retrieval issues, and I learned how prompt design directly influences downstream system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
