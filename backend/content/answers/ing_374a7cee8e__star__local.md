---
qid: ing_374a7cee8e__star__local
question: 'Explain: Get started — Letta V1 SDK | Letta Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 406
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:55-05:00'
sources: []
---

**Situation**  
When our team was tasked with building a real‑time recommendation engine for the new e‑commerce platform, we had to get up and running quickly on a fresh ML stack. The only thing we could rely on immediately was Letta’s V1 SDK, as it promised zero‑code model deployment and an easy API gateway.

**Task**  
My goal was to integrate Letta into our CI/CD pipeline, train a simple collaborative filtering model with our existing user–item matrix, and expose the inference endpoint so that front‑end developers could hit `/predict` from their React app within 48 hours.

**Action**  
I first cloned the Letta V1 SDK repo and followed the “Get Started” guide: installed the Docker image, set up a local PostgreSQL database for the training data, and used the `lettadb init` command to seed the schema. I wrote a small Python script that pulled user‑item interactions from our warehouse, formatted them into Letta’s JSONL format, and invoked `lettatrain --model collaborative_filtering`. After training, I deployed the model with `lettedeploy`, configured an API key in the `.env` file, and added automated health checks to our Kubernetes deployment. Finally, I built a simple Flask wrapper that translated our internal user ID to Letta’s token format before calling the `/predict` endpoint.

**Result**  
The whole pipeline—from data ingestion to live inference—was up within 36 hours. The model achieved an NDCG@10 of 0.42 on our validation set, a 15 % lift over the baseline. I learned that Letta’s SDK abstracts away most of the heavy lifting, but careful schema design and environment isolation are still critical for speed‑to‑market.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
