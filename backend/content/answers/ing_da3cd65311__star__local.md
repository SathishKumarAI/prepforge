---
qid: ing_da3cd65311__star__local
question: 'Q78: Someone on your team suggests replacing your entire RAG pipeline with
  a 1M-token context window and just loading all documents every request. How do you
  evaluate this idea?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 358
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:39-05:00'
sources: []
---

**Situation**  
In our quarterly product demo we had a RAG system that pulled top‑k passages from a 500 GB vector store into a 16K token prompt for GPT‑4o. During a sprint planning call, a teammate proposed ditching the index and instead loading all 2 million documents into a single 1M‑token context window on each request.

**Task**  
I needed to assess whether that approach would actually improve relevance or latency while staying within OpenAI’s usage limits and cost constraints.

**Action**  
First, I benchmarked the token count of our full corpus: it averaged ~1.2 million tokens, exceeding the model’s max and inflating the prompt cost by roughly 4×. I then simulated a single request with all docs in context using OpenAI’s pricing API to calculate an estimated $3 per query versus our current $0.12. Next, I ran a small-scale test: I fed the full corpus into GPT‑4o and compared answer quality (BLEU score) against our existing retrieval‑augmented pipeline; the metric dropped from 0.73 to 0.62 due to prompt noise. Finally, I plotted latency: loading all docs added ~3 seconds per request, pushing us past our SLA.

**Result**  
I presented a cost–benefit chart showing a 250% increase in spend for a 15% drop in relevance and a 40% latency penalty. The team rejected the idea, opting to optimize our vector index instead. I learned that scaling context size can backfire when token budgets and prompt quality are ignored.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
