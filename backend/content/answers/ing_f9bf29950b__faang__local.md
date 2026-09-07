---
qid: ing_f9bf29950b__faang__local
question: 'Q73: How would you design a semantic routing system that dynamically selects
  the cheapest model that can handle a query with acceptable quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 449
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:22-05:00'
sources: []
---

**Clarify**  
We need an on‑demand “semantic router” that, given a natural‑language request, picks among multiple ML models (e.g., GPT‑3, T5, distilled BERT) the one with the lowest cost while guaranteeing a target quality metric (BLEU, ROUGE, or user‑satisfaction score).  Key assumptions:  
- Models expose inference latency and per‑token price.  
- A validation set maps query features to expected quality for each model.  
- The system can cache recent predictions.

**Approach**  
1. **Feature extraction** – tokenize the query, compute length, complexity scores (e.g., perplexity).  
2. **Predictive cost‑quality model** – train a lightweight regressor that, given features and candidate model id, outputs expected latency, cost, and quality.  
3. **Decision rule** – for each request, evaluate all candidates; filter those meeting the quality threshold; pick the one with minimal predicted cost.  
4. **Fallback loop** – if no candidate meets the threshold, upscale to a higher‑capacity model or retry after tuning.

**Depth**  
- Use XGBoost or a shallow neural net trained on logged inference data.  
- Complexity: O(N) per request where N is number of models (typically <10).  
- Trade‑offs: richer feature set → better predictions but more compute; simpler features → faster routing but potentially higher mis‑classifications.

**Edge Cases**  
- Extremely long or rare queries may not be represented in training data → fallback to the most robust model.  
- Sudden price changes of a provider → retrain predictor periodically.  
- Model outages → route to next cheapest viable model.

**Optimize & Communicate**  
To improve, incorporate online learning: update the regressor with actual latency/quality outcomes after each inference.  Communicate results by exposing an API that returns both the chosen model id and confidence score, enabling downstream services to log and audit decisions. This architecture balances cost, quality, and latency while remaining transparent and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
