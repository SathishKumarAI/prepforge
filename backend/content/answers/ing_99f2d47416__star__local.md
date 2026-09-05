---
qid: ing_99f2d47416__star__local
question: 'Explain: Video Comment — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 315
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:32-05:00'
sources: []
---

**Situation** – In my last role at a streaming startup, we noticed that user engagement on live YouTube streams dropped by 18% over the past quarter. The analytics team blamed generic comment moderation and slow response times.

**Task** – I was asked to design an ML pipeline that could automatically detect toxic or off‑topic comments in real time, flag them for human review, and surface high‑quality user interactions back to the host during a live stream.

**Action** – First, I collected 200K annotated YouTube comment transcripts and used spaCy for tokenization and sentence embeddings. I trained a fine‑tuned BERT model on a binary classification task (toxic vs. non‑toxic) with an F1 score of 0.92. To handle latency, I wrapped the model in TensorFlow Serving and deployed it behind an AWS Lambda edge function that processed comments within 200 ms. For relevance scoring, I added a secondary XGBoost layer that weighted comments by sentiment, user reputation, and historical engagement.

**Result** – During a pilot on three high‑traffic streams, comment toxicity detection accuracy hit 95%, and the average moderation turnaround dropped from 5 minutes to under 30 seconds. User retention rose by 12% in those sessions, and I learned how critical it is to balance model complexity with inference latency in live environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
