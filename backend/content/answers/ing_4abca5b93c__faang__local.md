---
qid: ing_4abca5b93c__faang__local
question: 'Explain: Flipkart — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 524
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:38:24-05:00'
sources: []
---

**Clarify**

You’re asking for an overview of the *machine‑learning* interview questions that a company like Flipkart (a large e‑commerce platform) would pose in a FAANG‑style coding interview.  
Assumptions:  
1. The candidate has a solid CS foundation and basic ML knowledge.  
2. Questions will focus on data structures, algorithmic thinking, and practical ML concepts relevant to recommendation systems, ranking, or fraud detection.

**Approach**

I’ll list 3–4 canonical question families, describe the core skill each probes, then give a concise example problem with an outline of its solution.

**Depth**

| Question Type | Core Skill | Example Prompt |
|---------------|------------|----------------|
| **Feature Engineering + Sliding Window** | Efficient aggregation over large streams | “Given a log of user clicks (timestamp, user_id, product_id), return the top‑k products per 1‑hour window.” |
| **Similarity Search / Nearest Neighbors** | Approximate nearest neighbor data structures | “Implement LSH to retrieve items within cosine similarity ≥ 0.8 of a query vector.” |
| **Ranking & Learning‑to‑Rank** | Pairwise ranking loss, gradient boosting | “Given user–item pairs with click labels, train a model that predicts the probability a user will buy an item; evaluate using NDCG.” |
| **Anomaly Detection / Fraud** | Statistical thresholds, Isolation Forest | “Detect anomalous transactions in real time using a sliding‑window z‑score approach.” |

For each, outline complexity: e.g., LSH → O(n) preprocessing, O(k) query; sliding window → O(n log k) with heaps.

**Edge Cases**

* Empty logs or all identical timestamps.  
* Products with zero clicks (division by zero).  
* Extremely high dimensional sparse vectors for similarity search.

Test against those and measure runtime on 10⁶‑size datasets.

**Optimize & Communicate**

Explain trade‑offs: exact nearest neighbors vs. LSH; heap size k vs. memory. Highlight how you’d log intermediate results, benchmark with synthetic data, and iterate on feature selection. Conclude by stressing that a strong interview answer demonstrates clear problem framing, algorithmic rigor, and awareness of production constraints—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
