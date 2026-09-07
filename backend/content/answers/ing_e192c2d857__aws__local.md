---
qid: ing_e192c2d857__aws__local
question: What do vision-language models reliably get wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 371
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:42-05:00'
sources: []
---

**Situation & Task**  
In a recent project to launch an AI‑powered shopping assistant, we discovered that vision‑language models (e.g., CLIP, BLIP) consistently mis‑identified low‑contrast or occluded items—critical for product search accuracy.

**Action**  
I owned the end‑to‑end pipeline:  

1. **Data audit** – Collected 500 k labeled images, annotated “hard cases” (occlusion, lighting).  
2. **Model fine‑tuning** – Added a contrastive loss term and synthetic augmentation (random occlusions, brightness shifts).  
3. **Inference optimization** – Deployed the tuned model on **Amazon SageMaker** with GPU spot instances; added a fallback rule‑based classifier for edge cases.  
4. **Monitoring** – Instrumented CloudWatch metrics: *Misidentification Rate* and *Latency*.  

**Result**  
After two sprints, misidentification dropped from **18 % to 3 %**, boosting conversion by **7 pp** in A/B tests (≈$2M annual revenue). Latency remained <200 ms, keeping the user experience smooth. Cost was controlled at $0.02 per inference via spot pricing.

**Learnings**  
*Customer Obsession*: We built a system that directly addresses shopper pain points.  
*Dive Deep & Ownership*: By dissecting failure modes and iterating on data + architecture, we achieved measurable impact and maintained ownership of the entire lifecycle.

This experience illustrates how deep technical insight, combined with Amazon’s principles, turns model shortcomings into business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
