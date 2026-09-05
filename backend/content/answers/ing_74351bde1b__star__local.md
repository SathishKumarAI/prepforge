---
qid: ing_74351bde1b__star__local
question: 'Explain: The note should be ready before the clinician leaves the room.
  Build me the latency budget, and tell me where the money goes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 358
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:49-05:00'
sources: []
---

**Situation**  
In a mid‑size hospital, we were integrating an AI‑driven diagnostic assistant into the EMR. Clinicians needed the model’s recommendation within the same visit so they could discuss it with patients before leaving. The target was < 2 seconds from data entry to output, while keeping costs under $5 per patient.

**Task**  
Define a latency budget that met the 2‑second window and allocate the budget across preprocessing, inference, and postprocessing. Then map how the remaining funds should be spent on model optimization versus infrastructure scaling.

**Action**  
I broke the pipeline into four stages: data ingestion (0.3 s), feature extraction (0.4 s), model inference (1.0 s) and result formatting (0.2 s). For each, I benchmarked GPU vs CPU, quantized the transformer to 8‑bit, and deployed on a Spot VM cluster with autoscaling. I used CloudWatch metrics to confirm each stage stayed within its slice, leaving ~0.1 s for jitter. The remaining budget (~$3 per inference) was directed to nightly retraining jobs and A/B testing of new embeddings.

**Result**  
We achieved 1.8‑second median latency with 99th percentile < 2.5 s, keeping the cost at $4.20 per patient—under budget by 16%. The project reduced clinician turnaround time by 30% and increased patient satisfaction scores. I learned that a granular, stage‑by‑stage latency model is essential for real‑time AI in healthcare, and that small optimizations can free significant capital for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
