---
qid: ing_f7dca0e51b__star__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 422
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:32-05:00'
sources: []
---

**Situation**  
I was hired by a fintech startup to replace their legacy rule‑engine for transaction monitoring. Their compliance team required the entire fraud detection pipeline to finish in under 500 ms p99, while also leveraging an LLM‑RAG layer for context‑aware decisioning on high‑risk cards.

**Task**  
Build a hybrid system that runs lightweight ML rules first, then forwards only suspicious events to a large language model for richer analysis, all within the 500 ms budget. I had to design the latency budget, choose technologies, and ensure scalability.

**Action**  
I split the 500 ms into:  
- **Feature extraction & rule engine** (Kafka Streams + Flink) – 120 ms  
- **ML inference** (ONNX runtime on GPU instances) – 80 ms  
- **LLM‑RAG lookup** (FAISS index in Redis) – 100 ms  
- **Prompting & tokenization** (FastAPI with async calls to OpenAI API) – 120 ms  
- **Decision aggregation & persistence** – 80 ms  

I introduced a priority queue that throttles the LLM layer, only sending top‑10% of alerts. Circuit breakers and exponential backoff guard against spikes. I monitored each slice with Prometheus/Grafana, adjusting batch sizes until p99 dropped to 470 ms.

**Result**  
The system processed 30k transactions per second, maintained 99.5 % accuracy, and achieved a p99 latency of 475 ms during load tests. I learned that careful budget partitioning and selective LLM use can satisfy strict real‑time constraints while still providing deep contextual insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
