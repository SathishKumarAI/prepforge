---
qid: ing_347998963e__star__local
question: 'Explain: Search Ranking — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 448
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:21-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new e‑commerce product line that pulled in 1 M visitors per month, but our product pages were buried under generic category listings. The conversion rate on those pages was only 2%, far below the 6% target.

**Task:**  
I needed to design and deploy a search‑ranking model that surfaced the most relevant products for each query, boosting click‑throughs by at least 30 %.

**Action:**  
1. **Data Pipeline & Feature Engineering** – Collected click logs, dwell time, and purchase history over six months. Built sparse term vectors (TF‑IDF) and dense embeddings from a pre‑trained BERT model fine‑tuned on product descriptions. Added user‑level signals: past purchases, session length, and device type.  
2. **Model Selection & Training** – Started with LambdaMART for its interpretability; after profiling feature importance we switched to a gradient‑boosted deep forest that could handle both sparse and dense inputs. Trained on 80 % of the logs, validated on a held‑out 10 % with NDCG@10 as the metric.  
3. **Evaluation & A/B Testing** – Deployed the model in an online service; ran a two‑week split test against the legacy rule‑based engine. Monitored real‑time metrics and logged user feedback via heatmaps.  
4. **Iterative Tuning** – Adjusted learning rate, added regularization to avoid overfitting, and introduced a decay factor for stale queries.

**Result:**  
The new ranking system lifted NDCG@10 from 0.42 to 0.68, translating into a 32 % lift in click‑throughs and a 27 % increase in conversion rate—bringing us above the 6% target. I also documented the pipeline so it could be reused for other product categories. This experience taught me how to blend traditional IR techniques with modern neural embeddings while keeping latency under 150 ms for real‑time search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
