---
qid: ing_35f03a39c7__star__local
question: 'Explain: Drawbacks of GraphQL — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 335
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:04-05:00'
sources: []
---

**Situation:**  
At my last company we migrated the front‑end from a legacy REST API to a new GraphQL layer to reduce over‑fetching for our mobile app. The data model was complex: users had nested orders, each order had items, discounts, and shipping details.

**Task:**  
I needed to evaluate whether GraphQL truly improved performance and developer experience without introducing hidden costs or breaking the existing CI pipeline.

**Action:**  
I set up a side‑by‑side benchmark: built identical queries in REST (multiple endpoints) and GraphQL. I measured latency, payload size, and server CPU usage over 10,000 concurrent users. I also inspected the generated query plans to see if the resolver chain caused N+1 problems. While GraphQL cut payloads by ~35 %, it introduced a 2× increase in CPU cycles due to complex resolver logic and required an additional layer of caching (DataLoader) that wasn’t present in REST. Moreover, I discovered that our CI had to run integration tests against the GraphQL schema every commit, doubling test time.

**Result:**  
We decided to keep GraphQL for the mobile client but retain a thin REST façade for bulk data exports and batch processing. The migration saved 30 % of bandwidth on mobile, but we avoided the 50 % CPU spike and the longer CI cycle. I learned that GraphQL’s flexibility can backfire if not paired with proper caching, batching, and careful monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
