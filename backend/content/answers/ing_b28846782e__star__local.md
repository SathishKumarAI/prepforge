---
qid: ing_b28846782e__star__local
question: 'Explain: F4: Bad training data poisons the adapter'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:40-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a language‑model‑based customer support chatbot. The product team wanted to add a domain‑specific “financial advisor” adapter so the bot could answer regulatory questions without retraining the whole model.

**Task:**  
I had to build and integrate that adapter, ensuring it performed accurately on financial queries while keeping inference latency under 200 ms per request.

**Action:**  
First I audited the training corpus: we’d scraped public forums and a few proprietary datasets. A quick statistical scan revealed a large chunk of the data came from a single forum thread with many duplicated user posts—essentially noise. I filtered out duplicates, removed low‑confidence labeled examples, and added a small curated set of official regulatory FAQs. Then I fine‑tuned the adapter using LoRA on GPT‑4‑like architecture, monitoring perplexity and a custom “regulatory compliance” metric. During validation, I ran automated unit tests that flagged any answer containing prohibited language or outdated statutes.

**Result:**  
The cleaned adapter achieved a 23 % reduction in hallucinations compared to the raw model (from 12 % to 9.2 %) and met our latency target with an average of 185 ms per inference. The project was deployed two weeks early, and we saw a 15 % drop in support tickets for mis‑answered compliance queries. I learned that data hygiene is often the single most critical step before any architectural tweak can succeed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
