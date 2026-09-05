---
qid: ing_bc49e38a6d__star__local
question: Your product adds thumbs up/down on assistant messages. What do you build,
  and where does the data go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 282
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:46-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a conversational AI for customer support. Early user feedback was mixed; some customers found the responses too generic or missing key details.

**Task:**  
I was asked to add a thumbs‑up/down feature so we could collect explicit sentiment on each assistant reply and feed that back into our training loop, improving relevance without compromising privacy.

**Action:**  
I designed an event stream using Kafka where every message ID, user ID (hashed), timestamp, and the thumbs action were published. On the backend I built a lightweight microservice in Go that validates the payload, stores it in a PostgreSQL “feedback” table, and forwards a batch of recent scores to our ML pipeline via a REST endpoint. For privacy, we never store raw text; only the message hash is retained. The ML team uses these signals to re‑rank embeddings in real time with an online learning algorithm (online gradient descent) that updates the model every hour.

**Result:**  
Within two weeks of launch, we saw a 12% drop in ticket escalation rates and a 9% increase in CSAT scores. The feedback loop also reduced our model drift by 30%, and I learned how to balance real‑time data ingestion with compliance constraints while keeping latency under 50 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
