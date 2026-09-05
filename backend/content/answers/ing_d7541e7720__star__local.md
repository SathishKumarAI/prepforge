---
qid: ing_d7541e7720__star__local
question: What Can Go Wrong Without Evals? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 324
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:28-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we rolled out an automated credit scoring model to replace the manual underwriting workflow. The team was excited; we had hit a 15% reduction in processing time and a projected $2M lift in loan volume.

**Task:**  
I was tasked with validating that the new model wouldn’t inadvertently discriminate or produce unacceptable risk levels before it went live, but budget constraints meant no formal evaluation pipeline existed.

**Action:**  
I built a quick “shadow” test harness: pulled 10,000 recent application records, ran them through both the legacy and new models side‑by‑side, and used open‑source libraries (scikit‑learn metrics, A/B testing frameworks) to compare predictions. I also scripted an equity audit that segmented outcomes by race, gender, and zip code to flag disparate impact. The tests uncovered a 12% higher denial rate for applicants in high‑cost urban areas—something the original model had masked.

**Result:**  
We halted the rollout, retrained the model with cost‑sensitive weighting, and re‑evaluated. Post‑fix, denials fell by 8%, overall accuracy improved from 83% to 89%, and we avoided a regulatory fine that could have cost us $500k. I learned that even a lightweight evaluation loop is essential; skipping it can expose hidden biases, erode trust, and lead to costly rework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
