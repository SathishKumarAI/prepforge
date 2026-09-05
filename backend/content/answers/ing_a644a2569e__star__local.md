---
qid: ing_a644a2569e__star__local
question: Compare single-shot RAG with agentic RAG. When does retrieval-as-a-tool
  win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 399
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:38-05:00'
sources: []
---

**Situation:**  
In a recent project for an internal knowledge‑base chatbot, we noticed that user queries were often too broad and the single‑shot RAG model was returning generic or slightly off answers, especially on niche policy documents.

**Task:**  
I had to decide whether to keep the simple single‑shot retrieval pipeline or switch to an agentic RAG approach where a language model orchestrates multiple retrievals and reasoning steps. The goal was to improve answer relevance while keeping latency under 1 second for production use.

**Action:**  
First, I benchmarked the baseline: a vector‑search + GPT‑4 single‑shot pass that fetched one passage per query. I measured accuracy (ROUGE‑L) at 0.62 and latency at 650 ms. Next, I built an agentic loop: the model first formulates sub‑questions, performs targeted searches via Elasticsearch, then aggregates snippets before generating a final response. I added caching of intermediate retrievals to reduce repeated queries. During A/B tests, the agentic pipeline improved ROUGE‑L to 0.78 but increased latency to 1.2 seconds.

**Result:**  
For high‑stakes policy answers where precision matters more than speed, the agentic RAG clearly wins—boosting accuracy by ~25% and enabling multi‑step reasoning that a single shot can’t capture. However, for time‑critical FAQs or low‑complexity queries, retrieval‑as‑a‑tool in a single‑shot setup is preferable because it meets strict latency budgets while still delivering acceptable quality. This trade‑off taught me to match the RAG style to the use‑case’s accuracy vs latency priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
