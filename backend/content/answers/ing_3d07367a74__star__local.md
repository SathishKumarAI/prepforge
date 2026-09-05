---
qid: ing_3d07367a74__star__local
question: 'Explain: Cost Comparison Example — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 362
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:04-05:00'
sources: []
---

**Situation:**  
At my last role we were launching a real‑time sentiment analysis feature for a media platform that served 8 M users daily. The engineering budget capped us at $0.02 per inference and the latency requirement was under 150 ms.

**Task:**  
I had to pick an NLP model that hit the accuracy target (F1 ≥ 0.88) while staying within the cost and speed constraints, and then document a reusable guide for future teams.

**Action:**  
First I benchmarked three candidates—DistilBERT, TinyBERT, and a custom quantized RoBERTa—on our private dataset using PyTorch on AWS Inferentia instances. I profiled CPU vs GPU usage, measured per‑inference cost (compute + storage), and logged latency with 99th percentile analysis. I introduced a weighted scoring rubric that combined accuracy, inference time, and dollar‑per‑predictor cost, then ran an automated spreadsheet script to generate a “cost‑vs‑performance” heatmap. The model with the highest composite score was TinyBERT + 8‑bit quantization.

**Result:**  
The selected model achieved F1 = 0.90, latency of 112 ms, and cost of $0.015 per inference—meeting both metrics while saving 25% of the projected budget. The guide now serves as a living document that other teams use to evaluate models against their own constraints, cutting evaluation time from weeks to days.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
