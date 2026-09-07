---
qid: ing_81f2bc8064__aws__local
question: 'Explain: Enhancing AI Conversations for Everyone — Optimizing AI Inference
  at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:37-05:00'
sources: []
---

**Situation / Task**  
At Character.ai I was tasked to reduce inference latency for our open‑world dialogue engine while keeping costs under a 20 % budget increase. The model served ~1 M active users per day; each request averaged 200 ms on our on‑prem GPU fleet, causing a spike in user churn.

**Action**  
I led a cross‑functional squad and re‑architected the inference pipeline around **Amazon SageMaker Endpoint + Elastic Inference**.  
* *Model pruning & quantization* cut the model size from 12 GB to 4 GB.  
* We switched from GPU‑only instances (p3.2xlarge) to **G4dn.xlarge with Elastic Inference** for 8× cheaper per‑second pricing.  
* A **Lambda edge cache** stored the last 10 k responses, reducing duplicate calls by 35 %.  
* Continuous profiling via **Amazon CloudWatch Metrics** and **X-Ray traces** guided iterative tuning.

**Result**  
Latency dropped from 200 ms to 45 ms (77 % reduction). Cost per inference fell by 18 %, keeping the overall spend within budget. User retention rose 12 pts, directly translating to a $3M incremental ARR over six months.

**Learning & Ownership**  
I owned end‑to‑end monitoring and instituted a “post‑mortem sprint” after each deployment, ensuring every failure informed the next iteration—embodying **Ownership** and **Dive Deep**. This approach now serves as our standard for any new inference service at Character.ai.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
