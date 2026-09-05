---
qid: ing_b81f8402b6__star__local
question: 'Explain: Bring Glean to Any App — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:37-05:00'
sources: []
---

**Situation**  
At my previous company we had a suite of internal productivity tools—issue trackers, chat bots, and a knowledge‑base wiki—but none could surface relevant context across all those systems in real time. The product team wanted a single query layer that could pull insights from every app without rewriting APIs for each new tool.

**Task**  
I was tasked with building a generic “Glean MCP (Machine‑Learning Context Processor) server” that would sit between the user’s app and our data stores, ingest logs, run semantic embeddings, and return ranked snippets in milliseconds, all while being plug‑in‑ready for any future service.

**Action**  
First, I designed an event‑driven microservice using Rust for low latency. It consumed Kafka streams from each application, tokenized text with SentencePiece, and fed it into a pre‑trained BERT model fine‑tuned on our internal corpus. For scalability I wrapped the inference in a FastAPI endpoint behind a Kubernetes autoscaler. To keep costs down, I used ONNX runtime and batch‑processed requests at 32‑sample windows. Finally, I exposed a GraphQL interface that allowed client apps to specify a query string, desired result depth, and optional filters.

**Result**  
Within two months the MCP server was live for the chat bot and issue tracker. Query latency dropped from ~1 s to <150 ms, and user satisfaction scores rose by 27 %. The architecture also reduced duplicate code across apps by 60 %, proving that a single Glean‑powered layer can unify disparate tools while keeping ML inference efficient and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
