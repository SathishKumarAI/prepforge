---
qid: ing_f06accf81c__fp__local
question: 'Explain: Dependencies — GitHub - langfuse/langfuse: \ud83e\udea2 Open source
  AI engineering platform: LLM evals, observability, metrics, prompt management, playground,
  datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM, and more.
  \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 547
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:30:09-05:00'
sources: []
---

### Why the LangFuse stack looks the way it does

At its core, an AI‑engineering platform must **measure, control, and replay** every element of a language‑model (LLM) pipeline: prompts, embeddings, token usage, latency, cost, and downstream effect.  
To do that in production you need three foundational building blocks:

| Block | Why it’s mandatory | How LangFuse implements it |
|-------|-------------------|---------------------------|
| **Observability** | The system must expose a *single source of truth* for every request. In distributed AI workloads, latency and cost are hidden behind network hops; without observability you can’t correlate them with the original prompt or model call. | Integrates with **OpenTelemetry** (tracing, metrics) so that every LangChain or LiteLLM call automatically propagates context IDs, spans, and tags (`model`, `prompt_id`, `dataset`). |
| **Prompt & Dataset Management** | Prompt drift is a silent source of bias and cost spikes. A platform must version prompts, store datasets, and allow safe experimentation (playground). | Uses a lightweight PostgreSQL schema to track prompt templates, variables, and dataset records; the UI exposes CRUD operations and audit logs. |
| **Evaluation & Metrics** | Business value comes from *quantitative* insights: BLEU scores, hallucination rates, cost per token, latency percentiles. Without metrics you can’t prove ROI or trigger alerts. | Provides a plug‑in architecture where users drop in their own evaluation scripts (e.g., custom metric functions) that run against stored logs; results are surfaced as Grafana dashboards via **OpenTelemetry metrics**. |

#### One non‑obvious insight  
Most people focus on *logging* and forget that the **trace context must survive across all third‑party SDKs**. LangFuse solves this by wrapping the OpenAI, LiteLLM, and LangChain clients with a single decorator that injects a trace ID into every outbound HTTP request header (`x-trace-id`). This guarantees that when you later query logs in Grafana or run a replay in the playground, you’re looking at *exactly* the same execution path, even if the underlying SDK internally retries or shards requests.

In short, LangFuse’s dependencies are chosen not for their popularity but because each one addresses a specific, unavoidable requirement of end‑to‑end AI observability: **trace propagation (OpenTelemetry), prompt orchestration (LangChain integration), and cost‑aware execution (LiteLLM & OpenAI SDK).**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
