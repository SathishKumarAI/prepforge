---
qid: ing_38d9241fd7__fp__local
question: 'Explain: Live exercise: here''s our API and a folder of sample support
  tickets. In 60 minutes, build something that would impress a support-team lead.
  Narrate your choices.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 650
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:47-05:00'
sources: []
---

**Problem framing**

A support‑team lead wants *quick, actionable intelligence* from raw tickets: sentiment, priority, recurring topics, and a way to surface the right agent or knowledge base article instantly. The API gives us ticket text; we must turn it into structured signals that a human can trust within 60 min.

**Why this architecture works**

1. **Feature extraction is the bottleneck** – NLP models are fast enough; the real cost is labeling and tuning for domain language (slang, product jargon).  
2. **Probabilistic topic modeling (LDA + fine‑tuned embeddings)** gives us *latent clusters* that capture hidden themes without hand‑crafted rules.  
3. **Supervised classification on top of those topics** turns latent space into priority scores; a calibrated logistic regression yields interpretable probabilities.  
4. **Rule‑based fallback for extreme cases** guarantees no ticket is lost when the model is uncertain (e.g., new product release).

**Implementation steps**

| Minute | Action | Rationale |
|--------|--------|-----------|
| 0–10   | Load API, download tickets, quick EDA | Establish baseline vocab, detect obvious stop‑words. |
| 10–20  | Train FastText embeddings on the corpus | Handles OOV tokens and captures subword structure—critical for typos. |
| 20–35  | Run LDA (k≈12) + embed topics via mean of token vectors | Reveals recurring pain points; k chosen by perplexity‑elbow. |
| 35–45  | Label a tiny sample (10 % of tickets) with priority, feed into logistic regression | Supervised layer gives calibrated scores; small seed set keeps time low. |
| 45–55  | Build rule engine for “cannot‑resolve” patterns & high‑confidence alerts | Provides safety net and quick wins for the lead. |
| 55–60  | Package as a Flask endpoint, add simple dashboard (plot topic heatmap) | Demonstrates end‑to‑end flow; visual cues help managers trust the model. |

**Non‑obvious insight**

*Embedding topics before classification preserves semantic continuity across classes.*  
If we train LDA on raw words and then one‑hot encode topics, the classifier treats each cluster as orthogonal, losing cross‑topic nuance. By representing a topic as the centroid of its token embeddings, we give the downstream model geometric context—similar issues lie close in vector space, so a single decision boundary can separate “high priority” from “low priority” more cleanly.

**Result**

Within an hour we deliver:  
- A 12‑topic map that instantly shows which problems dominate.  
- Priority probabilities for every ticket with confidence intervals.  
- A safety‑net rule set that guarantees no ticket slips through unreviewed.  

The support lead can now triage tickets in minutes, focus agents on the real pain points, and iterate on the model as new data arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
