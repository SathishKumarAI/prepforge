---
qid: ing_b93a96f23d__star__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:43-05:00'
sources: []
---

**Situation:**  
I was leading the QA team for a smart‑home voice assistant that had just launched its beta in two major markets. Users complained that “Hey Alexa” sometimes didn’t respond, even though the dashboard showed a high accuracy rate.

**Task:**  
My goal was to identify why the internal metric—Word Error Rate (WER)—was not reflecting real user frustration and to propose a more reliable measurement for future releases.

**Action:**  
I broke down WER: it sums substitutions, deletions, and insertions over total words. I ran a side‑by‑side audit on 1,000 utterances, comparing WER with user satisfaction scores. I discovered that many high‑WER cases involved low‑confidence filler words (“uh,” “like”) or proper nouns that the model mis‑transcribed but didn’t actually break the task flow. I implemented an adjusted metric—Contextual Accuracy Score (CAS)—which weighted errors by their impact on intent recognition and incorporated confidence thresholds. I also set up a real‑time dashboard linking CAS to user logs.

**Result:**  
After deploying CAS, we saw a 35 % drop in reported “no‑response” incidents, and the metric correlated 0.82 with Net Promoter Score instead of 0.45 for WER. The team learned that raw transcription accuracy can mislead product decisions; contextual relevance matters more for voice UX.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
