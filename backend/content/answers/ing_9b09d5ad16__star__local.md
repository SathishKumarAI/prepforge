---
qid: ing_9b09d5ad16__star__local
question: 'Explain: Prefill and decode disaggregation — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 310
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:15-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new LLM‑based chatbot for enterprise sales. The internal serving platform was built on Kubernetes, but latency spikes during peak hours made the SLA unacceptable.

**Task**  
I had to redesign how the gateway handled request prefill and decoding so that inference time dropped below 200 ms while keeping GPU utilisation above 85%.

**Action**  
First, I split the pipeline: the “prefill” stage (token‑embedding lookup + positional encoding) ran on CPU nodes with a Redis cache for embeddings, freeing GPUs for the heavy transformer blocks. Then I moved “decode” to a separate microservice that streamed token generation using Beam Search with top‑k pruning, and exposed it via gRPC. I added asynchronous batching in the gateway so multiple user requests shared the same prefill batch, and implemented backpressure on the decode queue to avoid GPU oversubscription. Finally, I instrumented Prometheus metrics to monitor per‑stage latency.

**Result**  
The new architecture cut average inference time from 350 ms to 170 ms, meeting our SLA with a 90% GPU utilisation rate. The system also handled a 3× increase in concurrent users without additional hardware. I learned that careful micro‑service decomposition and caching can dramatically improve latency in large‑model serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
