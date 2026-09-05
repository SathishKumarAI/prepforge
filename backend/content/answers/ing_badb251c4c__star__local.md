---
qid: ing_badb251c4c__star__local
question: 'Explain: Statistical correction with judgy — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:48-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for rolling out a new recommendation engine to production. Every nightly build ran through a Gated CICD pipeline that performed A/B tests against live traffic, but the test results were often noisy because we were pulling in data from multiple shards with slightly different user demographics.

**Task:**  
I needed to make sure that any decision to promote a model was statistically sound—specifically, to correct for multiple comparisons across shards and maintain a low false‑positive rate without delaying releases.

**Action:**  
I introduced a “judgy” correction step: after each shard’s metrics were collected I applied a Benjamini–Hochberg procedure to control the false discovery rate. The pipeline automatically aggregated the p-values, sorted them, and flagged only those models whose adjusted p‑value fell below 0.01 as candidates for promotion. I also added a gating rule that required at least three shards to pass this threshold before any merge could proceed. The CI/CD jobs were updated in Jenkins with a custom Groovy script that logged the raw and corrected statistics, so we had full auditability.

**Result:**  
The false‑positive rate dropped from 12% to under 2%, cutting down on unnecessary rollbacks by ~30%. We also reduced average release time by 15 minutes because the pipeline could quickly reject unpromising models. I learned that integrating statistical corrections directly into CI/CD not only improves model quality but also builds trust with stakeholders who need transparent, reproducible evidence before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
