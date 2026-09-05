---
qid: ing_453878da7f__star__local
question: 'Explain: Emailing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:15-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping our customer support inbox. The team was drowning in 30,000 emails a month, and the SLA for responses was slipping past 48 hours. We needed an automated way to surface the most critical queries so agents could focus on high‑value tickets.

**Task:**  
Build an ML pipeline that would rank incoming messages by urgency and relevance, flagging the top 20 questions per hour that required immediate attention—essentially a “top‑20” email prioritization system.

**Action:**  
I started with data labeling: we annotated 15 k emails using a combination of manual review and a pre‑existing keyword list. For feature extraction I used TF‑IDF vectors combined with BERT embeddings (via the `sentence-transformers` library) to capture semantic nuance. The core model was an XGBoost classifier trained on labeled urgency scores, fine‑tuned with early stopping on a 70/30 train/test split.

Once the model was ready, I wrapped it in a Flask API that streamed emails from our IMAP server, scored each one, and pushed the top‑20 IDs to a Redis queue. An alerting dashboard (Grafana) displayed these priorities in real time for the support team. We also added an A/B test layer: 50 % of agents received the ML‑ranked list while the other 50 % used the legacy “first‑come, first‑served” method.

**Result:**  
After two weeks of deployment, the average response time dropped from 48 hours to 12 hours—a 75 % improvement. The model’s precision at top‑20 was 0.88, and we observed a 30 % reduction in ticket backlog over the first month. I learned that combining semantic embeddings with gradient boosting can deliver high‑impact prioritization without needing heavyweight deep learning pipelines, and that continuous monitoring (via A/B tests) is key to validating business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
