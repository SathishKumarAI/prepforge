---
qid: ing_62023c9ed0__star__local
question: 'Explain: Company context — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 333
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:13-05:00'
sources: []
---

**Situation** – At Abridge I was part of the core product team building an AI‑powered meeting assistant that transcribes, indexes and surfaces key decisions from corporate calls. Our beta launch had a 40 % churn rate because users couldn’t find the insights they needed within minutes.

**Task** – My goal was to reduce the time to first insight by 50 % while keeping transcription accuracy above 95 %. I also needed to integrate this improvement into our existing micro‑service stack without breaking the real‑time streaming pipeline.

**Action** – First, I rewrote the language model inference layer in Rust and offloaded heavy NLP tasks to a GPU cluster managed with Kubernetes. I introduced an attention‑based summarization module that prioritized speaker turns and action items, and used a fine‑tuned BERT model for entity recognition. To preserve latency, I implemented a two‑stage pipeline: a lightweight keyword extractor ran on the edge, feeding only relevant chunks to the heavy summarizer. Finally, I set up A/B tests with Canary deployments and added telemetry via OpenTelemetry to track inference time per call.

**Result** – The average time to first insight dropped from 2 minutes to 45 seconds, cutting churn by 32 % in the next quarter. Accuracy stayed above 96 %. This project taught me how to balance model complexity with system performance and reinforced the value of end‑to‑end observability in AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
