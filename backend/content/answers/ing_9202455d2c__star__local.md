---
qid: ing_9202455d2c__star__local
question: 'Explain: Footnotes — ai-engineering-field-guide/interview/01-interview-process.md
  at main \u00b7 alexeygrigorev/ai-engineering-field-guide \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 387
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:04-05:00'
sources: []
---

**Situation**  
During my second quarter as a junior ML engineer at a fintech startup, we were preparing our pitch deck for the next funding round. The deck’s narrative was solid, but reviewers kept pointing out missing citations for the AI claims we made—especially around model performance and data sources.

**Task**  
I needed to embed proper footnotes into the deck that linked back to our internal engineering field guide (the “ai‑engineering‑field‑guide” repo) without breaking the flow or adding clutter, while ensuring every claim was traceable for investors.

**Action**  
First, I cloned the repository and pulled the latest `main` branch. In the `interview/01-interview-process.md` file, I identified the sections where we referenced model training pipelines and data lineage. Using Markdown’s footnote syntax (`[^1]`), I added inline markers next to each claim. Then, in the same document, I appended a “References” section with numbered footnotes that pointed to specific commits and lines in the guide (e.g., `[^1]: See commit abc123 on ai-engineering-field-guide for training data specs`). I ran `markdownlint` locally to catch any formatting issues and used GitHub’s preview to confirm hyperlinks worked. Finally, I pushed the changes and opened a pull request with a concise description so reviewers could see the audit trail.

**Result**  
The deck now included clear, clickable footnotes that linked investors directly to our internal documentation, reducing follow‑up questions by 70 %. The funding committee praised the transparency, and we secured $2.5M in Series A. I learned how vital it is to treat documentation as a living artifact—linking claims back to source code not only satisfies auditors but also builds trust with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
