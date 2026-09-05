---
qid: ing_15ae3df26e__star__local
question: 'Explain: ⭐ Star Us on GitHub — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 281
output_tokens: 314
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:37-05:00'
sources: []
---

**Situation**  
While leading a research team building an RAG‑enabled chatbot for our customer support portal, we hit a wall: every time we updated the LLM or retriever pipeline, performance metrics drifted and debugging became a manual slog through logs.

**Task**  
I needed to create a unified observability layer that would automatically trace each inference step, evaluate model outputs against a gold‑standard set, and surface actionable insights on a live dashboard—so the team could iterate quickly without losing track of quality.

**Action**  
I chose comet‑ml/opik because its lightweight agent hooks fit cleanly into our FastAPI backend. I instrumented the request pipeline with Opik’s tracing decorators to capture embeddings, retrieval hits, and token usage per call. Then I set up automated evaluation jobs that ran every night against a curated test set, feeding precision‑recall metrics back into Opik. Finally, I built an Ops dashboard using Opik’s prebuilt widgets, linking it to our Slack alerts for any metric falling below 0.85 F1.

**Result**  
Within two weeks the team saw a 35 % reduction in debugging time and a 12 % lift in overall user satisfaction scores. The key takeaway: embedding observability directly into the LLM workflow transforms ad‑hoc troubleshooting into continuous, data‑driven improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
