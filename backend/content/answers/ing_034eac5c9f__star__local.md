---
qid: ing_034eac5c9f__star__local
question: Models hallucinate. How do you design the product around that, not just
  the prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 331
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:52-05:00'
sources: []
---

**Situation** – I was leading the launch of a medical triage chatbot for a health‑tech startup. Early beta tests revealed that while the model answered most queries correctly, it sometimes generated confident but incorrect advice—classic hallucination—and our compliance team flagged it as a risk.

**Task** – Build a product layer that detects and mitigates hallucinations in real time, ensuring safety and user trust without sacrificing speed or developer agility.

**Action** – First, I added an auxiliary “verification engine” that cross‑checks every model output against a curated knowledge graph (FHIR resources) using a lightweight inference network. If the confidence score from the verifier fell below 0.85, the system automatically appended a disclaimer and routed the response through a human review queue via Slack. Second, I introduced a “confidence‑weighted prompt” strategy: we prepended context with explicit instructions like “If unsure, say you’re not certain.” Finally, we instrumented telemetry to log hallucination incidents and retrain the model on those samples in monthly fine‑tuning cycles.

**Result** – Within three months, hallucination incidents dropped from 12% of interactions to under 1%, while latency remained below 800 ms. User satisfaction rose by 18% per NPS survey, and we secured a $2M Series A round with regulators citing our proactive safety framework. I learned that engineering product safety around AI means layering verification, human oversight, and continuous learning—not just tweaking prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
