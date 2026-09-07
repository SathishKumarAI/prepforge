---
qid: ing_15d9225bee__aws__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 311
output_tokens: 451
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:39-05:00'
sources: []
---

**Situation / Task**  
While building a production‑grade chatbot for an e‑commerce client, I needed to guarantee that every LLM request was traceable, auditable, and could be replayed for debugging. The goal was to log each call with full context (prompt, model, token usage) while keeping latency < 200 ms.

**Action**  
I chose **Langfuse** as the observability layer because it natively integrates with **OpenTelemetry**, **LangChain**, and **OpenAI SDK**. I wrapped the OpenAI client in a custom middleware that emits an `llm_call` event to Langfuse, which forwards data to:
- **Amazon Kinesis Data Streams** (real‑time ingestion)  
- **DynamoDB** (low‑latency lookup for replay)  
- **S3** (archival of raw payloads).  

The middleware also injects a unique `trace_id` from AWS X-Ray, ensuring end‑to‑end correlation. I leveraged **AWS Lambda** to handle the event pipeline, keeping the API response path lightweight.

**Result**  
Within two weeks, we had:
- 99.9 % of calls logged with < 30 ms overhead.  
- Reduced debugging time from ~3 hrs to < 10 min for token‑level issues (data‑driven KPI).  
- Enabled a “playground” feature that let QA replay any call in seconds, cutting regression cycles by 40 %.

**Reflection**  
This exercise reinforced **Ownership**—I owned the entire observability stack—and **Dive Deep**—profiling latency at micro‑second granularity. A key failure was an initial mis‑configuration of Kinesis retention; fixing it taught me to validate IAM roles early and implement automated health checks.

---

*Leadership Principles: Ownership, Dive Deep, Customer Obsession.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
