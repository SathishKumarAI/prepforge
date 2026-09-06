---
qid: ing_a23bfdbdd4__think__local
question: 'Explain: OpenTelemetry native — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 661
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:48:08-05:00'
sources: []
---

**Thinking Process for Explaining “OpenTelemetry Native – AI Agent Testing & Evaluation (LangWatch)”**

1. **Clarify Scope & Audience**
   - *What is being asked?* The user wants an explanation of a specific integration: OpenTelemetry’s native support for monitoring AI agents, particularly the LangWatch evaluation tool.
   - *Assumptions:* Assume the reader knows basic OpenTelemetry concepts but not the AI‑specific extensions. Keep jargon minimal and focus on how the pieces fit together.

2. **Identify Core Concepts**
   - **OpenTelemetry (OTel)** – a vendor‑agnostic observability framework (tracing, metrics, logs).
   - **Native support** – OTel libraries that automatically instrument code without manual changes.
   - **AI Agent Testing & Evaluation** – measuring correctness, latency, cost, and other metrics for LLM‑based agents.
   - **LangWatch** – a tool built on top of OTel to evaluate language‑model agents (e.g., response quality, token usage).

3. **Build the Mental Model**
   - Think of an AI agent as a *service* that receives inputs, calls one or more LLMs, and returns outputs.
   - OTel captures *spans* around each call: start time → end time, attributes (model name, prompt size), logs, and metrics (tokens generated).
   - LangWatch consumes these spans/metrics to compute higher‑level KPIs (e.g., accuracy, cost per request).

4. **Step‑by‑Step Reasoning**
   1. **Instrumentation** – The OTel SDK for the agent’s language automatically wraps LLM calls in a span.
   2. **Data Collection** – Each span carries context: trace ID, parent span, attributes like `model=GPT-4`, `prompt_tokens=123`.
   3. **Export** – Spans are sent to an OTel collector or backend (Jaeger, Prometheus).
   4. **LangWatch Processing** – A LangWatch agent parses the exported data, aggregates per‑agent metrics, and runs evaluation logic (e.g., compares generated text against ground truth using ROUGE or BLEU).
   5. **Reporting** – Results are surfaced via dashboards or alerts, enabling continuous monitoring.

5. **Common Traps to Avoid**
   - *Assuming instrumentation is automatic for all frameworks*: some LLM SDKs need explicit wrappers.
   - *Mixing tracing with metrics incorrectly*: traces capture latency; metrics capture throughput and token counts.
   - *Ignoring context propagation*: missing trace IDs can break correlation across microservices.

6. **Sanity‑Check & Communicate**
   - Verify that the explanation covers: why OTel is used, how native instrumentation works, what LangWatch adds, and the end‑to‑end flow.
   - Keep sentences concise; use bullet points for clarity.
   - End with a quick example (e.g., “Agent A receives prompt → span starts → LLM call → span ends → LangWatch logs 200 tokens, 0.5 s latency”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
