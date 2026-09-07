---
qid: ing_ca4e3794c3__aws__local
question: 'Explain: Common technical questions — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 477
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:52-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

> **Situation:** I was interviewing for a ML Engineer role at Glean and had to demonstrate how I’d tackle the most asked technical questions—model selection, bias detection, deployment pipelines, and scaling inference.

> **Task:** Build a concise “cheat‑sheet” that maps each question to a concrete solution, metrics, and AWS services, so interviewers see real impact.

> **Action:**  
> 1. **Model Choice** – I framed the trade‑off between *XGBoost* vs *Transformer* using a micro‑benchmark (accuracy + inference latency).  
> 2. **Bias Mitigation** – Showed how to compute disparate impact with `AIF360`, then applied re‑weighting, reducing bias score from 0.32 to 0.12 while keeping F1‑score at 0.84.  
> 3. **Deployment Pipeline** – Proposed a CI/CD flow: Code in GitHub → Build in CodeBuild → Model training on SageMaker Training Jobs (spot instances) → Packaging with Docker → Deploy to SageMaker Endpoint (multi‑model endpoint).  
> 4. **Scalability & Cost** – Leveraged SageMaker *Inference Scheduler* for burst traffic, Auto Scaling, and spot inference to cut $1k/month.  
> 5. **Monitoring** – Integrated CloudWatch + Evidently for A/B tests, ensuring drift alerts with a 99.9% SLA.

> **Result:** The cheat‑sheet was adopted by the hiring team; I received an offer with a 12 % higher signing bonus and a 15 % increase in projected yearly savings from the proposed architecture.

**Bar‑raiser cues I met:**  
- *Ownership* – I own the full ML stack, not just model code.  
- *Dive Deep* – I quantify bias scores, latency, cost, and provide concrete AWS services.  
- *Learned from failure* – After an initial 2× inference lag, I tuned batch size & used a multi‑model endpoint to resolve it, documenting the iteration in a post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
