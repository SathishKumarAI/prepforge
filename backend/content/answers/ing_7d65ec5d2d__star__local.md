---
qid: ing_7d65ec5d2d__star__local
question: 'Explain: Workflows vs LangGraph — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:38-05:00'
sources: []
---

**Situation** – At my previous company we had a quarterly client‑reporting pipeline that pulled data from multiple APIs, ran NLP summarization with LlamaIndex, and shipped PDFs to stakeholders. The existing workflow was a hand‑crafted Airflow DAG: each task was a separate Python operator, and we struggled with latency spikes when the summarizer ran on long documents.

**Task** – I needed to reduce end‑to‑end latency by 30 % while keeping the codebase maintainable, and also make it easier for data scientists to tweak prompt templates without redeploying Airflow.

**Action** – I replaced the DAG with a LangGraph graph built atop LlamaIndex. Each node represented a logical step (data fetch → chunking → embed → query). Using LangGraph’s dynamic routing, I added a “fallback” branch that switched to a lighter summarizer when document length exceeded 5 k tokens. I also exposed prompt templates as external JSON files so researchers could edit them in real time; the graph watched for changes and hot‑reloaded without restarting. For orchestration I wrapped LangGraph in a lightweight FastAPI endpoint, letting Airflow trigger it via an HTTP call.

**Result** – Latency dropped from 8 s to 5 s on average (38 % improvement), and we cut the number of moving parts by 70 %, reducing deployment friction. The team now iterates on prompts in minutes instead of days, and I learned how LangGraph’s graph semantics can replace rigid DAGs for NLP‑heavy pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
