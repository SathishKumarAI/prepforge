---
qid: ing_5a8d24aa4b__star__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 325
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:45-05:00'
sources: []
---

**Situation:**  
In my last role I worked on a real‑time recommendation engine for a mobile app that served 5 M users daily. The model was an XGBoost ensemble with 200 trees, each tree having depth 12. Our inference pipeline ran on a single GPU and cost $15k/month in cloud compute.

**Task:**  
I needed to cut inference costs by at least 40% while keeping the recommendation accuracy (AUC) above 0.82, because the app’s churn rate was sensitive to latency.

**Action:**  
First, I profiled the pipeline and found that tree traversal dominated CPU usage. I replaced the full ensemble with a quantized version: reduced leaf‑node precision from 32‑bit floats to 8‑bit integers and pruned trees with < 0.01 feature importance using SHAP analysis. Then I switched to an optimized inference engine (ONNX Runtime) that batch‑processes 512 predictions per GPU pass, leveraging CUDA tensor cores. Finally, I scheduled the jobs on spot instances and added a fallback CPU path for low traffic periods.

**Result:**  
Inference cost dropped from $15k/month to $8.5k/month—a 43% reduction. AUC fell only 0.003 (from 0.842 to 0.839), well within our SLA, and latency improved by ~30 ms due to batch processing. I learned that aggressive quantization combined with smart scheduling can deliver big savings without hurting business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
