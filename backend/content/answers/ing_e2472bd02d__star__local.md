---
qid: ing_e2472bd02d__star__local
question: 'Explain: nbdev+Quarto: A new secret weapon for productivity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:23-05:00'
sources: []
---

**Situation** – In my last role as a data‑science engineer at a fintech startup, we were building a machine‑learning pipeline that needed to be shared across the product and compliance teams. Our Jupyter notebooks were great for exploration, but every time we updated a model we had to manually copy code into separate scripts and re‑run tests, which caused version drift and slowed releases.

**Task** – I was tasked with streamlining the workflow so that notebook experiments could be automatically converted into production‑ready modules, while still allowing the team to publish interactive reports for stakeholders in a single click.

**Action** – I introduced **nbdev** as our development framework. Using its `export` feature, every notebook cell became part of an importable Python package; I set up a CI pipeline that ran unit tests on each export and published the docs to GitHub Pages via **Quarto**. Quarto’s markdown engine let me weave code, plots, and narrative into one HTML report that updated instantly whenever the underlying notebooks changed. I also leveraged nbdev’s `#| test` cells for quick sanity checks and added a custom Quarto template to match our brand guidelines.

**Result** – The new pipeline cut model deployment time from 3 days to just 2 hours, reduced code duplication by 60 %, and produced stakeholder‑ready dashboards that updated in real time. I learned that treating notebooks as first‑class source files, combined with a static site generator like Quarto, can turn exploratory work into a seamless production workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
