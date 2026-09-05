---
qid: ing_d11a5799e3__star__local
question: What is the difference between RAG and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:36-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving a customer‑support chatbot for a SaaS company that had ~3 M monthly queries. The existing LLM answered generic questions well but struggled with product‑specific policy changes, leading to a 22% rate of user complaints about inaccurate answers.

**Task** – I needed to decide whether to fine‑tune the base model on our internal knowledge base or implement Retrieval Augmented Generation (RAG) so the bot could pull up-to-date documents during inference, without retraining the entire network.

**Action** – I first prototyped a fine‑tuned GPT‑4 model using 20 k policy docs. Training took 48 h on an A100 and improved accuracy by 12% but deployment latency doubled. Next, I built a RAG pipeline: an ElasticSearch index of the same docs, a dense retriever (Sentence‑BERT), and a lightweight decoder that injects retrieved passages into prompts. This added only ~30 ms per request and allowed instant policy updates by re‑indexing without any model re‑training.

**Result** – Switching to RAG cut complaint rates from 22% to 9%, improved latency by 35%, and reduced engineering effort—no need for monthly retraining cycles. I learned that fine‑tuning is powerful when the domain is static, but RAG offers agility and cost‑efficiency when knowledge changes frequently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
