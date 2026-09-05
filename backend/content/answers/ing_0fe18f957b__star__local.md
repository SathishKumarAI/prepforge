---
qid: ing_0fe18f957b__star__local
question: 'Explain: Agentic RAG (Loop-based) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 521
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:08-05:00'
sources: []
---

**Situation**  
At my last company we were building a customer‑support chatbot for a SaaS platform with over 12,000 product‑specific FAQs. The existing retrieval‑augmented generation (RAG) pipeline fetched static snippets from our knowledge base but the bot’s responses drifted when new feature updates rolled out—developers complained it was “stale” and often gave contradictory advice.

**Task**  
I had to redesign the RAG system so that the agent could actively query the latest documentation, learn from user feedback in real time, and generate up‑to‑date answers without manual re‑indexing. The goal was a 30 % reduction in support tickets handled by humans and a measurable increase in answer confidence scores.

**Action**  
I implemented an agentic RAG loop:  
1. **Retriever** – a dense vector index (FAISS) built on the latest docs, refreshed every hour via a CI/CD webhook that parsed GitHub releases.  
2. **Agent** – a lightweight LLM prompt engineered to first *query* the retriever for context, then *critique* its own draft against a rule set (e.g., “no deprecated APIs”). If confidence fell below 0.7, it would re‑retrieve with more specific queries or ask clarifying questions from the user.  
3. **Rewriter** – a fine‑tuned T5 model that paraphrases retrieved chunks into conversational style while preserving factuality.  
4. **Feedback loop** – every bot answer was logged and scored by an internal “quality” metric; low scores triggered automatic retraining of the rewriter on those examples.

I used LangChain to orchestrate the components, OpenAI’s GPT‑4o for the agent, and PyTorch Lightning for fine‑tuning. The whole pipeline ran on a single Kubernetes pod with autoscaling based on request volume.

**Result**  
Within three months we saw a 42 % drop in human‑resolved tickets and a 25 % lift in user satisfaction scores. The confidence metric rose from an average of 0.62 to 0.81, and the retriever’s latency stayed under 200 ms per request. I learned that giving the LLM a clear “plan” (query → critique → rewrite) turns passive retrieval into an active dialogue, dramatically improving relevance without constant manual curation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
