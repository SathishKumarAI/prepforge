---
qid: ing_6a00558ce1__star__local
question: 'Q: What is the "Function Calling" abstraction in Semantic Kernel?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 337
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:28-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a virtual assistant for our sales team that could pull real‑time pricing and inventory data from multiple legacy APIs. The team had been using Semantic Kernel to wrap the LLM, but we hit a snag: the bot kept generating generic responses instead of calling the right API endpoints.

**Task** – My goal was to implement a robust “function calling” abstraction in Semantic Kernel so that the language model could invoke specific backend services based on user intent, with minimal latency and clear error handling.

**Action** – I first mapped each external service to a typed function definition (name, parameters, return schema) and registered them in the kernel’s FunctionRegistry. Then I wrote a custom PromptTemplate that included a “functions” JSON schema so the LLM could reference them directly. Using the `invoke_with_retry` helper, I wrapped calls with circuit‑breaker logic and added telemetry to log request/response sizes. Finally, I trained a small fine‑tuned policy model on intent–function pairs to improve matching accuracy.

**Result** – The assistant now resolves 92 % of user queries by calling the correct function instead of generating vague text. Response time dropped from 3.8 s to 1.2 s per request, and our support tickets related to data retrieval fell by 45 %. I learned that exposing clear function contracts to the LLM dramatically improves reliability in production AI workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
