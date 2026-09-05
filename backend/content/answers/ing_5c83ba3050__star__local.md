---
qid: ing_5c83ba3050__star__local
question: 'Explain: Rapid-fire practice prompts — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching an AI‑powered customer support bot that needed to handle over 20,000 unique user queries daily. Our QA team was struggling to generate realistic prompts fast enough for the nightly training cycle.

**Task** – I had to design a rapid‑fire prompt generator that could produce thousands of high‑quality practice prompts in minutes, covering edge cases and varied conversational flows, without manual scripting.

**Action** – I built a microservice using Python and FastAPI, leveraging GPT‑4’s few‑shot prompting. First, I curated 50 seed dialogue templates from the support logs. Then, I wrote a prompt template that injected random user intents, sentiment markers, and domain entities (e.g., “mortgage rate”, “transaction reversal”). The service streamed generated prompts to our data pipeline via Kafka, applying a Bloom filter to eliminate duplicates on the fly. I also added a lightweight rule engine in Go to inject business‑rule constraints (e.g., compliance checks) before final output.

**Result** – Within two weeks we were generating 120,000 unique practice prompts nightly, cutting QA time by 60 % and improving bot accuracy from 82 % to 94 % on real user conversations. I learned that combining LLMs with lightweight filtering and domain rules yields scalable prompt generation without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
