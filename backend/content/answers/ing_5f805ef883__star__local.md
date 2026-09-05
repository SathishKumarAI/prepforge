---
qid: ing_5f805ef883__star__local
question: 'Explain: Designing Tool Schemas for LLMs — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:30-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a customer‑support chatbot that needed to fetch real‑time inventory data and place orders through our internal ERP. The LLM could generate natural language but had no structured way to call the APIs, so we kept hitting timeouts or wrong endpoints.

**Task:**  
I was tasked with designing a set of tool schemas so the LLM could reliably invoke external services—defining the exact arguments, response formats, and error handling—while keeping latency under 300 ms for a smooth user experience.

**Action:**  
First I mapped each ERP endpoint to a JSON schema, then created a lightweight “tool registry” in TypeScript that exposed these schemas as OpenAI function calls. I added runtime validation with `zod` to catch malformed requests before hitting the network. To reduce round‑trip time, I pre‑fetched catalog data into an in‑memory cache and used async batch calls for bulk queries. Finally, I wrote unit tests that simulate 10 k concurrent users and tuned the schema constraints until the LLM produced fewer than 1% invalid calls.

**Result:**  
The new tool agent cut API error rates from 12% to <0.5%, improved average response time from 650 ms to 210 ms, and increased user satisfaction scores by 18 points on our internal survey. I learned that clear, machine‑readable schemas are the backbone of any robust LLM‑powered automation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
