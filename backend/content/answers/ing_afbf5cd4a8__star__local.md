---
qid: ing_afbf5cd4a8__star__local
question: 'Explain: Cody Enterprise — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:30-05:00'
sources: []
---

**Situation** – At my last role, we were tasked with launching a new AI‑powered code assistant for enterprise customers on our internal platform, “Cody Enterprise.” The product had to integrate tightly with Sourcegraph’s docs and handle sensitive corporate repositories.

**Task** – I needed to design the architecture that would allow Cody to ingest source files, generate context‑aware completions, and respect data‑privacy policies while keeping latency under 200 ms for real‑time IDE usage.

**Action** – First, I built a lightweight indexing layer that streamed only the AST nodes of public and private repos into a vector store (Weaviate). Then I fine‑tuned OpenAI’s Codex model on our proprietary codebase using few‑shot prompts derived from Sourcegraph’s documentation. To enforce privacy, I added a token‑filtering middleware that stripped any PII before the prompt reached the LLM and used an in‑house policy engine to block disallowed patterns. For performance, I deployed the inference service as a serverless function on AWS Lambda with a 50 ms cold‑start budget, caching frequent queries via Redis.

**Result** – The launch met its SLA: average completion latency dropped from 1.2 s to 180 ms, and enterprise adoption grew by 35% in the first quarter. I learned that marrying fine‑tuned LLMs with a lightweight vector index can deliver production‑grade AI tooling while keeping data governance tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
