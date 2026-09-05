---
qid: ing_f541e46a7d__star__local
question: 'Explain: Model Overview — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 333
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:59-05:00'
sources: []
---

**Situation**  
At Kaiju I joined a cross‑functional squad tasked with launching a voice‑first customer support bot for our flagship e‑commerce platform. The existing on‑premise model could handle only 500 concurrent sessions, while projected traffic during peak sales would exceed 5,000.

**Task**  
I had to redesign the architecture so the conversational AI could scale horizontally, maintain sub‑second response times, and reduce inference cost by at least 30%.

**Action**  
First, I profiled the current transformer pipeline with PyTorch Profiler and identified GPU memory as the bottleneck. I migrated the model to TensorRT for kernel fusion and introduced mixed‑precision FP16 inference. Next, I containerized the service using Docker and orchestrated it on Kubernetes with autoscaling based on CPU usage. To cut costs, I replaced our monolithic LLM with a modular retrieval‑augmented generation (RAG) stack: an ElasticSearch vector store for domain knowledge and a lightweight DistilBERT encoder for intent classification. Finally, I set up A/B testing in production to iterate on response quality.

**Result**  
The new system handled 7,000 concurrent users with <200 ms latency, slashing GPU usage by 35% and reducing inference cost from $12/hr to $8/hr. The bot resolved 78% of tickets without escalation, up from 55%, and I learned the value of profiling early and balancing compute efficiency against model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
