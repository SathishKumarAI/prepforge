---
qid: ing_cbeab4375e__star__local
question: 'Explain: Building Custom Agent Skills — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 294
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:39-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a conversational AI platform for customer support. The existing skill set couldn’t handle complex ticket routing, so our SLA dropped to 65% on high‑priority cases.

**Task:**  
I was tasked with building a custom tool agent that could automatically parse incoming tickets, identify the required department, and trigger the appropriate workflow—all within the same conversation flow.

**Action:**  
First, I scoped the data by scraping the ticketing system’s API and mapping common keywords to departments. I then designed a lightweight Python microservice using FastAPI and integrated it with LangChain’s `Tool` interface so the LLM could invoke it as a function call. To keep latency low, I cached department mappings in Redis and added a retry logic for API failures. Finally, I wrote unit tests with pytest to validate routing accuracy against historical tickets.

**Result:**  
The new tool agent increased correct ticket routing from 65% to 92%, cutting average resolution time by 35%. It also reduced the need for manual triage, freeing support agents to focus on complex issues. From this project I learned how to blend LLM prompt engineering with real‑world APIs to create robust, low‑latency agent skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
