---
qid: ing_a087ee9924__star__local
question: 'Explain: Thousands of courses authored by our network of industry experts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:40-05:00'
sources: []
---

**Situation** – At my previous company we had a learning platform with over 5 000 video‑course assets created by external industry experts. The recommendation engine was only showing the top 20 courses per user and many learners were dropping out because they never discovered niche topics.

**Task** – I was tasked to build an automated, content‑aware ranking system that could surface relevant sub‑domains (e.g., “DevOps for Data Scientists”) at scale, while keeping latency under 200 ms for a live web feed.

**Action** – First, I engineered a feature pipeline in Spark: extracted metadata (tags, length, view count), generated embeddings from course transcripts using Sentence‑BERT, and indexed them with Elasticsearch. Then I trained a LightGBM model to predict click‑through probability per user‑course pair, feeding it contextual signals like past interaction history and cohort trends. Finally, I deployed the pipeline as an AWS Lambda function integrated into our recommendation API, adding a “discover” flag that surfaced the top 10 unseen courses per session.

**Result** – After three weeks of A/B testing, we saw a 35 % lift in overall course completions and a 22 % increase in time spent on the platform. The new system also cut server costs by 18 % thanks to more efficient caching and reduced API calls. I learned how to balance model complexity with real‑time constraints while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
