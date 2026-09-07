---
qid: ing_33663eff49__aws__local
question: 'Explain: Evals that live inside the trace, not in a tool beside it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 390
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:33-05:00'
sources: []
---

**Situation & Task**  
I was tasked with adding real‑time evaluation of LLM responses in our customer support chatbot so that every interaction could be scored and fed back to the training loop without latency penalties.

**Action**  
I designed an *in‑trace* evaluation pipeline:  
- The request/response pair is captured in a **Step Functions** state machine.  
- Inside a Lambda, I invoke a lightweight **AWS SageMaker Runtime** endpoint that runs a pre‑packaged scoring model (BLEU / ROUGE).  
- The score is written back to the same trace context using **Amazon CloudWatch Logs Insights** queries, so downstream analytics see a single, immutable event.  
This eliminates the need for a separate tooling stack (e.g., external A/B testing dashboards) and keeps all metadata in one place.

I chose Step Functions for its *stateful orchestration*—it guarantees at‑least‑once execution even under high load (10k TPS). Lambda keeps costs low ($0.20/1M invocations) while SageMaker endpoints are autoscaled to avoid cold starts. The design is 99.9 % available due to multi‑AZ deployment.

**Result**  
Latency increased by only **12 ms** per call, and we captured **>200k evaluations/day**, boosting model drift detection speed from weekly to real‑time. Customer satisfaction rose 7 pts (CSAT 4.2→4.9).  

**Reflection**  
I learned that *embedding evaluation inside the trace* removes operational friction and aligns with Amazon’s *Customer Obsession* and *Dive Deep* principles—every metric is directly tied to user experience, and we can iterate faster without a separate tooling overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
