---
qid: ing_788b49be24__star__local
question: 'Explain: AI System Design Glossary'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 405
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:08-05:00'
sources: []
---

**Situation** – At a fintech startup I was tasked with launching an AI‑powered fraud detection pipeline. The product team and the compliance department were speaking different languages; every time we had a sprint review the backlog was full of acronyms like “NLP”, “DL”, or “DRF” that nobody outside data science understood.

**Task** – My goal was to build a single, living glossary that would map each AI term to a plain‑English definition and illustrate its place in our architecture. It had to be usable by developers, product managers, and auditors alike, and it needed to be updated automatically as new models rolled out.

**Action** – I started by harvesting terms from our internal wiki, JIRA tickets, and the model training notebooks. Using Python’s `pydantic` models I created a schema for each entry (term, definition, example use case, related tech). Then I wrote a script that parsed our DAG definitions in Airflow to link terms to specific pipeline stages. For visualization I generated Mermaid diagrams embedded in a Confluence page so everyone could see how “Feature Extraction” feeds into the “Ensemble Classifier.” Finally, I ran a workshop with 12 stakeholders to refine wording and added a feedback loop via a Slack bot that auto‑updated the glossary when new terms appeared.

**Result** – The glossary cut cross‑team questions by 70 % in the first month, reduced onboarding time for new hires from three weeks to one, and was cited as a key factor when we passed our ISO 27001 audit. I learned that clear, living documentation is just as important as robust code when scaling AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
