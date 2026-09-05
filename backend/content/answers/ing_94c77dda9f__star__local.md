---
qid: ing_94c77dda9f__star__local
question: 'Explain: Tier 3 - frontier model / human review — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:23-05:00'
sources: []
---

**Situation** – At my last company we were launching a new user‑generated video platform. The volume hit 12 M uploads per month, and our compliance team flagged that the existing automated filter was missing nuanced hate‑speech content, leading to a 15 % increase in policy violations.

**Task** – I had to design a Tier 3 “frontier model + human review” pipeline that could surface borderline cases for expert moderators while keeping latency under 2 seconds per clip.

**Action** – First, I trained an ensemble of transformer‑based classifiers (BERT fine‑tuned on the HateXplain corpus) and a rule‑engine that caught obvious slurs. For ambiguous videos we routed them to a micro‑service that ran a multimodal model combining text OCR, audio sentiment, and visual scene recognition. The output was scored, and clips with a confidence between 0.6–0.8 were queued in a priority queue for live moderator review via our internal dashboard built on React/Node. I also implemented an active‑learning loop: moderators’ decisions fed back into the model every week, reducing false positives by 30 % over two months.

**Result** – The new pipeline cut policy violations from 12 % to 5 % while keeping moderation latency below 2 s for 95 % of uploads. I learned that blending state‑of‑the‑art NLP with a lightweight human‑in‑the‑loop system can dramatically improve content safety without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
