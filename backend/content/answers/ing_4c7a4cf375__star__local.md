---
qid: ing_4c7a4cf375__star__local
question: 'Explain: Personalization: Extensive knowledge graph'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 355
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:13-05:00'
sources: []
---

**Situation** – In my last role at a media streaming startup we were hitting a plateau: our churn rate was 18% and user engagement per session had dropped by 12%. The leadership team wanted a new way to surface content that felt “personal” without over‑engineering the recommendation engine.  

**Task** – Build an extensible knowledge graph that could power fine‑grained personalization, integrating users’ watch history, genre preferences, social signals and external metadata (actor filmographies, award data). The goal was to increase average session time by at least 15% within three months.

**Action** – I first defined a unified ontology: entities for Users, Content, Actors, Genres, Events; relations like “watched”, “likes”, “co‑starred”. Using Neo4j and Apache TinkerPop we ingested our internal logs (Kafka streams) and public APIs (TMDB, IMDb). We applied graph embeddings (Node2Vec) to capture latent similarity. For inference I built a lightweight rule engine in Python that combined KG scores with collaborative filtering from LightFM, then served ranked lists via a REST endpoint. Continuous A/B testing let us iterate on relation weights and pruning thresholds.

**Result** – Within 10 weeks the average session duration rose by 18%, churn fell to 13%, and we saw a 22% lift in content upsell revenue. I learned that an extensible knowledge graph not only unlocks richer personalization but also provides a reusable data layer for future product experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
