---
qid: ing_03a3dab113__fp__local
question: 'Can I self-host Opik? — GitHub - comet-ml/opik: Debug, evaluate, and monitor
  your LLM applications, RAG systems, and agentic workflows with comprehensive tracing,
  automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 435
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:09-05:00'
sources: []
---

**Can you self‑host Opik?**  
Yes – Opik is an *open‑source* tracing & evaluation stack that can run on your own servers or cloud VMs. The core of the project is a lightweight Python API (pip‑installable) that writes traces to a PostgreSQL database, while the web UI is a React app served by a FastAPI backend. Because all code lives in a single GitHub repo and the only external dependencies are standard libraries, you can spin it up locally or in any Kubernetes cluster without vendor lock‑in.

**Why it must be self‑hosted for production use**  
1. **Data sovereignty:** LLM logs often contain proprietary prompts or user data; keeping them on premises avoids third‑party access.  
2. **Latency & cost:** A local deployment eliminates network hops and recurring SaaS fees, especially when ingesting millions of traces per day.  
3. **Extensibility:** The open API lets you plug custom evaluation metrics, augment the UI with new dashboards, or integrate with internal monitoring tools.

**Non‑obvious insight**  
Opik’s design deliberately keeps the “trace writer” stateless: each trace is a single SQL insert. This means you can horizontally scale writes by sharding the database and routing traces to different replicas, something that would be impossible if the writer held in‑memory state or used a message queue that required round‑trips.

**Quick setup**  
```bash
git clone https://github.com/comet-ml/opik.git
cd opik && pip install -e .
export POSTGRES_URL=postgresql://user:pass@localhost/db
opik-server start   # starts FastAPI + React dev server
```
For production, Docker‑compose or Helm charts are available in the repo; just adjust `POSTGRES_URL`, enable TLS, and you’re good to go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
