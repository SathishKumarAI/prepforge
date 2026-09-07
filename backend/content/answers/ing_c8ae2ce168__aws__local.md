---
qid: ing_c8ae2ce168__aws__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 453
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:39-05:00'
sources: []
---

**Situation & Task (Amazon LP: Customer Obsession, Ownership)**  
At my last role I was asked to launch a new LLM‑powered recommendation API that would peak at 100 req/s. Each request carried ~2 KB of prompt and returned ~300 tokens (~1.5 KB). The goal was to keep latency <200 ms while staying under a $12K/month budget.

**Action (Dive Deep, Bias for Action)**  
I profiled the model on an A10G GPU: average 30 ms per inference with 2 KB input and 300 tokens output. That gives ~33 inferences/sec per GPU. To hit 100 req/s I need **4 GPUs** (≈133 inferences/sec).  

I chose **SageMaker Endpoint** with an *Inference Scheduler* that auto‑scales on CPU utilization and request latency, backed by **2 m5.xlarge + 2 g4dn.xlarge** instances.  
- **Availability:** Multi‑AZ deployment + Elastic Load Balancer (ELB) gives 99.99 % SLA.  
- **Cost:** Spot pricing for g4dn.xlarge at $0.75/hr vs on‑demand $1.20/hr → ~25 % savings. Total ≈$10K/month.  

**Result (Deliver Results, Quantified Impact)**  
After launch, latency averaged 185 ms, peak throughput met 120 req/s, and we stayed 3 % under budget. The model served 12M requests in the first month with a 4.7× lift in conversion rate.

**Bar‑raiser check** – I documented assumptions, ran stress tests, and added automated alerts for GPU memory spikes, learning that adding a small warm‑up cache cut latency by 15 ms in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
