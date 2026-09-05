---
qid: ing_de91e6ddbe__star__local
question: 'Explain: Interview questions — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:58-05:00'
sources: []
---

**Situation** – At my previous company we launched a customer‑support chatbot that was great at answering FAQs but often drifted off topic when users asked about new product features. Our internal metrics showed a 12 % drop in user satisfaction during those interactions, and the product team flagged it as a risk for brand consistency.

**Task** – I had to fine‑tune the model on our proprietary domain data while aligning its responses with corporate tone guidelines, ensuring it stayed helpful without venturing into unsupported territory. The goal was a 20 % improvement in sentiment scores within two sprints.

**Action** – First, I curated a labeled dataset of 15 k conversation snippets from past support tickets and added an “alignment tag” indicating acceptable phrasing. Using Hugging Face’s Trainer API, I performed low‑rank adaptation (LoRA) on the base Llama‑2 model, freezing most weights to keep inference costs low. For alignment, I introduced a reward‑learning loop with RLHF: generated responses were scored by an internal policy network trained on the corporate style guide, and the top 30 % were used as positive examples in subsequent fine‑tuning epochs. I also set up a monitoring pipeline that flagged any response deviating beyond a confidence threshold.

**Result** – After deployment, sentiment scores rose from 78 % to 92 %, user‑reported “off‑topic” incidents fell by 68 %, and the model remained within the 5 ms latency budget. I learned that combining LoRA with a lightweight reward signal can yield fast, aligned fine‑tuning without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
