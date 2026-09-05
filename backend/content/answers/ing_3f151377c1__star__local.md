---
qid: ing_3f151377c1__star__local
question: There is no single correct output for an utterance. How do you evaluate
  speech quality at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 371
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:17-05:00'
sources: []
---

**Situation:**  
In my last role I led the QA team for a new text‑to‑speech (TTS) feature that needed to support 50+ languages and deliver real‑time voice synthesis on mobile devices. The product had no single “correct” audio output, so we couldn’t rely on traditional unit tests.

**Task:**  
I was tasked with building an automated evaluation pipeline that could measure perceived speech quality at scale, identify regressions, and surface actionable insights for the engineers without manual listening of millions of samples each release.

**Action:**  
First, I mapped perceptual criteria (naturalness, intelligibility, prosody) to objective metrics: MOS‑NN scores via a pre‑trained neural model, word error rate from an on‑device ASR, and spectral convergence loss for timbre consistency. I integrated these into a CI/CD workflow that processed 200k utterances per day across all languages, storing results in a time‑series database. I added an anomaly detection layer that flagged deviations beyond ±0.2 MOS or 5% WER change. For the top 1% of outliers, we routed samples to a rotating pool of human raters who provided structured feedback.

**Result:**  
The pipeline reduced manual review effort by 85%, catching regressions before production rollouts. In the first month after deployment, we lowered average WER from 12% to 7% and increased user‑reported satisfaction scores by 18%. I learned that combining neural MOS models with language‑specific error checks gives a robust proxy for human judgment, enabling rapid, data‑driven improvements at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
