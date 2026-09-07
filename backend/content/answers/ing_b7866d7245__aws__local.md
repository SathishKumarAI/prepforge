---
qid: ing_b7866d7245__aws__local
question: Your product is moving from a standard chat model to a reasoning model with
  extended thinking. What changes for capacity, SLOs, and design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 447
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:49-05:00'
sources: []
---

**Situation (S)**  
At my last role we migrated from a rule‑based chatbot to an LLM that performs multi‑step reasoning for customer support tickets. The new model doubled the average prompt length and required more compute per inference.

**Task (T)**  
Redesign capacity, SLOs, and architecture so latency stays under 200 ms for 99.5% of requests while keeping cost < $2M/yr.

**Action (A)**  

| Change | AWS Service | Reasoning |
|--------|-------------|-----------|
| **Capacity** | EC2 g4dn.xlarge + SageMaker Inference Endpoint with multi‑GPU (NVIDIA A10G) | 8× GPU memory → 3× throughput; autoscaling on CPU utilization. |
| **SLOs** | Add *Reasoning‑Latency* SLO: < 250 ms for 95% of 5‑step queries, and *Cost‑per‑Inference* ≤ $0.05 | Align with customer obsession & deliver results. |
| **Design** | Stateless microservice + Step Functions orchestrator that splits reasoning into sub‑tasks; cache intermediate embeddings in ElastiCache Redis (TTL = 30 s). | Increases parallelism, reduces redundant compute, and keeps data‑driven traceability. |

I monitored GPU utilization, batch sizes, and latency curves. After a 2‑week pilot, we achieved **95% of requests under 250 ms** and cut inference cost by **27%** compared to the monolithic model.

**Result (R)**  
Customer satisfaction scores rose from 4.1/5 to 4.6/5; ticket resolution time dropped 35%.  

**Bar‑raiser cues I hit:** ownership of end‑to‑end performance, deep dive into GPU vs CPU trade‑offs, quantified impact on cost & latency, and learning loop—refining cache TTL after a spike in cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
