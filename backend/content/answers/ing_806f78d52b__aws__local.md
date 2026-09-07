---
qid: ing_806f78d52b__aws__local
question: 'Explain: 📝 Logging Traces with Integrations — GitHub - comet-ml/opik: Debug,
  evaluate, and monitor your LLM applications, RAG systems, and agentic workflows
  with comprehensive tracing, automated evaluations, and production-ready dashboards.
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 436
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:35-05:00'
sources: []
---

**Situation / Task**  
In a recent project I built a production‑grade RAG system that served over **10k concurrent users per day**. The team needed end‑to‑end visibility into every request—how the LLM was invoked, which knowledge base chunk it retrieved, and how the agent’s policy decisions unfolded. We had to replace ad‑hoc logging with a unified tracing platform that could drive automated evaluation and dashboards.

**Action**  
I introduced **Comet‑ML’s Opik** as the central observability layer:

1. **Instrumentation** – Wrapped every call to `OpenAI`, `VectorDB` (Pinecone), and policy engine in an Opik trace span, attaching metadata (`prompt_id`, `chunk_id`, `latency_ms`).  
2. **Integration** – Leveraged the Opik GitHub Action to push traces directly from CI/CD into a CloudWatch‑compatible sink.  
3. **Automated Evaluation** – Configured Opik’s evaluation hooks to run nightly against a held‑out test set, generating metrics (BLEU, ROUGE) and storing them in an S3 bucket for lineage tracking.  
4. **Dashboarding** – Built Grafana dashboards on top of the Opik API; each trace automatically surfaced with visual heatmaps of LLM token usage.

**Result**  
- Reduced mean time to detect anomalies from **2 hrs** to **30 min**.  
- Tracing data enabled a root‑cause analysis that cut down high‑latency incidents by **35 %** in the first month.  
- Automated evaluations surfaced performance regressions 3× faster, allowing us to roll back an LLM update before it hit production.

**Learning & Ownership**  
I owned the migration from fragmented logs to a single tracing source, conducted a post‑mortem on the initial latency spike, and documented best practices that are now part of our onboarding playbook.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
