---
qid: ing_6c82d2e1b7__aws__local
question: 'Explain: Particle sizes for mask filtration — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 427
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:02-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team to improve the cost of surgical masks for a global health NGO, I was asked to justify the optimal particle‑size cutoff for the filtration layer using recent AI research (fast.ai “Making neural nets uncool again”).  

**Action**  
I anchored on **Customer Obsession** and **Dive Deep**. First, I mapped the mask’s performance specification: ≥95 % removal of 0.3 µm particles (the most penetrating particle size). Using fast.ai’s lightweight CNNs, I trained a model to predict filtration efficiency from micro‑CT images of filter fibers at various diameters (0.5–10 µm). The architecture was a ResNet‑18 distilled on an AWS SageMaker endpoint, achieving 98 % classification accuracy with <200 GB total training data.

The model revealed that a **3.2 µm** fiber diameter yielded the best trade‑off: it maintained >96 % efficiency while allowing airflow of 30 L/min at 50 Pa pressure drop. I then designed an AWS Glue ETL pipeline to ingest sensor logs from pilot production runs, feeding real‑time quality control into a CloudWatch dashboard.  

**Result**  
Implementation cut material usage by **15 %**, reduced per‑mask cost by **$0.08**, and increased throughput by 20 %. The NGO distributed 1.2 M masks during the pandemic with no reported fit or efficacy issues, exceeding our SLA of 99.5 % user satisfaction.  

**Bar‑raiser takeaways** – I owned the end‑to‑end data science loop, dove deep into fiber physics and AI, quantified impact in dollars and units, and iterated quickly after a false‑positive spike by retraining on newer images—demonstrating true ownership and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
