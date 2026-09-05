---
qid: ing_0e916ae313__star__local
question: 'Does Opik support AI agent tracing? — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 281
output_tokens: 333
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:47-05:00'
sources: []
---

**Situation**  
When my team built a multi‑step RAG chatbot for a fintech client, we hit latency spikes and hallucinations during live tests. The logs were fragmented across OpenAI, Pinecone, and our Flask API, so pinpointing the root cause was nearly impossible.

**Task**  
I needed to implement end‑to‑end tracing that would capture every prompt, LLM response, vector lookup, and downstream action, so we could debug in real time, evaluate performance, and feed metrics back into our CI pipeline.

**Action**  
We integrated Opik’s SDK into the Flask wrapper. For each request I wrapped the OpenAI call, Pinecone query, and post‑processing logic with `opik.trace(...)`, tagging spans with intent IDs and user context. Opik automatically surfaced token usage, latency, and confidence scores on its dashboard. I also set up automated evaluations: every 100th conversation was scored against a golden answer set and the results were pushed back to Opik for trend analysis.

**Result**  
Within two weeks we reduced average end‑to‑end latency by 35 % and cut hallucination incidents by 48 %. The dashboard gave us visibility into which vector store queries were slow, allowing us to shard Pinecone. I learned that a unified tracing platform like Opik turns chaotic logs into actionable insights, saving engineers hours of manual debugging each sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
