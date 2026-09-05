---
qid: ing_1035b1e75d__star__local
question: 'Explain: Quick Glossary — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 361
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:36-05:00'
sources: []
---

**Situation:**  
In my last role as a senior ML engineer, we were onboarding a new product line that required rapid prototype development. The team was split between data scientists who loved building models in Python and devops engineers who needed clear instructions to deploy them into production. We realized there was a disconnect: everyone spoke different “AI languages.”  

**Task:**  
I was tasked with creating an internal “Quick Glossary – AI Coding Workflow” that would map every step from model design to deployment, so both sides could talk the same language and reduce turnaround time by 30%.  

**Action:**  
I first mapped out the full pipeline: **Data Ingestion → Feature Engineering → Model Training → Validation → Packaging → CI/CD → Monitoring**. For each stage I added concrete tools (Pandas, Scikit‑learn, Docker, Kubernetes, Prometheus) and defined responsibilities. I used a living Markdown document hosted on GitHub with code snippets, example Dockerfiles, and a simple “workflow diagram” in Mermaid syntax so visual learners could grasp it instantly. I also set up a short 15‑minute workshop where we walked through the glossary while pulling a toy model from scratch to production.  

**Result:**  
After rollout, deployment cycles dropped from 10 days to 6 days—a 40% reduction—and the cross‑team survey score for clarity jumped from 3.2/5 to 4.7/5. I learned that a concise, tool‑centric glossary can break down complex AI pipelines into actionable steps and dramatically speed up collaboration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
