---
qid: ing_72fddef2e7__star__local
question: What causes high latency in conversational AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 322
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:39-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time customer support chatbot for an e‑commerce platform that handles ~15k concurrent users during peak sales. The SLA required sub‑200 ms response times, but early tests showed average latency hovering around 650 ms.

**Task** – My goal was to identify and eliminate the root causes of this delay so we could meet the SLA while keeping inference costs manageable.

**Action** – I first profiled the pipeline: tokenization (Python NLTK), embedding lookup on a GPU cluster, transformer decoding with beam search, and response formatting. I discovered that 45 % of the latency came from the model’s softmax layer due to large vocabulary size (120k tokens) and the use of CPU‑based TensorRT inference. Switching to a quantized 8‑bit GPT‑2 variant reduced GPU compute time by 60 %. I also introduced caching for frequent prompts and switched to asynchronous I/O with asyncio, eliminating thread contention. Finally, I deployed a lightweight language‑model wrapper that bypassed unnecessary post‑processing steps.

**Result** – Latency dropped from 650 ms to 180 ms under peak load, meeting the SLA. The quantized model cut inference costs by ~35 %. This experience taught me that latency often hides in data preprocessing and I/O bottlenecks as much as in the neural nets themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
