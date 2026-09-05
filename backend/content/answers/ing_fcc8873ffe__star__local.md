---
qid: ing_fcc8873ffe__star__local
question: Does OpenAI let you use AI tools during the system design interview?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 307
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:10-05:00'
sources: []
---

**Situation:** During my last interview for a senior systems architect role at a fintech firm, the panel asked me to design a real‑time fraud detection pipeline that had to process 1 M transactions per hour with <5 ms latency.

**Task:** I was expected to sketch the architecture on a whiteboard within 20 minutes and justify my choices—data ingestion, stream processing, machine learning inference—all while keeping cost under $10K/month.

**Action:** Instead of pulling up an external AI tool, I leveraged my own mental “AI” by recalling patterns from OpenAI’s GPT‑4 architecture: I broke the problem into sub‑tasks (ingestion, enrichment, scoring), mapped each to a microservice, and used Kafka for buffering. For ML inference I chose a pre‑trained transformer fine‑tuned on historical fraud data, deploying it in a Docker container behind an autoscaling ECS cluster. I sketched latency budgets using a simple queuing model (M/M/1) to demonstrate that our 5 ms target was achievable.

**Result:** The interviewers were impressed; we discussed how the same approach scales to 10× traffic with minimal cost increase. I learned that showing deep conceptual understanding—without external AI help—is more valuable than a flashy tool, and it reinforced my confidence in handling high‑stakes design questions on the spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
