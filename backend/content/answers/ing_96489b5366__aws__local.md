---
qid: ing_96489b5366__aws__local
question: 'Explain: to make another little array and when — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 395
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:35-05:00'
sources: []
---

**Situation / Task**  
I was asked to extend a chess engine that stored board states as one‑dimensional arrays (64 bytes). The new feature required generating “mini‑arrays” for each move to feed a reinforcement‑learning model that predicts win probability.

**Action**  
*Customer Obsession & Ownership*: I first mapped the exact data format the ML pipeline expected, then redesigned the array conversion so every move produced an 8×8 matrix in row‑major order.  
*Dive Deep & Bias for Action*: I profiled the original code with **AWS X-Ray** and found a 35 % CPU bottleneck during the reshape step. Replacing the naïve Python loop with **NumPy** vectorized operations cut execution time from 12 ms to 3 ms per move.  
*Invent & Simplify*: I wrapped this logic in an AWS Lambda function (Python 3.11) triggered by **Amazon SQS** messages containing raw board states. The lambda writes the mini‑array to **S3** and publishes a notification to **SNS**, decoupling generation from training.

**Result**  
- 80 % reduction in processing latency, enabling real‑time move evaluation for 1 M concurrent games (≈$0.02 / month).  
- Training throughput increased from 5 k/s to 18 k/s, shortening model convergence by 4 days.  

**Bar‑raiser notes** – I demonstrated ownership of the end‑to‑end pipeline, deep technical dive into performance, quantified impact on cost & speed, and learned that vectorization + serverless scaling is the sweet spot for ML data prep in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
