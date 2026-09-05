---
qid: ing_e28708aefe__star__local
question: 'Q: How do you make a production LLM system EU AI Act ready without building
  a separate compliance stack?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 426
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:47-05:00'
sources: []
---

**Situation** – I was leading the rollout of a customer‑facing recommendation engine powered by GPT‑4 for an e‑commerce platform that had to launch before the EU AI Act enforcement deadline. The existing stack included Docker, Kubernetes, and our in‑house monitoring suite; we didn’t have a dedicated compliance layer.

**Task** – Ensure the LLM service met all transparency, risk‑assessment, data‑protection, and human‑in‑the‑loop requirements of the Act without adding another monolithic compliance microservice.

**Action** – I mapped each Act requirement to features already in our stack. For transparency, we leveraged OpenAI’s audit logs and stored them in a secure PostgreSQL table with automatic JSON schema validation; this served as both an internal audit trail and a public-facing “explanation” endpoint. Risk assessment was handled by integrating the LLM’s output confidence scores into Prometheus alerts that triggered a fallback rule‑based system when thresholds were breached. Data protection was enforced via a lightweight data‑masking layer in our ingestion pipeline, and we used Kubernetes NetworkPolicies to isolate the model pods, satisfying the Act’s isolation clauses. Finally, I orchestrated a quarterly “compliance health check” script that ran through all these checkpoints and generated an ISO‑27001‑style report.

**Result** – We achieved full EU AI Act readiness in 6 weeks—cutting the projected 3‑month compliance build to under half the time—and saved $120K in tooling costs. The system now logs every inference, auto‑fallbacks on high‑risk predictions, and provides a verifiable audit trail, all while staying within our existing infrastructure. I learned that aligning legal requirements with existing observability and data‑handling patterns can eliminate the need for a separate compliance stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
