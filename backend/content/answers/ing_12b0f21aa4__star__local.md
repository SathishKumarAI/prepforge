---
qid: ing_12b0f21aa4__star__local
question: 'Explain: API vs Self-Hosted — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:54-05:00'
sources: []
---

**Situation**  
At my last company we were building a customer‑support chatbot that had to run 24/7 for a retail client with strict data‑privacy rules. Our internal metrics showed the open‑source model we used via an API was slow (350 ms per request) and our latency SLA was 200 ms.

**Task**  
I needed to decide whether to keep using the paid API or move to a self‑hosted LLM stack that could meet the latency requirement while keeping user data on‑premise.

**Action**  
First, I benchmarked the OpenAI GPT‑4o API against a locally hosted Llama‑2 13B fine‑tuned for our domain. I set up an Azure Kubernetes Service cluster with GPU nodes and integrated ONNX Runtime to accelerate inference. I added a caching layer (Redis) to handle repeat queries and implemented a fallback circuit breaker that routed to the API only when the cluster was overloaded. Cost modeling showed that running 5 k requests/day on the self‑hosted cluster would cost ~$200/month versus ~$1,500 for the API.

**Result**  
Latency dropped from 350 ms to 120 ms on average, meeting our SLA. Data stayed within our network, satisfying compliance. We saved $1,300/month and gained control over model updates. I learned that a hybrid approach—self‑hosted core with API fallback—is often the most resilient strategy for regulated workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
