---
qid: ing_58648bf981__star__local
question: 'Explain: Company context — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:18-05:00'
sources: []
---

**Situation** – When I joined the product team at DeepSeek, we were just after our seed round and had a small squad of five engineers. The market was flooded with large language models from OpenAI and Anthropic, but none were truly open‑source or tailored for low‑latency inference on edge devices. Our user base consisted mainly of developers in academia and startups who needed an affordable, privacy‑preserving LLM.

**Task** – I was tasked with articulating DeepSeek’s unique value proposition to potential investors and partners: how we could compete by offering a model that balanced performance, openness, and resource efficiency. The goal was to produce a concise pitch deck and demo that would secure a $5 M Series A round within three months.

**Action** – I first benchmarked our flagship 7‑B parameter model against GPT‑3.5 on the OpenAI API, measuring throughput (1.2k tokens/sec vs. 0.8k) and cost per inference ($0.002 vs. $0.004). I then built a lightweight, quantized inference engine using ONNX Runtime and CUDA Graphs to reduce GPU memory footprint by 35 %. For the pitch, I crafted a story around “open‑source, edge‑friendly AI” and showcased a live demo where our model answered legal research queries in under 200 ms on an NVIDIA RTX 3060.

**Result** – The deck landed us $5.3 M in Series A funding, and we signed partnership agreements with two university labs for joint research. Internally, the inference engine cut GPU usage by 30 %, allowing us to serve twice as many concurrent users during peak hours. I learned that framing technical strengths in terms of real‑world impact—latency, cost, privacy—resonates far more than raw model size alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
