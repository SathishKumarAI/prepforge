---
qid: ing_5158e05c51__star__local
question: A regional government wants an assistant in a low-resource language with
  only a few thousand sentences of clean text. How do you adapt a model to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 321
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:03-05:00'
sources: []
---

**Situation:**  
When the regional council approached us, they needed a conversational AI for their local dialect, but we only had about 4,000 well‑formatted sentences from community blogs and legal documents—far less than typical corpora.

**Task:**  
My goal was to create a functional language assistant that could answer FAQs and provide basic navigation help without overwhelming users with errors or hallucinations.

**Action:**  
I started by selecting an open‑source multilingual base model (e.g., mBART) and fine‑tuned it on the 4,000 sentences using LoRA adapters to keep training lightweight. To compensate for data scarcity, I generated synthetic paraphrases via back‑translation with a pivot language, expanding the dataset to ~20k examples while preserving linguistic nuances. I also built a custom tokenizer that merged frequent dialect morphemes into single tokens, reducing out‑of‑vocabulary rates. During fine‑tuning, I employed contrastive learning on question–answer pairs extracted from local FAQ sheets, and introduced a small rule‑based post‑processor to catch common misspellings.

**Result:**  
The assistant achieved an intent‑recognition accuracy of 87% and BLEU score of 0.62 against a held‑out test set—well above the baseline of 72%. User testing showed a 30% drop in support tickets within the first month, and I learned that combining lightweight adapters with targeted data augmentation can bridge large gaps in low‑resource language scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
