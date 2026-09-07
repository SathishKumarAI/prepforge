---
qid: ing_287edbfbd0__aws__local
question: 'Explain: Notebook or UI — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 391
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:13-05:00'
sources: []
---

**Situation & Task**  
When we launched *LangWatch*, an AI‑agent platform that continuously monitors language models, I was tasked with building a testing & evaluation framework so that every new agent version could be validated against real‑world user data before deployment.

**Action (Design)**  
I chose a **Notebook‑based pipeline** coupled with a lightweight web UI for live feedback.  
- **Data Ingestion:** Amazon Kinesis Data Streams captured 10 M interaction logs per day and stored them in S3 for immutable audit.  
- **Model Evaluation:** SageMaker Pipelines orchestrated batch inference on the latest model, while an EMR cluster ran custom Spark jobs to compute precision‑recall, latency, and drift metrics.  
- **Notebook Layer:** JupyterLab (managed by SageMaker Studio) allowed data scientists to iterate quickly, visualizing results in real time with matplotlib/Plotly.  
- **UI Layer:** A React dashboard on Amazon Amplify surfaced key KPIs—accuracy drop, response latency, and user‑reported sentiment—to product owners.  

**Result**  
The end‑to‑end workflow cut model validation time from 3 weeks to **2 days**, reduced post‑deployment failures by **45%**, and lowered infrastructure cost by **30%** through spot instance utilization.

**Reflection (Bar‑raiser)**  
I owned the entire pipeline, diving deep into Spark performance tuning and AWS cost models. I learned that early integration of monitoring (via CloudWatch) prevented silent drift. This experience reinforced my commitment to *Customer Obsession*—ensuring every user interaction meets our quality threshold—and *Ownership*, taking end‑to‑end responsibility for reliability and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
