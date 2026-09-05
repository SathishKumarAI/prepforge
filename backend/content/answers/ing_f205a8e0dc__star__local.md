---
qid: ing_f205a8e0dc__star__local
question: 'Explain: Provenance and Safety — Multimodal Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:07-05:00'
sources: []
---

**Situation** – At my previous company we launched a new chatbot that could produce text, images, and short videos on demand. Within the first month, several users flagged hallucinated content—images that didn’t match the text description—and privacy concerns surfaced when the model inadvertently reproduced copyrighted art.

**Task** – I was tasked with building an end‑to‑end provenance framework to trace every token of output back to its source data and implement safety checks that prevented disallowed or misleading multimodal outputs, all while keeping latency under 1.2 seconds for real‑time use.

**Action** – First, I integrated a lightweight metadata layer into the transformer pipeline: each generated token carries a “source vector” pointing to the training excerpt that most influenced it. Using this, we built a reverse‑index lookup that flags when an image or video’s style matches a copyrighted source beyond a 0.85 similarity threshold, triggering automatic redaction. For safety, I added a reinforcement‑learning‑based discriminator trained on a curated dataset of safe vs. unsafe multimodal pairs; it scores each generation and blocks any with a confidence below 0.9. Finally, we wrapped the whole process in an async microservice with caching to maintain sub‑second latency.

**Result** – After deployment, hallucination incidents dropped by 92%, and no copyrighted material was released. User satisfaction rose from 68 % to 87 % on content relevance surveys. I learned that coupling provenance metadata with a lightweight safety discriminator can effectively balance quality, compliance, and speed in multimodal AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
