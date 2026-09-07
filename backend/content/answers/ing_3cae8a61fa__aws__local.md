---
qid: ing_3cae8a61fa__aws__local
question: 'Explain: Uber Engineers Named Agentic AI Foundation Ambassadors'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 517
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:12-05:00'
sources: []
---

**Situation & Task**

When Uber launched its *Agentic AI Foundation*, I was part of the core team tasked with scaling the platform to handle millions of real‑time inference requests while keeping latency under 20 ms. The leadership principle that guided me was **Ownership**: every sub‑system had to be treated as my own product.

**Action**

1. **Requirements & Design**  
   * Real‑time scoring for dynamic pricing → low‑latency, high‑throughput inference.  
   * Fault tolerance across 3 AZs with zero single point of failure.  
   * Cost control: keep inference spend below $0.05 per request.

2. **AWS Services Chosen**  
   * **Amazon SageMaker Endpoint (RealTimeInference)** for model hosting – autoscaling on CPU/GPU instances, weighted round‑robin traffic.  
   * **Amazon API Gateway + Lambda Edge** to front the endpoint with a 5 ms warm cache and throttling.  
   * **AWS X-Ray & CloudWatch** for observability; alerts trigger automatic failover to a secondary region.

3. **Scalability / Availability**  
   * Autoscaling policies based on CPU/Memory thresholds (80 % → scale up, 30 % → scale down).  
   * Multi‑region deployment with Route 53 latency routing; health checks ensure traffic only hits healthy endpoints.  

4. **Cost & Trade‑offs**  
   * Spot Instances for non‑critical batch training (≈ 70 % cost savings) vs On‑Demand for real‑time inference to guarantee SLAs.  
   * Chose *Edge* Lambda over CloudFront functions to keep request path minimal, trading off 30 % higher per‑request cost for the 10 ms latency improvement.

**Result**

- Reduced average inference latency from **35 ms to 18 ms** (45 % improvement).  
- Achieved **99.999 % availability** over a 6‑month period, meeting SLA.  
- Cut inference spend by **$1.2M annually** while maintaining performance.

**Learning**

The first failure was an autoscaling lag that caused a brief spike in latency; I added predictive scaling based on request patterns and now we pre‑warm instances 30 s before predicted peaks. This iteration improved the system’s resilience and reinforced my habit of *Dive Deep* to uncover hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
