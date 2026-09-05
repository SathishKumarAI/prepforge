---
qid: ing_51e8bb7c9c__star__local
question: 'Explain: Using Pre-Built Agents from Agent Pack — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 298
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:08-05:00'
sources: []
---

**Situation** – In my last role, we had to launch a chatbot for our e‑commerce site that could answer product queries and process returns within 48 hours of the feature freeze. The product team was under pressure to hit a KPI of 90% automated resolution.

**Task** – I was tasked with building the intent‑matching layer quickly while ensuring it understood our custom taxonomies and could route complex requests to the right backend services.

**Action** – Instead of training a new NLU model from scratch, I leveraged Haystack’s Agent Pack. I imported the “QuestionAnsweringAgent” pre‑built for FAQ handling and the “DocumentRetrievalAgent” for product specs. Using the *agent orchestration* API, I wired them together with a simple rule‑based router that checked intent confidence scores. I also fine‑tuned the retrieval agent on our internal knowledge base by adding a small set of 200 labeled examples, which improved recall from 68% to 82% in validation tests.

**Result** – The chatbot achieved an automated resolution rate of 93%, exceeding the target. Deployment time dropped from four weeks to just one week, and I learned that judicious use of pre‑built agents can dramatically accelerate ML product rollouts while still allowing room for domain‑specific fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
