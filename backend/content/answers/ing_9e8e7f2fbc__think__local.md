---
qid: ing_9e8e7f2fbc__think__local
question: 'Explain: 🤝 Contributing — GitHub - comet-ml/opik: Debug, evaluate, and
  monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 514
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:34:28-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is being asked?* The user wants an explanation of a specific GitHub repository: `comet-ml/opik`.  
- *Assumptions:* They’re familiar with GitHub and LLM workflows but may not know what “debug, evaluate, monitor” entails. Assume they want a concise overview rather than a line‑by‑line walk‑through.

**2️⃣ Adopt a mental model**  
Use the **“Purpose → Features → Usage”** framework:  
- Purpose: why the repo exists.  
- Core features (tracing, evaluation, dashboards).  
- How to use it in practice (installation, integration with LLMs/RAG).

**3️⃣ Step‑by‑step reasoning**  

1. Identify the repository’s description and README – they usually contain a mission statement.  
2. Extract key terms: “debug”, “evaluate”, “monitor”, “LLM applications”, “RAG systems”, “agentic workflows”.  
3. Map those to common concepts:  
   - *Debug* → runtime tracing, error logs.  
   - *Evaluate* → automated metrics (e.g., accuracy, latency).  
   - *Monitor* → dashboards, alerts.  
4. Note the tech stack: likely Python, FastAPI/Streamlit for dashboards, integration with Comet‑ML SDK.  
5. Summarize how a user plugs it into their pipeline: wrap model calls with `opik.trace(...)`, run evaluation scripts, view results on the dashboard.

**4️⃣ Avoid common traps**  

- Don’t over‑interpret vague terms; stick to what the repo actually offers.  
- Beware of conflating “agentic workflows” with any chatbot—clarify it means autonomous agents orchestrated by LLMs.  
- Skip deep dives into code unless asked; keep explanation high‑level.

**5️⃣ Sanity‑check & verbalize**  

- Verify that each feature I mention is present in the README or docs.  
- Rephrase in plain English: “Opik gives you a plug‑and‑play way to see what’s happening inside your LLM pipeline, score it automatically, and keep an eye on it with live dashboards.”  
- If any point feels unsupported, note that it’s inferred from typical practices rather than explicit repo content.

Follow this structure whenever explaining a technical repo or tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
