---
qid: ing_2c913909a1__eli5__local
question: 'Explain: A model-extraction / data-exfiltration attack via markdown images:
  explain it end to end and how you''d defend.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 320
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:02-05:00'
sources: []
---

Imagine a library where every book is locked inside a glass case that only shows the cover picture. A clever thief can take a photo of each cover and then, by carefully adjusting the lighting, make tiny changes in the image so that when the librarian’s computer reads it, the hidden text (the book’s content) leaks out. In AI terms, the “cover” is a **markdown image** that the model sees; the thief tweaks pixel colors to encode bits of the model’s internal weights or training data—this is a **model‑extraction / data‑exfiltration attack**.

**How it works end‑to‑end**
1. The attacker sends an image request to the AI service.  
2. The service returns a rendered markdown image that contains subtle, imperceptible color changes.  
3. Those color patterns encode information (model parameters or private data).  
4. The attacker decodes the image and reconstructs the hidden content.

**Defenses**
- **Sanitize images:** Strip any metadata and clamp pixel values to a small set of colors.  
- **Limit resolution/size:** Reduce detail so that tiny changes can’t carry useful bits.  
- **Audit outputs:** Monitor for unusual color patterns or sudden increases in image entropy.  

By treating images like sealed envelopes—only the outer shape matters—you keep the secret inside safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
