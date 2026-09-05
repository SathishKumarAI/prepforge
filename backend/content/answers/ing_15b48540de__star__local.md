---
qid: ing_15b48540de__star__local
question: 'Explain: The Mental Model — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 400
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:44-05:00'
sources: []
---

**Situation** – At my previous company we were tasked with building an automated customer‑support chatbot within a three‑month sprint. The team was split between data scientists, backend engineers, and product managers, each speaking a different language: “model accuracy,” “API latency,” or “UX flow.”  
**Task** – I had to orchestrate the entire AI coding workflow so that every stakeholder could see how their work fit into the final product, reduce hand‑off friction, and keep the project on schedule.  
**Action** – I adopted Neo Kim’s “Mental Model” framework:  
1. **Define the problem space** – wrote a concise user story with acceptance criteria.  
2. **Design data pipeline** – used Airflow DAGs to pull logs from our CRM, preprocess with Pandas, and store in BigQuery.  
3. **Model training loop** – scripted a reproducible PyTorch pipeline on Vertex AI, tracking hyper‑parameters with MLflow.  
4. **Evaluation & monitoring** – built a real‑time dashboard (Grafana) that plotted F1‑score, latency, and drift metrics; set alerts for any degradation.  
5. **Deployment** – containerized the model with Docker, deployed to GKE via Helm charts, and exposed it through an internal API gateway.  
6. **Feedback cycle** – scheduled weekly demo sessions where developers could see live predictions, allowing rapid iteration on intent classification.  
**Result** – The chatbot launched two weeks early, achieved 87 % intent‑recognition accuracy after the first month, and cut average ticket resolution time by 30 %. I learned that visualizing the entire AI workflow as a single mental model dramatically improves cross‑functional collaboration and keeps projects on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
