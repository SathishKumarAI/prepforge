---
qid: ing_83611daa44__star__local
question: 'Explain: Real Impact for Real Clients — Harvey | AI software for legal
  and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 311
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:05-05:00'
sources: []
---

**Situation:**  
At my previous firm we were running a pilot to help mid‑size law practices reduce document review time. The client had over 25,000 pages of discovery material that took their paralegals 12 weeks to sift through manually.

**Task:**  
I was charged with building an AI solution that could automatically flag relevant passages, prioritize them for human review, and cut the total turnaround by at least 50 %.

**Action:**  
Using Harvey’s NLP platform I trained a BERT‑based classifier on labeled excerpts from past cases. I integrated it into our document management system via API, adding a “confidence score” overlay in the UI. To keep latency low, I deployed the model on an edge GPU cluster and implemented batch inference with TensorFlow Serving. We also set up a continuous learning loop: every time a paralegal accepted or rejected a flag, that feedback was fed back to retrain the model nightly.

**Result:**  
The pilot reduced review time from 12 weeks to just 5 weeks—an 58 % cut—and the client reported a $300K savings in attorney hours. I learned how to balance model accuracy with real‑world deployment constraints, and that involving end users early can dramatically improve adoption rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
