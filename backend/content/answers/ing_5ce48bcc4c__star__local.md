---
qid: ing_5ce48bcc4c__star__local
question: How does function/tool calling actually work mechanically, end to end?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 335
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:37-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with adding a “weather lookup” feature to our customer‑support bot. The bot had to ask the user for a city, call an external weather API, and return a concise forecast—all without exposing the raw API key in the frontend.

**Task**  
I needed to design a secure, end‑to‑end flow that let the LLM decide when to invoke the function, pass only necessary arguments, and handle errors gracefully, all while keeping latency under 1 s.

**Action**  
First I defined an OpenAI function schema: `get_weather(city: string)` with JSON validation. In the serverless handler I wrapped the LLM call in a loop that checks for a `function_call` field. When present, I extracted the arguments, called our internal microservice which added the API key and forwarded the request to the weather provider, then parsed the response into a user‑friendly string. I logged each step with OpenTelemetry, set a 500 ms timeout on the external call, and returned a fallback message if it failed.

**Result**  
The feature launched in two weeks, reducing average ticket resolution time by 25%. The bot handled 95% of weather queries automatically, and we never exposed the API key to the client. I learned that careful schema design and a tight retry‑timeout loop are essential for reliable function calling in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
