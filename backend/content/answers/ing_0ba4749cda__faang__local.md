---
qid: ing_0ba4749cda__faang__local
question: 'Explain: Register custom metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 534
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:11-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to register *custom metrics* for AI evaluation pipelines using **LangWatch** and **LangFuse**.  
Assumptions:  
- You have a LangChain‑based LLM workflow already instrumented.  
- You want to expose domain‑specific KPIs (e.g., hallucination rate, latency per prompt).  
- Metrics should be viewable in the LangWatch dashboard or exported for downstream analytics.

**2️⃣ Approach**  
1. Import the monitoring SDK (`langwatch`, `langfuse`).  
2. Define a metric schema: name, type, description, unit.  
3. Wrap your LLM call or chain with a decorator that records inputs/outputs and computes the metric value.  
4. Push the metric to LangWatch/LangFuse via their client APIs (e.g., `client.track_metric(...)`).  

**3️⃣ Depth**  
```python
from langwatch import LangWatchClient
from langfuse import LangFuseClient

lw = LangWatchClient(api_key="LW_KEY")
lf = LangFuseClient(project_id="PROJ", secret_key="LF_SECRET")

def track_custom(metric_name, value, tags=None):
    lw.track_metric(name=metric_name, value=value, tags=tags)
    lf.record_metric(name=metric_name, value=value, metadata=tags)

# Example wrapper
def eval_chain(chain, prompt):
    result = chain.run(prompt)
    hallucination_rate = compute_hallucination(result)  # custom logic
    track_custom("hallucination_rate", hallucination_rate, tags={"prompt_id": id(prompt)})
    return result
```
Complexity: O(1) per call; overhead is negligible.  
Trade‑offs: More metrics → more network traffic; batch uploads can mitigate latency.

**4️⃣ Edge Cases**  
- **Missing API keys** → fallback to local logging.  
- **High‑frequency calls** → rate‑limit or buffer metrics.  
- **Non‑numeric values** → serialize as JSON strings or use categorical buckets.

**5️⃣ Optimize & Communicate**  
- Batch metric uploads every 30 s for bursty workloads.  
- Use exponential backoff on failures to avoid cascading errors.  
- Expose a CLI/HTTP endpoint to register new metrics at runtime, keeping the system extensible.  

By following this pattern you get real‑time visibility into any custom KPI while keeping integration lightweight and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
