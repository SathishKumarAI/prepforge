---
qid: ing_c80c0eae7a__fp__local
question: 'Explain: Python SDK Quick Start — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 488
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:40-05:00'
sources: []
---

### Why an SDK is Needed

When you build an LLM‑centric system—RAG, agents, or streaming chat—you constantly juggle **state**, **metrics**, and **audit trails**.  
Without a unified API the cost of wiring telemetry (logs, traces, evaluation results) into every component explodes: each module must export its own logger, store checkpoints in a shared DB, and expose REST endpoints for dashboards. That friction turns experimentation into a maintenance nightmare.

### The Core Principle

The SDK is essentially an *optimization layer* that maps **operations** (invoke model, record prompt, capture response) to **structured artifacts** (traces, metrics, evaluations).  
It treats every interaction as a **probabilistic event**:  
- **Prompt → Distribution of Tokens**  
- **Response → Likelihood & Latency**  

By normalising these events into a common schema the SDK lets you apply **information‑theoretic** analyses (entropy, perplexity) across runs, and use them to drive automated evaluation pipelines.

### How It Works

1. **Instrumentation Hook** – wrap your model call; it automatically emits a trace node with metadata (model id, parameters).  
2. **Evaluation Engine** – after the response you invoke `opik.evaluate(...)`; the engine runs pre‑defined metrics (BLEU, ROUGE) and stores results in a time‑series DB.  
3. **Dashboard API** – a lightweight GraphQL layer exposes aggregated metrics; dashboards can be built on top of it without touching your core code.

### Non‑Obvious Insight

Most people treat the SDK as “logging”. The real power lies in its *automatic dependency graph*. Every trace node knows its parent and child, so when you later query “all calls that led to a low BLEU score”, the system can backtrack through nested prompts, agent decisions, and RAG retrieval steps—all without manual instrumentation. This graph enables causal analysis: you can pinpoint whether the issue was a prompt design flaw or a retrieval failure.

In short, the SDK turns ad‑hoc logging into an **optimisation framework** that automatically correlates execution traces with evaluation metrics, giving you instant insight into why your LLM behaves the way it does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
