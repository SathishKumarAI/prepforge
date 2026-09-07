---
qid: ing_dab2e9a093__aws__local
question: 'Explain: Round 1: Practical LLM coding (45 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 422
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:41-05:00'
sources: []
---

**Answer – Practical LLM Coding (45 min)**  

> *Leadership Principles:* **Customer Obsession & Ownership**

**Situation / Task:**  
I was asked to build a lightweight chatbot that could answer product‑support questions on our e‑commerce site in real time, with < 200 ms latency for 95% of requests.

**Action (Technical):**  
1. **Requirements:** Stateless API, horizontal scaling, low cost.  
2. **Design:**  
   * **Model:** DistilBERT fine‑tuned on our FAQ corpus – ~40 M params, < 200 MB.  
   * **Inference Service:** Docker container behind an AWS Lambda layer (Python 3.9) using `pytorch` + `transformers`.  
   * **Orchestration:** API Gateway → Lambda → SQS for burst handling.  
   * **Caching:** ElastiCache‑Redis for frequent queries; TTL 5 min.  
   * **Monitoring:** CloudWatch metrics (latency, error rate) + SNS alerts.  

3. **Scalability & Cost:**  
   * Auto‑scaling Lambda concurrency to 5000 → cost ≈ $0.20/hr vs on‑prem GPU ($150/hr).  
   * Estimated annual savings: ~$120k.

**Result (Data):**  
- Latency < 180 ms for 97% of traffic.  
- Query accuracy 92% (BLEU score) compared to baseline rule‑based system.  
- Customer satisfaction +15 points in post‑interaction surveys.  

**Reflection:** I learned that a smaller, well‑tuned model can outperform larger ones when paired with smart infrastructure. The bar‑raiser will note my end‑to‑end ownership, dive deep into latency trade‑offs, and quantified impact on cost & CX.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
