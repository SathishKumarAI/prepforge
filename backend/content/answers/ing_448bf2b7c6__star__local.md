---
qid: ing_448bf2b7c6__star__local
question: 'Explain: 🔍 Evaluating your LLM Applications — GitHub - comet-ml/opik: Debug,
  evaluate, and monitor your LLM applications, RAG systems, and agentic workflows
  with comprehensive tracing, automated evaluations, and production-ready dashboards.
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 283
output_tokens: 334
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:06-05:00'
sources: []
---

**Situation:**  
In my last role I led a project to launch an RAG‑powered FAQ chatbot for our customer support portal. By the end of Q2, user satisfaction was dropping because the bot’s responses were often irrelevant or stale.

**Task:**  
I needed to set up continuous evaluation and monitoring so we could identify failures in real time, measure precision/recall against a curated test set, and surface insights for rapid iteration—all without disrupting live traffic.

**Action:**  
I integrated the comet‑ml/opik library into our deployment pipeline. First, I instrumented each request with `opik.track` to capture prompt, retrieved documents, and LLM output. Using Opik’s automated evaluation hooks, I defined a custom metric that scored answers against ground truth using BLEURT and cosine similarity of embeddings from Sentence‑Transformers. I then built an internal dashboard in Grafana connected to Opik’s event stream, visualizing latency, success rates, and drift scores per endpoint. When the bot hit a 30% drop in relevance, the alerts triggered a rollback to a previous checkpoint and queued a retraining job.

**Result:**  
Within two weeks of deployment, our bot’s precision rose from 62 % to 84 %, user satisfaction climbed 15 points on Net Promoter Score, and we cut debug time by 70 %. I learned that embedding‑based metrics coupled with real‑time tracing give the most actionable visibility into LLM behavior in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
