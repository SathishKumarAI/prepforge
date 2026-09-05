---
qid: ing_70e9bd8e65__star__local
question: 'Q27: How do you evaluate LLM outputs when there is no ground truth?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 340
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:06-05:00'
sources: []
---

**Situation** – In a recent sprint I was tasked with building a chatbot for our e‑commerce platform that could draft product descriptions in multiple languages. The training data consisted of millions of user reviews but we had no curated “correct” description to compare against, so the usual accuracy metrics were useless.

**Task** – My goal was to create a reliable evaluation framework that would let us iterate on the model quickly while still ensuring the output met business quality standards: relevance, tone consistency, and SEO friendliness.

**Action** – I designed a hybrid pipeline. First, I built a set of domain‑specific heuristics (e.g., keyword density, sentiment alignment with product category). Next, I introduced a human‑in‑the‑loop scoring system where senior copywriters rated outputs on a 5‑point Likert scale for clarity and brand voice. Finally, I leveraged automated language models to compute semantic similarity against a small seed set of high‑quality descriptions we manually curated, treating that as a pseudo ground truth. The pipeline produced an overall “Quality Score” (0–100) that combined heuristic weightings with human ratings.

**Result** – Over three iterations the average Quality Score rose from 68 to 87, and the time spent on manual review dropped by 40 %. I learned that combining lightweight heuristics, proxy semantic metrics, and targeted human feedback can turn an otherwise unquantifiable LLM output into a measurable, actionable signal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
