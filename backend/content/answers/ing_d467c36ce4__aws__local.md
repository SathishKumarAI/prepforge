---
qid: ing_d467c36ce4__aws__local
question: 'Explain: 1.1.2.2. Classification — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 441
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:29-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*

**Situation & Task**  
I was tasked to prototype a fraud‑detector for a payments platform that needed to classify transactions in real time with ≤ 0.5 % false positives while handling 200k events/sec.

**Action (Technical)**  
1. **Requirements:**  
   - Binary classification, low latency (< 10 ms).  
   - Feature set: 50 numeric + 20 categorical hashed features.  

2. **Design & AWS Services:**  
   - Pre‑process in **AWS Lambda** to embed categorical data via one‑hot hashing.  
   - Deploy a **scikit‑learn LogisticRegression (C=1.0)** model on an **Amazon SageMaker Endpoint** using the *Linear Learner* algorithm for fast inference.  
   - Use **Auto Scaling Groups** with GPU‑less instances (t3.medium) to keep cost <$10/hr; leverage **AWS X-Ray** for latency tracing.

3. **Dive Deep – Metrics:**  
   - Trained on 1M labeled samples → AUC = 0.987, FPR = 0.48% at 95th percentile threshold.  
   - Live test: 200k events/sec, 9.7 ms avg latency, 99.8% uptime over a month.

4. **Bias for Action & Ownership:**  
   I rolled out the model within 3 weeks and set up A/B testing against legacy rule‑based engine, reducing fraud losses by 18% YoY while cutting manual review time by 30%.

**Result (Quantified Impact)**  
- Fraud loss ↓ $1.2M/year, operational cost ↓ $15k/month.  
- Earned “Customer Obsession” commendation from the Head of Security.

**Bar‑raiser Takeaway** – Demonstrated ownership, deep technical dive, and a clear, data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
