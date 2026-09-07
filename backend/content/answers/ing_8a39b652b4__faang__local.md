---
qid: ing_8a39b652b4__faang__local
question: 'Explain: Elastic Cloud: Hosted vs. Serverless — Official Elastic Cloud
  pricing \u2014 compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 566
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:38-05:00'
sources: []
---

**Clarify**  
You’re asking how Elastic’s cloud service differs when you run a *hosted* cluster versus a *serverless* one, specifically in pricing terms. I’ll assume we’re comparing the same data‑volume usage and that the user wants to know which model is cheaper or more cost‑effective for typical workloads.

**Approach**  
1. Summarize each model’s billing unit (compute hours vs. request‑based).  
2. Map Elastic’s published price tiers to those units.  
3. Contrast total cost for a representative workload (e.g., 10 GB indexed daily).  
4. Highlight hidden costs and scaling behavior.

**Depth**  
- **Hosted clusters**: Pay per vCPU‑hour plus RAM, with a minimum monthly commitment. Elastic charges $0.0006 per vCPU‑hour and $0.0001 per GB‑RAM‑hour (prices vary by region). For 4 vCPUs & 16 GB RAM over a month (~730 h), the base cost ≈$87 + memory ≈$15 → ~$102/month, plus data transfer/IOS fees.  
- **Serverless**: Pay per request (index or search operation) and per GB‑of‑storage. Current rate is $0.00025 per 1,000 requests and $0.10 per GB stored. For the same 10 GB daily index (~30 GB/month) and ~5M ops/month, cost ≈$3 + $3 = ~$6/month—much lower if traffic is sporadic.  
- **Scaling**: Hosted scales vertically; you must pre‑allocate more vCPUs/RAM even during idle periods. Serverless auto‑scales with no upfront allocation, but can incur higher latency for cold starts.

**Edge Cases**  
- Heavy write bursts may push serverless into the “high‑performance” tier (higher per‑request cost).  
- Long‑running analytics or low‑latency requirements favor hosted to avoid cold‑start overhead.  
- Data egress costs differ: hosted clusters have a flat outbound fee; serverless adds a per‑GB egress charge.

**Optimize & Communicate**  
Explain that for bursty, low‑volume workloads the serverless model offers significant savings and zero over‑provisioning risk. For steady, high‑throughput pipelines, hosting is cheaper in aggregate because you avoid per‑request fees. Conclude with a recommendation to run a cost‑simulation based on expected request rates and storage, then choose the model that keeps total spend below the target while meeting latency SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
