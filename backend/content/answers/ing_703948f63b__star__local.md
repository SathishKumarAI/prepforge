---
qid: ing_703948f63b__star__local
question: 'Explain: Figma LeetCode Practice (Mapped to Reported Topics)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 321
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:25-05:00'
sources: []
---

**Situation** – At my previous role, the ML team was preparing for a big client audit on model explainability. The audit required us to demonstrate that every algorithm we used aligned with specific regulatory topics (bias mitigation, data privacy, performance thresholds). Our internal tracker had thousands of LeetCode‑style practice problems in our knowledge base, but none were mapped to these compliance categories.

**Task** – I was asked to build a lightweight tool that would automatically tag each problem with the relevant audit topic so we could pull up evidence during the review and train new engineers more efficiently.

**Action** – I scraped the problem database (Python + BeautifulSoup), then applied a simple TF‑IDF model followed by cosine similarity against a curated set of topic keywords. Using spaCy for entity extraction, I refined the tags with a rule‑based post‑processor to catch synonyms like “fairness” and “bias.” I wrapped everything in a Flask API that output JSON tags, which our training portal consumes.

**Result** – The mapping covered 98 % of our problem set within two weeks. During the audit we produced a compliance report with instant cross‑references, cutting preparation time from three days to just half a day. Plus, new hires now get topic‑specific practice recommendations, boosting onboarding efficiency by ~30 %. I learned that combining NLP heuristics with domain rules can rapidly align technical knowledge bases with regulatory needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
