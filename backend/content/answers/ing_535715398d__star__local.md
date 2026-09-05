---
qid: ing_535715398d__star__local
question: 'Q: How do you decide how many candidates to rerank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:50-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine for job seekers, and the initial ranking algorithm was producing too many low‑quality matches. Our metrics showed a click‑through rate drop from 12% to 7%, and recruiters complained about irrelevant candidates.

**Task:**  
I needed to decide how many of the top‑ranked candidates should be passed through a secondary, more computationally expensive re‑ranking model so we could recover quality without overloading our inference pipeline or hurting latency.

**Action:**  
First, I ran an A/B test with different cutoffs (top‑5, top‑10, top‑15) and measured precision@k and average latency. I also profiled the GPU usage to understand cost per re‑ranked candidate. Using a Pareto analysis, I found that re‑ranking the top‑8 candidates improved precision by 3.2% while keeping latency under our SLA of 200 ms. I then implemented an adaptive threshold: if the first‑stage score variance was high, we re‑rank more candidates; otherwise, we kept it at eight.

**Result:**  
After deployment, click‑through rate rose to 10.5%, and recruiter satisfaction scores improved by 18%. The adaptive strategy saved us roughly 12% of GPU hours each day, and I learned how to balance algorithmic quality with operational constraints using data‑driven thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
