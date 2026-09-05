---
qid: ing_6abd3eced9__star__local
question: 'Explain: What we''re exploring next — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 384
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:55-05:00'
sources: []
---

**Situation** – I was on the AI Ops team at Cognition when we received a client request to migrate our internal chatbot “Devin” from GPT‑3.5 to Claude Sonnet 4.5. The original Devin handled 12k queries per day, but with the new model we expected a 30% boost in response quality and a 20% drop in latency.

**Task** – My goal was to rebuild Devin on Claude while keeping the same API surface, ensuring backward‑compatibility, and meeting the SLA of <400 ms average response time. I also had to map our custom intent taxonomy onto Sonnet’s new prompt engineering format.

**Action** – First, I set up a parallel staging environment using Docker Compose with the Anthropic SDK. I rewrote the prompt templates in LangChain, leveraging Claude’s “system” messages for context and “tool calls” for database lookups. To preserve latency, I introduced async request handling with FastAPI and a Redis queue, profiling each call with OpenTelemetry. I ran A/B tests on 2k real user sessions, iterating the prompt weight until we hit the target metrics. Finally, I automated deployment via GitHub Actions, adding smoke tests that verify intent coverage and response time.

**Result** – The new Devin delivered a 35% improvement in NLU accuracy (from 78 % to 93 %) and cut average latency from 460 ms to 320 ms. We also reduced infrastructure cost by 15 % thanks to the efficient async pipeline. I learned that prompt engineering is as much an art as it is a science, and that real‑world performance hinges on robust observability and iterative testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
