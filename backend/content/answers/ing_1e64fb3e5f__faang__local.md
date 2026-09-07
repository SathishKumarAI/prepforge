---
qid: ing_1e64fb3e5f__faang__local
question: 'Explain: Highlights — uv'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:46-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain the *Highlights* section of a UV (Unique Value) machine‑learning model – i.e., how we surface key predictions or insights to end users. Confirm assumptions:  
1. Audience is non‑technical product managers.  
2. We need to justify why certain features are “highlighted.”  
3. The system runs in real time with limited latency.

**Approach**  
1. Define *Highlight* as a ranked list of model outputs that influence user decisions.  
2. Outline scoring logic: combine prediction confidence, business impact, and novelty.  
3. Show the pipeline: raw output → post‑processing → ranking → UI presentation.  

**Depth**  
- **Scoring**: `score = α * confidence + β * impact_weight + γ * novelty_score`.  
  - *Confidence*: probability from the classifier.  
  - *Impact*: business metric (e.g., revenue lift).  
  - *Novelty*: difference between current prediction and last user interaction, measured by cosine distance in embedding space.  
- **Ranking**: sort by `score` descending; cap at top‑k for UI brevity.  
- **Complexity**: O(n log n) per inference batch (n = number of candidate highlights).  
- **Trade‑offs**: higher α gives more accurate but potentially less surprising highlights; tuning β/γ balances relevance vs. novelty.

**Edge Cases**  
- Zero confidence → fallback to a default highlight.  
- Extremely high impact but low confidence may still surface if business risk is high.  
- Duplicate highlights filtered by Jaccard similarity > 0.8.

**Optimize & Communicate**  
Explain that we can pre‑compute impact weights and cache novelty scores for frequent queries, reducing latency. Use A/B tests to validate that highlighted items improve conversion by X%. Conclude with how this transparent scoring aligns product goals with ML outcomes, satisfying both technical rigor and stakeholder understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
