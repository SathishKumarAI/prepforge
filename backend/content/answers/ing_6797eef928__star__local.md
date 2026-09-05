---
qid: ing_6797eef928__star__local
question: 'Explain: Tracing and Trajectories — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 314
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:05-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a conversational AI that integrated with multiple external APIs. Production logs showed latency spikes, but the dashboard only displayed average request times—no insight into why certain prompts stalled.

**Task:**  
I needed to surface fine‑grained execution paths and identify bottlenecks in the model’s pipeline so we could reduce response time from 1.8 s to under 1 s during peak traffic.

**Action:**  
I integrated LangSmith’s tracing module into our FastAPI service, instrumenting each LLM call, prompt construction, and API gateway hop with `langsmith.trace`. I then enabled “trajectories” in the UI, linking user intent tokens to downstream operations. Using the trajectory view, I visualized that a legacy sentiment‑analysis microservice was delaying 30 % of prompts. I refactored it to run asynchronously and added caching for common inputs. Additionally, I set up custom metrics (e.g., token‑to‑response latency) and alerts in LangSmith’s observability dashboard.

**Result:**  
After deployment, average response time dropped to 0.9 s, a 50 % improvement, and the error rate fell by 70 %. The exercise taught me that tracing + trajectories turn opaque AI pipelines into actionable graphs, enabling targeted optimizations without intrusive instrumentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
