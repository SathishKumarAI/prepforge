---
qid: ing_d894f00a63__star__local
question: 'Q: If you had to build a system that works across OpenAI, Anthropic, and
  local Llama models, how would you architect it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 358
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:06-05:00'
sources: []
---

**Situation** – At my last company we had a compliance dashboard that needed to pull insights from multiple LLMs because each vendor offered unique strengths: OpenAI for conversational nuance, Anthropic for safety‑oriented responses, and an on‑prem Llama model for data privacy. The existing pipeline was monolithic and vendor‑specific, causing maintenance headaches.

**Task** – I had to design a unified inference layer that could route prompts to the appropriate engine, handle token limits, and merge outputs while keeping latency under 1 s per request.

**Action** – I built a microservice architecture using FastAPI as the gateway. Inside, a “Router” module maps intent tags (e.g., “summarize”, “explain”) to adapters: an OpenAI client, an Anthropic wrapper that injects safety prompts, and a local Llama inference engine powered by ONNX Runtime. I added a shared vector store (FAISS) for context retrieval so each model receives the same background knowledge. The orchestrator uses async tasks with a timeout fallback; if one provider fails or exceeds token limits, it automatically retries with another. Configuration lives in a YAML file and is hot‑reloadable.

**Result** – Deployment cut maintenance effort by 60 % and reduced total inference latency from 1.8 s to 0.9 s on average. The system also logged provider health metrics, enabling proactive scaling. I learned that abstracting the vendor interface early and standardizing context delivery are key to building resilient multi‑LLM pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
