---
qid: ing_8380f1d046__star__local
question: 'Explain: Structured Note Taking — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:20-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were building an automated loan‑approval model that had to interpret unstructured customer emails and internal policy documents. The training data was noisy: over 40 % of the emails contained irrelevant chatter or conflicting instructions, causing our F1 score to hover around 0.72.

**Task** – I needed to engineer a robust context layer so the model could focus on the relevant legal clauses and applicant facts, improving both precision and recall while keeping inference latency below 200 ms per request.

**Action** – I implemented structured note‑taking as a form of *context engineering*: first, I used spaCy’s dependency parser to extract key entities (e.g., “income”, “credit score”) into a JSON schema. Next, I built a lightweight in‑memory knowledge graph with Neo4j that linked each entity to its policy rule set. During inference, the model queried this graph to generate a concise context prompt for GPT‑4, which then produced a structured decision. I also added a caching layer (Redis) to avoid recomputing the same context for duplicate queries.

**Result** – The F1 score jumped to 0.89, and approval latency dropped by 30 %. Importantly, stakeholders could audit decisions by inspecting the generated context notes, giving us both higher accuracy and greater transparency. I learned that treating context as first‑class data—structured, indexed, and queryable—can turn messy text into a powerful feature for ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
