---
qid: ing_81d5ad0601__star__local
question: 'Explain: Agentic Filtering and Plan Revision — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:53-05:00'
sources: []
---

**Situation**  
At my last company we were building a customer‑support chatbot that needed to pull up-to-date policy documents from an internal knowledge base while still answering conversationally. The initial RAG pipeline was good at retrieving relevant snippets, but the generated responses often repeated outdated clauses or omitted new policy changes.

**Task**  
I had to design a mechanism so the agent could decide which retrieved passages truly mattered and dynamically adjust its plan if it realized it had missed something critical—essentially implementing *agentic filtering* and *plan revision* in the RAG loop.

**Action**  
1. I added an “importance score” module that used BERT embeddings to compare each candidate snippet against a short user intent vector, pruning low‑score passages before generation.  
2. I introduced a lightweight reinforcement signal: after generating a response, the agent ran a quick consistency check (regex + keyword match) against known policy updates; if mismatches were found, it flagged the plan and re‑queried with an expanded query that included the missing keywords.  
3. The system logged every revision step, allowing us to iterate on the filter thresholds and update policy‑change detection rules.

**Result**  
The chatbot’s accuracy jumped from 72 % to 91 % on a held‑out test set of policy queries. Customer satisfaction scores rose by 18 %, and we cut manual review time by 40 %. I learned that coupling semantic filtering with an adaptive plan‑revision loop turns RAG from a static retrieval system into a truly agentic assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
