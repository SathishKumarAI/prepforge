---
qid: ing_fbf222c081__star__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:35-05:00'
sources: []
---

**Situation:**  
In my last role I led a team that built an AI‑powered real‑time voice assistant for a financial services app. The product had to respond to user queries in under 300 ms, or customers would experience noticeable lag and drop the conversation.

**Task:**  
I was tasked with defining the latency budget—allocating how many milliseconds each component (speech‑to‑text, intent classification, response generation, text‑to‑speech) could consume while still meeting the overall target.

**Action:**  
First, I instrumented every microservice with distributed tracing and collected 95th‑percentile latencies under load. Using that data, I split the 300 ms budget: 120 ms for STT (using a lightweight Vosk model on edge), 80 ms for intent inference (a distilled BERT served via gRPC), 60 ms for response logic (rule‑based fallback plus GPT‑3 prompt), and 40 ms for TTS (AWS Polly with pre‑cached voice clips). I introduced async pipelines, removed blocking I/O, and added a circuit breaker to fall back to cached responses when any service exceeded its slice. Continuous monitoring let me tweak the slices in real time.

**Result:**  
After deployment we achieved an average end‑to‑end latency of 210 ms with 99th percentile below 280 ms, cutting user drop‑off by 35%. I learned that a precise, data‑driven budget is more effective than arbitrary limits and that adaptive throttling keeps the system resilient under spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
