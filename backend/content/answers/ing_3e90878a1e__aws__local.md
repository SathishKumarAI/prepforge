---
qid: ing_3e90878a1e__aws__local
question: What do you log and trace for an LLM-backed endpoint? How is it different
  from normal API observability?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 458
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:29-05:00'
sources: []
---

**Situation / Task**  
While launching a production LLM‑backed inference service for our recommendation engine, I had to design observability that met SLA < 200 ms and 99.9% availability while keeping costs under $0.05/req.

**Action**  
I focused on **Customer Obsession** (ensure users never see hallucinations) and **Dive Deep** (root‑cause any latency or bias spikes).  
1. **Structured logs** – request ID, user ID, model version, prompt length, token count, inference latency, GPU utilization, temperature & top‑k settings, and a hash of the generated text.  
2. **Distributed tracing** – using AWS XRay with a custom `InferenceSpan` that records:  
   * pre‑processing time (tokenization)  
   * model load/eviction events (ECS/EKS task start/stop)  
   * GPU inference duration  
   * post‑processing & safety filter latency.  
3. **Metrics** – CloudWatch Alarms on `InferenceLatency.p95`, `SafetyFilterPassRate` and `ModelErrorRate`.  
4. **Alerting & dashboards** – Grafana + Prometheus (via CloudWatch) visualizes per‑model version drift.

**Result**  
Within two weeks, we reduced mean inference latency from 250 ms to 180 ms (28% improvement) and detected a safety filter failure that would have caused 3 % hallucination rate. Costs stayed below $0.04/req by auto‑scaling only when `p95` > 220 ms.

**Learnings**  
*Always log the exact prompt hash and token count; it turns cryptic “slow” alerts into actionable root causes.*  
*Balancing detail vs cost required a tiered logging strategy (high‑volume events to S3, critical spans to CloudWatch).*

Bar‑raiser cues: ownership of metrics, deep dive into trace spans, quantified latency reduction, and proactive learning from an early safety failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
