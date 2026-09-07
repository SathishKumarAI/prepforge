---
qid: ing_f6f690e24a__aws__local
question: 'Explain: Model Architecture — sarvamai/sarvam-1 \u00b7 Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:35:17-05:00'
sources: []
---

**Situation & Task** – While leading a cross‑functional AI team at my previous company, we were tasked with replacing an on‑prem NLP pipeline that processed ~2 M customer queries per day. The goal was to reduce latency from 1.5 s to <200 ms while maintaining >95 % accuracy and keeping cost under $10k/month.

**Action (Architecture)** – I chose the **sarvamai/sarvam‑1** transformer model from Hugging Face, fine‑tuned on our domain data (≈800 K labeled tickets).  
* **Inference stack**:  
  * **Amazon SageMaker Neo** for model compilation to edge‑optimized kernels.  
  * **AWS Lambda + API Gateway** for stateless request handling, auto‑scaling to 0‑100k RPS.  
  * **ElasticCache (Redis)** for session caching of the last 5 K inference results.  
* **Training**: SageMaker Ground Truth → Data Wrangler → SageMaker Training on a Spot fleet (p3.8xlarge) – cost $0.90/hr, finished in 6 h.  
* **Observability**: CloudWatch metrics + OpenTelemetry for latency tracing; SageMaker Model Monitor flagged drift quarterly.

**Result** – Deployment cut average inference time to 180 ms (≈70 % improvement), cost dropped from $25k/month to $8k/month, and accuracy stayed at 96.3 %. The solution was adopted across three product lines, saving an estimated $120k annually.

---

### Leadership Principles Anchored
* **Customer Obsession** – Built a low‑latency model that improved user experience on our support portal.  
* **Ownership & Dive Deep** – Took full responsibility for end‑to‑end pipeline, from data curation to monitoring, and iterated based on real‑world metrics.

### Bar‑raiser Signals
* Demonstrated *ownership* by managing the entire ML lifecycle and post‑launch ops.  
* Showed *deep dive* through concrete AWS services chosen for cost, scalability, and resilience.  
* Quantified impact (latency, cost, accuracy) and learned from a failed first attempt that lacked caching, leading to the Redis layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
