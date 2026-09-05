---
qid: ing_94b9452984__star__local
question: 'Explain: Engineering & Design - Product — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:17-05:00'
sources: []
---

**Situation** – At my previous company we launched a recruiting SaaS that matched candidates to open roles. Our conversion rate from first‑view to interview was only 12 %, and senior recruiters complained the AI suggested irrelevant skills.

**Task** – I needed to redesign the recommendation engine so that it surfaced higher‑quality matches, improved recruiter confidence, and lifted the conversion rate to at least 20 % within three months.

**Action** – I first conducted a data audit: built an exploratory pipeline in Python with Pandas/NumPy to quantify feature importance. Then I switched from a simple cosine similarity model to a hybrid approach—using a LightGBM classifier for skill relevance and a Siamese BERT encoder for semantic job‑description matching. I deployed the new model on AWS SageMaker, added A/B testing logic via Feature Flags in LaunchDarkly, and set up real‑time metrics dashboards with Grafana. To address latency, I distilled the BERT component to DistilBERT and cached embeddings in Redis.

**Result** – Within 10 weeks the match quality score rose from 0.68 to 0.81 (ROC‑AUC), and conversion rate increased to 22 %. Recruiters reported a 30 % drop in manual filtering time, and we saved $120k annually on compute by distilling models. I learned that blending interpretability with deep semantics can deliver measurable business impact while keeping the system production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
