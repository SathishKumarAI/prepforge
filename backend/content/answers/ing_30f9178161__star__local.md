---
qid: ing_30f9178161__star__local
question: 'Explain: Classifiers — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 362
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:31-05:00'
sources: []
---

**Situation** – In the second sprint of our fraud‑detection product, we noticed that our rule‑based engine was flagging legitimate transactions at a 12 % false‑positive rate, hurting user experience. The data team had already built a labeled dataset of 200k transactions with features like amount, merchant category, and geolocation.

**Task** – I was tasked to prototype an ML classifier that could drop the false positives below 5 % while keeping detection accuracy above 95 %. The solution had to be deployable in our FastAPI microservice and comply with GDPR data handling.

**Action** – I leveraged **pydantic-ai**, a wrapper around Pydantic models for inference, to keep type safety. First, I defined a `Transaction` Pydantic model matching the feature schema. Then I trained an XGBoost classifier on the labeled set, saved it as a joblib file, and wrapped it in a `ClassifierModel` class that inherits from pydantic‑ai’s base. The inference endpoint deserializes JSON into a `Transaction`, runs the model, and returns a score with confidence thresholds. I also added a lightweight cache to avoid re‑loading the model on every request.

**Result** – After A/B testing, the false‑positive rate dropped from 12 % to 3 %, while true positives rose by 2 %. Deployment required only a 5 MB container image, and we achieved end‑to‑end type safety across the stack. I learned that integrating pydantic‑ai streamlines model deployment without sacrificing clarity or compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
