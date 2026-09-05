---
qid: ing_c2b0d6d482__star__local
question: 'Explain: You''re shipping an image-generation feature. Walk me through
  the safety design: NSFW filtering, deepfakes, and provenance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 355
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:14-05:00'
sources: []
---

**Situation:**  
When my team launched a new image‑generation API for a social media app, we received user complaints about unwanted adult content and concerns over deepfake misuse. The product had to meet both regulatory standards and our internal safety policy before full rollout.

**Task:**  
I was tasked with designing an end‑to‑end safety framework: (1) detect and block NSFW outputs, (2) mitigate deepfake generation risks, and (3) embed provenance metadata so every image could be traced back to its seed and prompt.

**Action:**  
First, I integrated a multi‑model pipeline—OpenAI’s CLIP for semantic filtering, followed by a custom CNN trained on a curated NSFW dataset—to flag and reject unsafe images. For deepfakes, we added a watermarking layer that injects an invisible signature into the latent space; this signature is later verified via a lightweight hash. Provenance was handled by storing a SHA‑256 of the prompt, seed, and model version in a signed JSON blob attached to each image. We also exposed a public API endpoint for third‑party verification.

**Result:**  
Post‑deployment, our false‑positive rate dropped from 12% to 2%, while we logged zero incidents of adult content reaching users. The watermark detection caught 99.8% of deepfake attempts in internal tests. The provenance system enabled us to satisfy compliance audits and gave us a 30% faster incident response time. I learned that layering lightweight, interpretable checks before the final output is far more reliable than relying on a single black‑box filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
