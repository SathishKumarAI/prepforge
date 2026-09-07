---
qid: ing_e436b05b20__aws__local
question: 'Explain: Output ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 397
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:44-05:00'
sources: []
---

**Situation / Task**  
I was asked to reduce inference latency for a large‑language‑model (LLM) serving 10 k concurrent users in a production web app. The baseline model used full‑sequence attention and had ~350 ms per token, which caused SLA violations.

**Action**  
1. **Dive Deep & Ownership:** I profiled the transformer stack on AWS Inferentia and identified that the quadratic cost of global self‑attention was the bottleneck.  
2. **Invent & Simplify – Paged Attention (vLLM):** Implemented vLLM’s *paged attention* where only a sliding window of tokens is kept in GPU memory; past context is offloaded to NVMe SSD shards.  
3. **AWS Services:** Deployed the model on **Amazon SageMaker Edge Manager** with **Inference Pipelines** and used **S3** for the token cache, leveraging **EFS** for low‑latency shared storage across multi‑node inference clusters.  
4. **Bias for Action & Deliver Results:** Rolled out a canary of 200 requests per second; monitored latency and error rates via CloudWatch.

**Result**  
- Latency dropped from 350 ms to **120 ms per token** (≈65 % reduction).  
- Throughput increased from 1.2k req/s to **4.8k req/s**, meeting the SLA with a 99.9 % success rate.  
- Cost savings of ~30 % by reducing GPU hours and storage tiering.

**Bar‑raiser focus:** Ownership in redesign, deep profiling, quantified impact (latency/throughput), and lessons learned—vLLM’s paged attention proved the right trade‑off between memory use and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
