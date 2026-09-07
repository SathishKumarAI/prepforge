---
qid: ing_8bc9e9b77d__aws__local
question: 'Q: What is the "curriculum" in LLM pretraining?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:08-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation:** While leading a cross‑functional team at Amazon’s AI Lab, we were asked to accelerate the pre‑training of a new LLM for in‑house recommendation engines. The bottleneck was that our existing “curriculum” – the ordering and weighting of training data – caused slow convergence and high GPU costs.

**Task:** Design a curriculum that reduces epochs needed while keeping model quality above 95 % BLEU on internal validation.

**Action:**  
1. **Data‑Driven Prioritization (Customer Obsession):** We profiled token frequency, domain relevance, and historical recommendation accuracy. Tokens from top‑10 product categories were weighted +30 %.  
2. **Dynamic Curriculum Scheduler (Ownership & Dive Deep):** Implemented a reinforcement‑learning controller that adjusts sampling probabilities every 1 M steps based on perplexity drop rates.  
3. **AWS Implementation:** Used Amazon SageMaker Pipelines to orchestrate data preprocessing, training on Spot GPU instances, and model evaluation. Employed Amazon S3 for immutable checkpoints and DynamoDB to store curriculum state.  
4. **Cost & Scalability:** Leveraged Spot Savings Plans + Auto Scaling; achieved a 35 % reduction in total GPU hours versus the baseline.

**Result:** Model converged 2× faster (from 15M to 7.5M steps), saving ~$120k/month, and maintained >95 % BLEU while improving recommendation lift by 4.3 %.  

*Bar‑raiser focus:* I demonstrated ownership of the end‑to‑end pipeline, deep dive into data statistics, quantified ROI, and iterated on a failed RL policy that initially oversampled rare tokens (leading to overfitting).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
