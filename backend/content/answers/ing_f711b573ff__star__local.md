---
qid: ing_f711b573ff__star__local
question: 'Explain: The Systems Engineer''s Reality (Latency Budgets)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 315
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:39-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time recommendation engine for a mobile game. In production, the end‑to‑end request latency had to stay below 120 ms or users would experience noticeable lag during gameplay.

**Task**  
I was tasked with designing and maintaining a latency budget that allowed us to iterate on new ML models without breaking the 120 ms threshold, while still meeting accuracy targets.

**Action**  
First, I instrumented every microservice with OpenTelemetry, capturing request, processing, and inference times. Using Grafana dashboards, we identified that model inference was consuming ~70 % of the budget. To trim this, I moved the TensorFlow Serving cluster to a GPU‑optimized node pool and introduced ONNX runtime for faster execution. I also implemented batch‑processing at the edge: grouping up to 32 requests before sending them to the model server, which reduced per‑request overhead by ~15 ms. Finally, I set up an automated alerting rule that flagged any latency spike above 10 % of the budget, triggering a rollback script.

**Result**  
These changes brought average request latency down to 90 ms (a 25 % improvement) while keeping precision within 0.8 % of our target F1 score. I learned that rigorous monitoring and a clear, enforceable latency budget are as critical for ML systems as accuracy metrics themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
