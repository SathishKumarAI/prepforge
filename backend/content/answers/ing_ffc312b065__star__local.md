---
qid: ing_ffc312b065__star__local
question: 'Explain: Getting Help — GitHub - microsoft/semantic-kernel: Integrate cutting-edge
  LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 342
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:58-05:00'
sources: []
---

**Situation**  
At my previous role, we were tasked with adding a conversational assistant to our customer‑support portal. The deadline was only six weeks, and our team had no prior experience with large language models.

**Task**  
I needed to integrate an LLM into the portal so that agents could auto‑populate responses while still retaining control over brand voice—without building a model from scratch or waiting for vendor support.

**Action**  
I chose Microsoft’s Semantic Kernel because its SDK lets you plug in any OpenAI‑compatible model with minimal boilerplate. I first cloned the `microsoft/semantic-kernel` repo, set up a local Docker environment, and ran the provided “ChatBot” sample to confirm connectivity. Then, using the kernel’s prompt templates, I defined a domain‑specific persona for our support team and added a custom semantic function that fetched ticket context from our CRM via an API call. To speed deployment, I wrapped the kernel calls in an Azure Function, exposing them through a REST endpoint that our front‑end could hit with just a POST request. I also leveraged the `semantic-kernel` telemetry to log prompt tokens and response latency, which helped us stay under the 200 ms SLA.

**Result**  
The new assistant reduced average ticket resolution time by 35% (from 12 min to 7.8 min) and cut agent effort on repetitive queries by 40%. I learned that using Semantic Kernel’s modular architecture lets you iterate quickly on prompts while keeping infrastructure lean—essential for tight deadlines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
