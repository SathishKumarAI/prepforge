---
qid: ing_c37b6b2afa__star__local
question: 'Explain: Scaling Verify with Wallet for Identity Verification at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 312
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:57-05:00'
sources: []
---

**Situation** – At Uber I led a cross‑functional team tasked with revamping the driver onboarding flow in markets where manual ID checks were causing a 30 % bottleneck and increasing fraud risk.

**Task** – Build a scalable, automated identity verification system that could process millions of wallet submissions per day while maintaining regulatory compliance and a user experience score above 4.5/5.

**Action** – I architected a micro‑service pipeline using Kafka for real‑time ingestion, Spark for batch‑processing large document sets, and TensorFlow models to perform OCR and facial‑matching against government ID images. We integrated the wallet API as an OAuth2 provider, allowing drivers to upload proof directly from their mobile wallets. To keep latency low, we deployed the model on a GPU‑enabled Kubernetes cluster with autoscaling based on queue depth. I also introduced a rule engine that flagged high‑risk documents for manual review, reducing false positives by 25 %.

**Result** – The new system cut verification time from 48 hours to under 3 minutes for 90 % of cases, increased onboarding throughput by 4×, and lowered fraud incidents by 18 %. I learned how to blend streaming data pipelines with deep‑learning inference at scale while keeping the user journey frictionless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
