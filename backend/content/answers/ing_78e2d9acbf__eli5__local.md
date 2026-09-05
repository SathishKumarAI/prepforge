---
qid: ing_78e2d9acbf__eli5__local
question: 'Explain: On-site: system design — OpenAI System Design Interview (2026
  Guide) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 294
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:17-05:00'
sources: []
---

Imagine you’re building a giant library that can instantly answer any book‑ish question in the world—only this library lives inside a computer and learns from every visitor’s request. In the “On‑Site: System Design” interview, OpenAI asks you to design exactly that: a scalable, fault‑tolerant system that ingests huge amounts of text, trains language models, serves predictions, and keeps everything secure.

Think of it as designing a smart subway network:

1. **Tracks (Data pipelines)** – raw data flows from many sources (web crawls, user uploads) into storage.  
2. **Stations (Compute nodes)** – each station hosts GPUs that process chunks of text, train on them, and hand off results to the next station.  
3. **Control center (Orchestrator)** – a scheduler decides which trains run when, balances load, and recovers from stalled cars.  
4. **Ticketing (APIs)** – users buy “tickets” (requests) that route through the network, receive answers, and get billed.

You’ll need to explain how you’d keep tracks from breaking, how stations scale during rush hour, and how the control center keeps all trains on time while respecting privacy and cost limits. That’s the heart of the interview question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
