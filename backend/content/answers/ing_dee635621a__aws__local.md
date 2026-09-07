---
qid: ing_dee635621a__aws__local
question: 'Explain: Interestingly, the thing that is sent to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 428
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:36-05:00'
sources: []
---

**Question:** *Explain: “Interestingly, the thing that is sent to…”*  

> **Customer Obsession & Dive Deep**

**Situation / Task**  
At my last role I built an online recommendation engine for a fashion retailer. The front‑end sends user interaction payloads (clicks, dwell time, cart additions) to our inference service. I had to clarify *exactly what data* is transmitted and why it matters.

**Action**  
1. **Define the contract** – created a JSON schema that includes only the fields needed for prediction: `user_id`, `timestamp`, `item_ids[]`, and `session_features`.  
2. **Data hygiene** – added a preprocessing Lambda to strip PII, enforce type checks, and compute derived features (e.g., time‑since‑last‑purchase).  
3. **Secure transport** – used API Gateway + Cognito for auth, TLS 1.3 for encryption, and signed requests with SigV4.  
4. **Observability** – instrumented CloudWatch metrics (`inference_latency`, `payload_size`) and set up alerts when latency > 200 ms.

**Result**  
- Reduced average payload size from **12 KB → 4 KB**, cutting bandwidth cost by **≈30%** on a 10 M request/month load.  
- Latency dropped from **350 ms to 120 ms**, improving conversion rate by **3.5pp** (from 18.2% to 21.7%).  
- Zero data‑leak incidents in the first year post‑deployment.

**Learnings** – Always ask *why* each field is sent; unnecessary data inflates costs and can expose privacy risks. The bar‑raiser looks for ownership of the data contract, depth in security design, and a clear, metric‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
