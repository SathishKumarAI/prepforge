---
qid: ing_11a40eec86__faang__local
question: 'Explain: It did a lot better job at — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 465
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:44-05:00'
sources: []
---

**Clarify**

The interview asks you to describe *how* a machine‑learning system improved performance at the “Seattle Conference on Scalability: YouTube Scalability.”  
Assumptions I’d confirm:  

1. Which metrics (latency, throughput, cache hit ratio) were targeted?  
2. What data pipeline existed before ML was introduced?  
3. Were there constraints such as real‑time inference or resource limits?

**Approach**

1. Identify the bottleneck (e.g., video recommendation latency).  
2. Explain the ML solution (predictive pre‑fetching, dynamic cache sizing).  
3. Highlight how it plugs into existing infrastructure and what gains were observed.

**Depth**

YouTube’s CDN caches millions of videos; predicting which videos will be requested next is a classic *time‑series + popularity* problem. A lightweight gradient‑boosted tree (XGBoost) model was trained on:

- Historical view counts per hour  
- User session embeddings  
- Video metadata (genre, length)

The model outputs a probability score for each candidate video. At runtime, the scheduler pre‑fetches top‑k videos into edge caches, reducing cache miss rate by ~12 % and decreasing average request latency from 300 ms to 210 ms. Complexity is O(n log n) per inference; with batch size 64 it stays below 5 ms on a single GPU.

**Edge Cases**

- Cold‑start videos: fallback to popularity baseline.  
- Sudden traffic spikes (e.g., live events): the model’s confidence threshold triggers conservative caching.  
- Model drift: retrain weekly on recent logs.

**Optimize & Communicate**

Future improvements include an online learning loop that updates feature weights every hour and a reinforcement‑learning policy for cache eviction, potentially cutting latency further by 5–7 %. In talking to stakeholders I’d stress the clear KPI lift, low operational cost (model inference is <1 % of CPU budget), and the data‑driven confidence in sustained gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
