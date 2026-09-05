---
qid: ing_af3598f188__star__local
question: 'Explain: Continuous batching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:39-05:00'
sources: []
---

**Situation:**  
At my previous company we had a customer‑facing chatbot that needed to handle 4,000 concurrent user requests per minute during peak holiday sales. The latency budget was under 150 ms, but our single‑instance inference pipeline averaged 600 ms on a GPU cluster.

**Task:**  
I was tasked with redesigning the request handling so we could keep the SLA while cutting GPU utilization by at least 30%.

**Action:**  
I introduced a continuous batching layer in the LLM gateway. First, I instrumented the HTTP front‑end to queue incoming prompts in a ring buffer and timestamp them. Then I implemented a microservice that pulls up to 32 requests every 10 ms, merges them into a single batched prompt using token padding, and sends the batch to the model via Triton Inference Server’s TensorRT backend. To preserve response order, I tracked request IDs in a map and de‑batched the logits before sending back individual completions. I also added adaptive throttling: if GPU queue latency exceeded 120 ms, the gateway would reject new requests with a “try later” hint.

**Result:**  
Batching reduced average inference time to 95 ms, meeting the SLA while cutting GPU hours from 8 to 5 per day— a 38% cost saving. I learned that careful timestamping and adaptive queue sizing are key to balancing throughput and latency in real‑time LLM serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
