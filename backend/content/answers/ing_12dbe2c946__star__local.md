---
qid: ing_12dbe2c946__star__local
question: 'Explain: Serving Search Results — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 294
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:15-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with improving the relevance of our product search for a SaaS platform that had over 1 M active users and 10 M indexed documents. The existing keyword‑based engine returned noisy results, and user satisfaction dropped by 18% after we rolled out a new feature.

**Task**  
I needed to redesign the search pipeline so that relevance scores were computed in real time while keeping latency under 200 ms for 99th percentile queries.

**Action**  
First, I introduced an inverted index with term frequency–inverse document frequency (TF‑IDF) weighting stored in Elasticsearch. Then I built a lightweight ranking model using XGBoost that incorporated query intent features (e.g., user’s last click history and session context). The model was served via TensorFlow Serving behind a gRPC layer, so each search request hit the index for candidate retrieval, then the model scored candidates before returning top‑k results. I also added a cache of popular queries in Redis to reduce load on Elasticsearch.

**Result**  
After deployment, click‑through rate rose 27%, conversion from search increased by 12%, and average latency dropped to 135 ms. The project taught me how to blend classic IR techniques with modern ML serving to balance relevance and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
