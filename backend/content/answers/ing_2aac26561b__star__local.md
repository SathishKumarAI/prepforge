---
qid: ing_2aac26561b__star__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 303
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:27-05:00'
sources: []
---

**Situation**  
Last quarter our cloud provider’s LLM inference cost surged from $45k to $90k a month while user traffic stayed steady at ~1.2M requests. The billing dashboard showed a sudden spike in compute hours, but the request logs were unchanged.

**Task**  
I had to pinpoint the root cause of the doubled bill and bring costs back below $50k without hurting latency or accuracy.

**Action**  
First, I compared per‑request cost metrics across all regions using CloudWatch and our internal billing API. The spike was concentrated in the US‑East region where we’d recently migrated a new model version. I pulled the request logs, noticed an increase in batch size from 8 to 32 tokens per call—a configuration drift. Then I rolled back the parameter change, re‑deployed the earlier config, and enabled CloudWatch Alarms on `InferenceCostPerHour`. To prevent recurrence, I added a CI gate that validates any model hyperparameter change against a cost budget.

**Result**  
The bill dropped to $48k within 24 hours, and latency improved by 12%. I also reduced the monthly cost‑per‑request from $0.037 to $0.019. The incident taught me the importance of coupling every model tweak with an automated cost guardrail and monitoring baseline metrics before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
