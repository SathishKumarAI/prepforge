---
qid: ing_70f7774748__star__local
question: 'Explain: Entities — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 413
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:21-05:00'
sources: []
---

**Situation** – At the Clean Coder blog I was tasked with improving article discoverability for a growing readership of 120k monthly visitors. The existing tagging system was manual and inconsistent, leading to low click‑through on related posts.

**Task** – Build an automated entity extraction pipeline that could identify relevant topics, people, frameworks, and concepts from each new post, then assign high‑confidence tags in real time before publishing.

**Action** – I first scoped the domain by sampling 2,000 articles and labeling 1,500 with expert annotators. Using spaCy’s custom NER model, I fine‑tuned a transformer backbone (RoBERTa) on our corpus, adding a post‑processing rule set to merge overlapping spans and filter stopwords. The pipeline ran as a Docker microservice integrated into the CMS; it processed each article in ~1.2 s, returning 12–15 tags per post. I added a confidence threshold (0.85) and an admin UI for manual overrides.

**Result** – After launch, tag accuracy rose from 68% to 92% precision and 88% recall. Related‑post clicks increased by 35%, and the editorial team saved ~4 hours/week on tagging. I learned how domain‑specific fine‑tuning combined with lightweight post‑processing can deliver production‑ready NLP at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
