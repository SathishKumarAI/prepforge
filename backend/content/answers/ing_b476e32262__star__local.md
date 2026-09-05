---
qid: ing_b476e32262__star__local
question: Why GPT-4o-mini Instead of GPT-4o? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:37-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the migration of our internal knowledge‑base search into a live chatbot that needed to respond within 400 ms for every query on a production server with 10k concurrent users.

**Task:**  
I had to pick an LLM that balanced inference speed, cost, and answer quality so we could hit the latency SLA while keeping per‑request GPU usage under 0.3 TFLOPs.

**Action:**  
After benchmarking both GPT‑4o and GPT‑4o‑mini on a representative set of search prompts, I ran a two‑phase test: first a synthetic load test with 10k parallel queries, then a real user study comparing relevance scores. GPT‑4o scored 92 % in F1 but stalled at 550 ms average latency and cost per token was 3× higher. GPT‑4o‑mini delivered 88 % F1, 380 ms latency, and cut GPU usage to 0.15 TFLOPs. I also added a lightweight cache layer for the most frequent queries, which boosted hit rate from 40 % to 78 %.

**Result:**  
Switching to GPT‑4o‑mini allowed us to meet the 400 ms SLA with 70 % lower compute cost and still maintain high relevance. The team learned that a smaller model can be tuned for specific workloads, and we now routinely benchmark new LLMs against real‑time constraints before production rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
