---
qid: ing_3f4cd3c2d3__star__local
question: 'Explain: 2.4 System Design: Design an API for an LLM with a Safety Layer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 380
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:47-05:00'
sources: []
---

**Situation** – At my previous company we were launching a customer‑facing chatbot that used a proprietary large language model (LLM). Our compliance team flagged concerns about hallucinations and policy violations, so the product launch was stalled until we could guarantee safe outputs.

**Task** – I had to design an API that wrapped the LLM with a safety layer, exposing only vetted responses while keeping latency under 200 ms for 95% of requests. The interface needed to be developer‑friendly (REST/GraphQL) and support fine‑grained control over safety thresholds.

**Action** – I built a microservice in Go that sits between the client SDK and the LLM inference engine. Incoming prompts are first routed through an open‑source filter (OpenAI’s Moderation API + custom regex rules). The filtered text is then sent to the LLM, and its raw output passes through a post‑processing pipeline: 1) a lightweight NLI model checks for consistency with user intent; 2) a policy classifier flags disallowed content; 3) a fallback mechanism replaces flagged sections with safe completions. I exposed two endpoints—`/chat` (streaming) and `/batch`—and documented safety parameters (`confidence_threshold`, `blocklist`). Load testing on k6 showed 98% of responses under 180 ms, and we maintained an error rate <0.5%.

**Result** – The API enabled a smooth rollout: the chatbot handled 30k concurrent users with zero policy violations in production, and our compliance score improved from 70/100 to 95/100. I learned that coupling lightweight ML models for moderation with a well‑structured microservice yields both safety and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
