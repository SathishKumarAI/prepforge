---
qid: ing_940debb1cd__star__local
question: 'Explain: The Decision Framework — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 307
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:04-05:00'
sources: []
---

**Situation**  
At my previous company we were tasked with launching a customer‑support chatbot that could handle up to 10k queries per day while staying under our $5,000/month AI usage budget.

**Task**  
I needed to design an agent architecture that balanced rapid deployment with cost control, avoiding the temptation to layer multiple specialized subagents that would inflate compute and maintenance overhead.

**Action**  
I applied a decision framework that first defined the core intent (answering FAQs) and then evaluated whether each potential tool—retrieval‑augmented generation, rule‑based fallback, or a dedicated FAQ subagent—served that intent without duplication. I chose a single LLM with fine‑tuned retrieval prompts, coupled with a lightweight regex router for high‑confidence rules. For edge cases, instead of building a separate “billing” subagent, I added a prompt template that dynamically inserts context from our knowledge base. This kept the stack to one LLM endpoint and one vector store, eliminating unnecessary orchestration code.

**Result**  
Launch was 30% faster than the projected timeline, query latency dropped by 25%, and monthly AI spend stayed 18% below budget. I learned that a disciplined intent‑first framework prevents over‑engineering while still delivering robust, maintainable agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
