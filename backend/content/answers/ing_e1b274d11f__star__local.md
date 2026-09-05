---
qid: ing_e1b274d11f__star__local
question: Tell me about a time an AI feature failed in production. What happened and
  what did you change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 304
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:07-05:00'
sources: []
---

**Situation** – In our e‑commerce recommendation engine, we deployed a new transformer‑based model to personalize product suggestions during the holiday season. The live traffic was 12 M requests per day and any latency spike could push cart abandonment up by 2–3%.

**Task** – I had to investigate why the new model was causing a 150 ms increase in response time on 35% of requests, while keeping accuracy gains (10% lift in click‑through) intact.

**Action** – First, I instrumented the inference pipeline with OpenTelemetry and identified that GPU memory fragmentation in PyTorch’s `torchscript` runtime was triggering frequent CPU offloads. I switched to a TorchServe deployment using TensorRT for static graph optimization, added dynamic batching (batch size 32), and reduced precision from FP32 to INT8 after verifying minimal accuracy loss. I also set up a canary rollout with A/B testing and added an automatic rollback trigger if latency exceeded the SLA.

**Result** – Latency dropped back to 45 ms on all traffic, while click‑through remained at +9%. The system now handles 20 M requests/day without degradation, and we documented a new deployment checklist that includes GPU profiling before production. I learned that profiling in staging isn’t enough; real‑world inference can expose subtle hardware‑software mismatches that only show under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
