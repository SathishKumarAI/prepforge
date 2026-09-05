---
qid: ing_54f48ea12a__star__local
question: 'Explain: Using Graphiti with OpenAI-compatible providers and local LLMs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 416
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:00-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that had to run within the company’s on‑prem GPU cluster while still leveraging the latest OpenAI models for content generation.

**Task:**  
I needed to create a hybrid inference pipeline that could switch between an OpenAI‑compatible cloud provider (e.g., Anthropic) and local LLMs without sacrificing latency or accuracy, all orchestrated through Graphiti’s graph‑based workflow engine.

**Action:**  
First, I wrapped each model endpoint in a Graphiti node, exposing a unified `predict()` interface. For the local side I containerized a 7B Llama2 on NVIDIA A100s and exposed it via a lightweight FastAPI server; for the cloud side I used the OpenAI SDK with an Anthropic fallback token. I added a routing node that inspected the input length and user subscription tier: short queries hit the local model, longer or premium requests were routed to the cloud provider. I also implemented a caching layer in Redis keyed by prompt hash to avoid duplicate calls. Finally, I set up Graphiti’s monitoring hooks to log inference latency and error rates.

**Result:**  
The hybrid system cut average response time from 1.2 s (cloud only) to 0.6 s while keeping the BLEU score for generated product descriptions above 0.78. Cost per request dropped by ~35% because we avoided unnecessary cloud calls, and the caching layer reduced redundant traffic by 40%. I learned how to balance model quality with infrastructure constraints using Graphiti’s declarative graph approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
