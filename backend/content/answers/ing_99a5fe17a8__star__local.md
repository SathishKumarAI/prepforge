---
qid: ing_99a5fe17a8__star__local
question: 'Explain: Make it better — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 308
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:03-05:00'
sources: []
---

**Situation** – At Glean I was part of the Talent Acquisition team when our hiring funnel for senior data scientists had a 45 % drop‑off after the first technical interview, largely because recruiters couldn’t quickly assess skill depth from resumes alone.

**Task** – My goal was to build an AI‑powered “Skills Lens” that would surface hidden competencies and match candidates to roles faster, reducing time‑to‑hire by at least 20 %.

**Action** – I led a cross‑functional squad: we scraped structured data (GitHub repos, Kaggle scores) and unstructured text (cover letters, LinkedIn posts). Using spaCy for NLP and an embedding model fine‑tuned on Glean’s job descriptions, we created a similarity score that ranks candidates by role fit. We integrated the tool into our ATS via a REST API, added a confidence heatmap for recruiters, and set up A/B testing against manual reviews.

**Result** – Within three months the drop‑off fell to 30 %, cutting hiring time from 42 days to 34 days—a 19 % improvement. We also saw a 15 % increase in first‑offer acceptance rates because candidates were matched more accurately. I learned that blending domain‑specific embeddings with transparent recruiter dashboards can turn raw data into actionable hiring insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
