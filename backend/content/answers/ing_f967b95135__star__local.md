---
qid: ing_f967b95135__star__local
question: 'Explain: Gaming — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 330
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:07-05:00'
sources: []
---

**Situation** – At my last role at a mobile‑gaming studio, the “Discover” tab had a 32 % click‑through rate, far below our target of 45 %. Players were scrolling through hundreds of titles with little relevance.

**Task** – I was tasked to build a recommendation engine that increased engagement by predicting which games each user would enjoy and surface those first.

**Action** – First, I extracted a 12‑month log of in‑app events (sessions, playtime, in‑game purchases) and built a feature set: age bucket, device type, genre affinity, and a time‑decayed “recent interest” vector. Using LightGBM, I trained a ranking model with pairwise loss to order games per user. To handle cold starts, I incorporated a content‑based fallback using game metadata (tags, screenshots) fed through a pre‑trained ResNet for visual similarity. The pipeline ran nightly on an AWS EMR cluster; predictions were cached in Redis and served via a gRPC microservice.

**Result** – After A/B testing over two weeks, the click‑through rate jumped to 52 %, a 20 % lift over baseline, and session length grew by 12 %. I learned that blending collaborative filtering with content features and deploying at scale requires tight data engineering, but the payoff in user retention is significant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
