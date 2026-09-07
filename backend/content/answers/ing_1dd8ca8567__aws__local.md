---
qid: ing_1dd8ca8567__aws__local
question: 'Explain: Queue-Based Architecture — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 498
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:01-05:00'
sources: []
---

**Question:** *Explain Queue‑Based Architecture for LLM infrastructure.*

---

### Leadership Principles  
- **Customer Obsession** – delivering fast, reliable inference to end‑users.  
- **Ownership** – owning the entire inference pipeline from ingestion to response.

### Situation & Task  
At my last role I was tasked with scaling an on‑prem LLM service that served 5 k requests/second (RPS). The latency hit 350 ms and cost ballooned due to idle GPU slots. I owned the redesign of the request flow.

### Action  
1. **Decouple** compute from request ingestion: introduced **Amazon SQS FIFO queues** for each model version, guaranteeing order & deduplication.  
2. **Micro‑services** (Python/Flask) poll the queue and forward batches to **Amazon SageMaker endpoints** with GPU p3.xlarge instances.  
3. Implemented a **dynamic scaling policy** via CloudWatch metrics: scale `mls-endpoint` up when `ApproximateNumberOfMessagesVisible > 2000`, down after 5 min idle.  
4. Added a **retry & dead‑letter queue** (SQS DLQ) for failures, ensuring no request loss.  

### Result  
- Latency dropped from 350 ms to **120 ms** (avg), 66 % reduction.  
- GPU utilization rose from 30 % to **85 %**, cutting monthly cost by **$18k** while maintaining a 99.9 % SLA.  
- The queue‑based model now supports 20 k RPS with graceful backpressure.

### What the Bar‑raiser Looks For  
- **Ownership:** Ended up responsible for the whole system, not just a component.  
- **Dive Deep:** Quantified latency, GPU utilization, cost; tuned scaling thresholds.  
- **Quantified Impact:** Concrete numbers on latency & spend.  
- **Learning from Failure:** Implemented DLQ to capture and analyze failures, feeding into continuous improvement.

---

*This architecture aligns with AWS services (SQS, SageMaker, CloudWatch) while balancing scalability, availability, and cost—exactly the kind of end‑to‑end ownership Amazon expects.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
