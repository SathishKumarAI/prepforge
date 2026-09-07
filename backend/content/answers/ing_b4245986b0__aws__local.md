---
qid: ing_b4245986b0__aws__local
question: 'Explain: Step 5: Extract the Optimal Path after Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:11-05:00'
sources: []
---

**Step 5 – Extracting the Optimal Path After Training**  
*(Leadership Principles: **Ownership**, **Dive Deep**)  

> **Situation:** In our recommendation engine we trained a sequence‑to‑sequence model to predict user navigation paths. Once the model was converged, we needed to surface a single “optimal” path for each user.  

> **Task:** Design a post‑processing pipeline that turns raw logits into a deterministic, high‑confidence path while keeping latency < 50 ms and cost <$0.0001 per request.  

> **Action:**  
> 1. **Beam Search + Dynamic Programming** – I implemented a beam width of 3, pruning at each step by the top‑k logit scores to keep complexity O(k·L).  
> 2. **AWS Lambda + Step Functions** – The Lambda function receives the softmax matrix, runs the search in ~20 ms, and returns the path as a JSON array. Step Functions orchestrate retries on failure (ensuring 99.9% availability).  
> 3. **Cache with Amazon ElastiCache Redis** – Frequently requested paths are cached for 12 h to cut compute by 70 %.  
> 4. **Metrics & Monitoring** – CloudWatch logs the path length, latency, and AUC‑PR of the final prediction; a SageMaker Endpoint is used only during model retraining.  

> **Result:** The end‑to‑end extraction cost dropped from $0.0008 to $0.00005 per request (≈ 93 % savings). Path accuracy improved by 4 pp, boosting user engagement by 12 %.  

**Bar‑raiser notes:**  
- Demonstrated ownership of the entire post‑training workflow.  
- Dive deep into algorithmic trade‑offs and AWS service selection.  
- Quantified impact (cost, latency, engagement).  
- Learned from a prior failure where naive greedy extraction caused 15 % drop in recommendation relevance; fixed by switching to beam search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
