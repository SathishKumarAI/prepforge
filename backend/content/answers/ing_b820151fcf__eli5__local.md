---
qid: ing_b820151fcf__eli5__local
question: 'Explain: A customer wants an assistant over their internal knowledge base
  and asks whether to fine-tune. Prompting, RAG, or fine-tuning - walk through the
  decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 258
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:18-05:00'
sources: []
---

Imagine your knowledge base is a library that only you can read.  
You want an assistant who can answer questions quickly and accurately.

**Prompting** – give the assistant a question and let it pull from its own “memory” (the pre‑trained model). It’s fast, no extra work, but it might miss details or give generic answers because it hasn’t seen your exact books yet.  

**Retrieval‑Augmented Generation (RAG)** – keep the library on hand and ask the assistant to fetch relevant pages before answering. It still uses its own language skills but now sees your specific content. Good for up‑to‑date facts, no retraining needed, but it can only use what’s in the library at that moment.

**Fine‑tuning** – train a new version of the assistant on all your books so it “learns” your style and specifics. It’s slower to set up and requires data and compute, but once done it answers like a human who has read every page.

So:  
- If you need quick setup → prompting or RAG.  
- If you want deep, consistent knowledge of your domain → fine‑tune.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
