---
qid: ing_7e79e10a50__aws__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 493
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:20-05:00'
sources: []
---

**Situation (S)**  
After a nightly deploy of our GPT‑4 inference microservice on **ECS Fargate**, the p99 latency for the LLM endpoint jumped from 320 ms to 640 ms. The model weights and codebase were identical, so I had to trace the change in infrastructure.

**Task (T)**  
Restore sub‑350 ms p99 latency while ensuring no regressions in throughput or cost.

**Action (A)**  

1. **Dive Deep into Observability** – Enabled CloudWatch metrics for *CPUUtilization*, *MemoryUtilization*, and *ECS task launch time*. Added OpenTelemetry traces to capture per‑request pipeline stages.
2. **Identify Bottleneck** – Traces revealed a 250 ms spike in the **pre‑processing** container’s `torchscript` inference layer, coinciding with a recent update of the **AWS Nitro Enclave** runtime used for secure weight loading.
3. **Validate Hypothesis** – Replaced the Nitro Enclave with a standard Fargate task; latency dropped back to 330 ms. Confirmed that the enclave’s **cold‑start** overhead was responsible.
4. **Fix & Optimize** – Implemented a **pre‑warm strategy**: on deployment, launch 2 dummy tasks that load weights into shared EFS and signal readiness via SNS. Updated ECS task definition to use *awsvpc* networking for better isolation.
5. **Cost/Availability Trade‑off** – Added 0.25 vCPU per pre‑warm task (≈$0.003/hr) versus the potential $0.01/hr saved by avoiding SLA penalties.

**Result (R)**  
p99 latency returned to 320 ms, throughput remained at 1,200 requests/sec, and cost impact was negligible (<0.05 %).  

---

> **Leadership Principles Highlighted:** *Customer Obsession* – rapid resolution for end‑users; *Dive Deep* – rigorous metric analysis; *Ownership* – full responsibility for post‑deploy stability.

> **Bar‑raiser cues:** Demonstrated ownership, deep technical insight, quantified impact, and a clear learning loop (pre‑warm strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
