---
qid: ing_6f3092ac83__faang__local
question: 'Explain: A prospective customer runs their workload on H100s. Talk me through
  when you would tell them not to move.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 507
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:03-05:00'
sources: []
---

**Clarify**  
The client is running compute‑intensive workloads (e.g., training or inference) on NVIDIA H100 GPUs. We need to decide when it’s *not* worth migrating to another platform—be it a different GPU model, cloud provider, or an on‑prem upgrade. Key assumptions:  
- Workload is GPU‑bound and latency‑sensitive.  
- The client has existing data center infrastructure and contractual obligations.  
- They value predictability of performance and cost.

**Approach**  
1. Benchmark current H100 usage (throughput, utilization).  
2. Model potential alternatives: newer GPUs (A6000, A800), cloud instances, or edge solutions.  
3. Compare total cost of ownership (TCO) over the required horizon.  
4. Evaluate risk of disruption vs incremental gains.

**Depth**  
- **Performance:** H100 offers ~80 TFLOPs FP64 and 1.6 PFLOPs TF32; if the workload already saturates these, newer models may not yield >10 % speed‑up.  
- **Cost:** On‑prem H100s amortized over 3–5 years plus power/air‑conditioning often match cloud spot pricing for sustained usage.  
- **Reliability:** Existing data center control eliminates vendor lock‑in and latency spikes that come with public clouds.  
- **Data sovereignty & compliance**: In‑house GPUs avoid cross‑border data transfer issues.

**Edge cases**  
- If the workload scales to >100 H100s, cost per GPU drops; consider cloud for elasticity.  
- Regulatory changes requiring zero‑touch data may force migration regardless of cost.  
- Rapid AI model updates that benefit from newer architectures (e.g., Hopper) could justify a move.

**Optimize & communicate**  
Present a side‑by‑side TCO chart, highlighting breakpoints where migration no longer saves money or introduces unacceptable risk. Emphasize the “no‑move” rule when:  
1. Current utilization >85 % with negligible room for improvement.  
2. Migration would incur >15 % additional operational cost or downtime.  
3. Regulatory constraints prevent moving data off‑prem.  

Conclude that staying on H100s is optimal unless a clear, quantifiable upside emerges from an alternative platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
