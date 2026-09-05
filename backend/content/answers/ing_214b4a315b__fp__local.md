---
qid: ing_214b4a315b__fp__local
question: 'Explain: 🛠️ Opik Server Installation — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 217
output_tokens: 612
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:05-05:00'
sources: []
---

## Why you *must* install Opik

When an LLM‑based workflow (RAG, agentic loop, or plain inference) runs in production, every request becomes a *data point*.  
To debug, evaluate, and monitor these points you need a **trace‑to‑metric pipeline** that is:

1. **Composable** – you can drop it into any framework (FastAPI, Flask, LangChain, etc.).  
2. **Transparent** – each trace records the raw prompt, model response, embeddings, and downstream metrics.  
3. **Scalable** – traces are stored in a time‑series database that supports querying at scale.

Opik implements exactly this pipeline: it instruments your code to emit OpenTelemetry spans, aggregates them into *evaluations* (e.g., BLEU, Rouge), and surfaces dashboards for real‑time inspection.  

## From GitHub to Production

1. **Clone & Install**  
   ```bash
   git clone https://github.com/comet-ml/opik.git
   cd opik
   pip install -e .
   ```
   The `-e` flag keeps the local package in sync with your edits, which is handy during iterative debugging.

2. **Configure the Server**  
   Opik ships a lightweight FastAPI server that runs on port 8000 by default.  
   ```bash
   opik-server --host 0.0.0.0 --port 8000
   ```
   The server automatically creates an SQLite database (`opik.db`) unless you point it to PostgreSQL for production.

3. **Instrument Your Code**  
   Import the Opik SDK and wrap your LLM calls:
   ```python
   from opik import init, track

   init(api_key="YOUR_OPIK_KEY")

   @track(name="rag_query")
   def query_rag(prompt):
       return llm.generate(prompt)
   ```
   The decorator captures spans and pushes them to the Opik server.

4. **Run & Visualize**  
   Open `http://localhost:8000` in your browser.  
   - *Traces* show call hierarchies.  
   - *Evaluations* auto‑run after each request (e.g., compute ROUGE against ground truth).  
   - *Dashboards* provide KPI trends (latency, error rate).

## A Non‑Obvious Insight

Most people treat Opik as a “logging” tool, but it is fundamentally an **optimization engine**.  
Every evaluation metric you define becomes a *loss function* that can be fed back into your training loop or used to trigger automated retraining pipelines.  
By integrating Opik’s tracing with a continuous‑learning workflow, you close the loop from inference → evaluation → re‑training in a single observable system—something that traditional monitoring stacks miss entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
