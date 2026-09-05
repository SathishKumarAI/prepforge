---
qid: ing_3e2c7599c7__star__local
question: How do you optimize LLM inference cost? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:49-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a chatbot that served 120 k users daily. Each user query triggered an inference on a 13‑B LLM hosted on AWS SageMaker, pushing our monthly spend over $50K.

**Task:**  
I had to cut inference cost by at least 40% while keeping latency under 200 ms and response quality stable.

**Action:**  
1. **Model pruning & distillation** – I distilled the base model into a 3‑B student using knowledge transfer, reducing token throughput by ~70%.  
2. **Batching with dynamic padding** – Implemented a queue that groups similar‑length requests, cutting GPU idle time by ~25%.  
3. **Caching frequent prompts** – Added an in‑memory cache for the top 10% of queries; served them directly from Redis, eliminating 30% of calls.  
4. **Switch to spot instances & autoscaling** – Configured SageMaker to run on spot GPUs and auto‑scale based on queue depth, lowering compute cost by ~15%.  
5. **Monitoring & A/B testing** – Deployed metrics dashboards (Prometheus + Grafana) to compare perplexity before/after changes.

**Result:**  
Monthly inference spend dropped from $50K to $30K (+40% savings). Latency stayed at 180 ms on average, and user satisfaction scores rose by 5%. I learned that combining model compression with smart orchestration yields compounding cost reductions without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
