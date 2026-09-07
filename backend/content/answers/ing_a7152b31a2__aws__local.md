---
qid: ing_a7152b31a2__aws__local
question: 'Explain: Poor communication and dishonesty — Cohere Software Engineer Interview
  Experience - United States, United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 463
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:23-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked to launch an ML‑based anomaly detector that flagged fraudulent transactions in real time. The data science team was siloed; they fed the model, but we never shared performance metrics with product or ops, and the devops lead misrepresented latency numbers in stakeholder demos.

**Task (T)** – I had to surface the truth, align expectations across teams, and redesign our pipeline so that all parties saw the same data and could act on it.

**Action (A)**  
1. **Own & Dive Deep**: I pulled logs from CloudWatch, rebuilt the inference graph in SageMaker Pipelines, and produced a 30‑day ROC curve.  
2. **Bias for Action** – Built a lightweight Lambda‑driven “feedback loop” that pushed misclassifications to an S3 bucket; a Glue job refreshed the training set nightly.  
3. **Invent & Simplify** – Replaced the custom REST endpoint with API Gateway + SageMaker real‑time inference, cutting latency from 350 ms to <120 ms (30 % faster).  
4. **Customer Obsession** – Created a shared Grafana dashboard (using CloudWatch metrics) that exposed precision/recall to ops and product in real time.

**Result (R)** – Within two weeks the fraud‑rate dropped from 3.8 % to 1.2 % (≈68 % reduction), and the average false‑positive cost fell by $12K/month. Stakeholder trust increased; the devops lead now reports honest metrics quarterly, and cross‑team meetings are held bi‑weekly.

**Bar‑raiser takeaways**  
- *Ownership*: I took responsibility for the whole pipeline, not just my component.  
- *Dive Deep*: Quantified the issue with real metrics and transparent dashboards.  
- *Learned from failure*: The initial misreporting taught me to automate metric collection early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
