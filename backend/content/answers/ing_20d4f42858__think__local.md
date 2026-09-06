---
qid: ing_20d4f42858__think__local
question: 'Explain: 3️⃣ See traces in Langfuse — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 453
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:51:45-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify what “See traces in Langfuse” means: users want to view request/response logs for LLM calls.  
   - Assume the reader knows basic AI tooling (LLMs, SDKs) but not Langfuse internals.

**2️⃣ Adopt a mental model**  
   - Treat Langfuse as an observability layer that sits between your code and the LLM provider.  
   - Map the flow: application → OpenTelemetry/SDK wrapper → Langfuse trace endpoint → UI/dashboard.

**3️⃣ Step‑by‑step reasoning**  
   1. **Instrumentation**: Show how to wrap a call (e.g., `llm = ChatOpenAI()` then use `LangfuseTracer`).  
   2. **Trace creation**: Explain that each LLM request becomes a “span” with metadata (prompt, tokens).  
   3. **Exporting**: Detail the HTTP/OTLP exporter to Langfuse’s API endpoint.  
   4. **Viewing**: Describe navigating the web UI – search bar, filters by session ID, time range, and how metrics (latency, cost) appear.  
   5. **Advanced**: Mention integrations (OpenTelemetry, LangChain hooks, LiteLLM middleware).

**4️⃣ Common pitfalls to avoid**  
   - Forgetting to set `LANGFUSE_API_KEY`.  
   - Mixing synchronous vs async tracing – ensure the exporter flushes before exit.  
   - Misinterpreting “traces” as raw logs; they’re structured spans with parent/child relationships.

**5️⃣ Sanity‑check & communicate**  
   - Verify by running a minimal script, confirming a trace appears in the UI within seconds.  
   - Summarize: “Langfuse captures every LLM call as an observable span, enriches it with context, and renders it in a searchable dashboard—making debugging, monitoring, and cost tracking trivial.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
