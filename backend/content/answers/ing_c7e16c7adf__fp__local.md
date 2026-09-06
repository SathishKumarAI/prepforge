---
qid: ing_c7e16c7adf__fp__local
question: 'Explain: Langfuse Cloud · Self Host · Demo — GitHub - langfuse/langfuse:
  \ud83e\udea2 Open source AI engineering platform: LLM evals, observability, metrics,
  prompt management, playground, datasets. Integrates with OpenTelemetry, LangChain,
  OpenAI SDK, LiteLLM, and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 421
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:20-05:00'
sources: []
---

**Langfuse: an AI‑engineering playground**

At its core Langfuse solves a *measurement problem*: when you build large‑language‑model (LLM) pipelines, every request is a black box—prompt, temperature, embeddings, token usage, latency, and downstream decision logic. Without systematic logging, you cannot compare models, debug drift, or prove compliance.

Langfuse turns each LLM call into an *observable event*. It collects the prompt, response, metadata, and system metrics, then emits them to OpenTelemetry so they can be visualized in Grafana or traced in Jaeger. The platform stores these events in a schema‑driven database, enabling fast aggregation of **metrics** (tokens per second, cost per request) and **evaluations** (BLEU, ROUGE, custom score functions). Because the data model is extensible, you can attach arbitrary tags—e.g., “customer‑tier”, “dataset‑source”—and filter on them later.

The **prompt‑management** module treats prompts as first‑class artifacts. You version them, roll them out in A/B tests, and link them to specific LLM deployments. The playground gives an interactive UI for tweaking parameters live; it’s a sandbox that feeds back into the observability pipeline.

Langfuse is *plug‑and‑play*: it ships as a cloud SaaS, can be self‑hosted on Kubernetes (the Docker Compose stack in the repo), and offers a minimal demo for quick onboarding. Its SDKs wrap popular frameworks—OpenAI, LangChain, LiteLLM—so you inject a single decorator or middleware to start collecting data.

**Non‑obvious insight:**  
Because all LLM interactions are stored with their *full context* (prompt, response, and metadata), you can retroactively apply new evaluation metrics without re‑running the pipeline. This “audit trail” turns every past request into a reusable dataset for research or compliance audits—a feature many AI platforms miss entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
