---
qid: ing_2cce76ab7a__star__local
question: 'Explain: The Interview Question — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 331
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:43-05:00'
sources: []
---

**Situation**  
At my previous e‑commerce startup we were hitting a plateau in monthly active users—only 15% of visitors made repeat purchases, and our conversion rate was stuck at 3%. The product team wanted to boost engagement by adding a personalized recommendation feature on the home page.

**Task**  
I had to design, implement, and deploy a real‑time recommendation engine that could deliver relevant product suggestions within 200 ms per request while scaling to 1 million daily sessions.

**Action**  
First, I gathered clickstream and purchase data from our Kafka pipeline, stored it in ClickHouse for low‑latency analytics, and built an item‑to‑item collaborative filtering model using implicit matrix factorization (ALS) with Spark. To keep inference fast, I exported the latent vectors to Redis as a hash table and wrote a Go microservice that queried Redis, computed similarity scores on the fly, and returned top‑10 items. For cold starts, I added content‑based filters based on category embeddings from BERT. We A/B tested the service against the existing static catalog for two weeks.

**Result**  
The new engine increased repeat purchase rate to 27% (an 80% lift) and overall conversion rose from 3% to 4.5%. Page load times stayed under 180 ms, keeping bounce rates flat. I learned how to blend collaborative and content‑based techniques for sparse data and the importance of monitoring latency at every layer in a recommendation pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
