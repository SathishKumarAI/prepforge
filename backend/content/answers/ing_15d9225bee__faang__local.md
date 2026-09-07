---
qid: ing_15d9225bee__faang__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 314
output_tokens: 528
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:00-05:00'
sources: []
---

**Clarify**  
The task is to log the first call to a large language model (LLM) using Langfuse, an open‑source AI engineering platform that wraps LLM interactions for observability, metrics, and prompt management. We’ll assume: 1) a Python environment with `langfuse` installed; 2) an OpenAI API key; 3) a simple prompt to send.

**Approach**  
1. Import Langfuse client and set up credentials.  
2. Create a `Trace` that represents the overall request context.  
3. Use the Langfuse‑wrapped LLM (e.g., `langfuse.OpenAI`) to call the model, passing the trace ID so events are linked.  
4. Capture response, log it as an `Event`, and close the trace.

**Depth**  
```python
from langfuse import Langfuse, OpenAI

# 1️⃣ Initialize client
client = Langfuse(
    public_key="YOUR_PUBLIC_KEY",
    secret_key="YOUR_SECRET_KEY",
)

# 2️⃣ Start a trace for this request
trace_id = client.trace(name="gpt-3.5-chat-example")

# 3️⃣ Call the model via Langfuse wrapper
llm = OpenAI(model_name="gpt-3.5-turbo", api_key="OPENAI_KEY")
response = llm(
    messages=[{"role":"user","content":"Hello, world!"}],
    trace_id=trace_id,
)

# 4️⃣ Log the output as an event
client.event(
    name="llm_response",
    type="output",
    input=response.choices[0].message.content,
    trace_id=trace_id,
)

# Close the trace (optional: add status)
client.trace_end(trace_id, status="completed")
```
The wrapper automatically emits OpenTelemetry spans and metrics; no manual instrumentation needed.

**Edge Cases**  
- *Missing credentials*: raise clear errors.  
- *Model timeout*: capture exception as an error event.  
- *Large responses*: stream or chunk to avoid memory blow‑up.

**Optimize & Communicate**  
For production, batch trace creation, reuse the client instance, and enable async calls (`asyncio`). Explain that Langfuse’s integration with OpenTelemetry lets you correlate LLM latency with downstream services, while its playground aids debugging. This concise pipeline demonstrates end‑to‑end observability in under 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
