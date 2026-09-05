---
qid: ing_04f5c3a63d__star__local
question: 'Explain: Generative AI and Large Language Models — Generative AI with Large
  Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 368
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:51-05:00'
sources: []
---

**Situation:**  
When my team at a fintech startup was building an automated customer support bot, our existing rule‑based system struggled to handle the 30% of queries that were phrased in unexpected ways, causing response times to spike from 2 seconds to over 10 seconds during peak hours.

**Task:**  
I needed to design a solution that could understand and generate natural language responses in real time, reducing latency by at least 60% while keeping costs under $0.05 per query.

**Action:**  
I evaluated several open‑source LLMs (GPT‑Neo, LLaMA) and benchmarked them on our FAQ corpus. After fine‑tuning LLaMA-7B with a domain‑specific dataset of 15k labeled interactions, I integrated it into our microservice architecture using FastAPI and GPU‑accelerated inference via ONNX Runtime. To keep costs low, I implemented request batching (32 requests per batch) and switched to quantized weights (int8), which cut inference time from 2 s to 0.7 s per query. I also set up a monitoring dashboard that tracks perplexity and response latency in real time.

**Result:**  
The new LLM‑powered bot handled 70% more unique queries with an average latency of 0.8 seconds, cutting our peak‑hour support load by 65%. User satisfaction scores rose from 78% to 92%, and we reduced infrastructure spend by 15% thanks to batching and quantization. I learned that careful model selection, domain fine‑tuning, and inference optimization are key to deploying generative AI at scale without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
