---
qid: ing_0941e17fad__star__local
question: 'Explain: When RAG vs long-context vs fine-tuning — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 373
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:35-05:00'
sources: []
---

**Situation** – While leading a prototype for a customer support chatbot at a fintech startup, we had a backlog of 50k knowledge‑base articles and needed the bot to answer regulatory queries within 1 s. The initial model (GPT‑3.5) returned generic answers that often missed key compliance terms.

**Task** – I had to decide between three approaches—Retrieval‑Augmented Generation (RAG), extending the prompt with a long context, or fine‑tuning a custom model—to deliver accurate, compliant responses under strict latency constraints.

**Action** – First, I benchmarked each method on a held‑out set of 200 regulatory FAQs. For RAG, I built an Elasticsearch index and used a dense vector search (FAISS) to retrieve the top 5 relevant passages; the LLM then generated answers conditioned on those snippets. The long‑context approach concatenated the entire article set into a single prompt—this exceeded token limits and slowed inference by 4×. Fine‑tuning required 120 k labeled examples, which we didn’t have. I opted for RAG, integrating it with FastAPI and caching top retrievals to keep latency under 800 ms.

**Result** – The RAG model achieved a 92 % exact‑match accuracy versus 68 % for the baseline, while keeping inference time at 750 ms on an A100. We reduced customer ticket volume by 35 % in the first month and learned that retrieval‑augmented pipelines scale better than long‑context or full fine‑tuning when data is abundant but labels are scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
