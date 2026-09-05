---
qid: ing_fc8e5fa070__star__local
question: 'Explain: Explore more from Algorithms — Generative AI with Large Language
  Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:34-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a product‑innovation sprint for our fintech app’s user onboarding flow. The conversion rate had plateaued at 45 %, and we needed fresh content that felt personalized without writing thousands of copy variants manually.

**Task** – My goal was to prototype a generative AI system that could produce tailored welcome emails, FAQ snippets, and chatbot responses in real time, while keeping latency below 200 ms and ensuring compliance with data‑privacy regulations.

**Action** – I enrolled in the Coursera “Generative AI with Large Language Models” course to grasp fine‑tuning, prompt engineering, and safety mitigations. Using Hugging Face’s Transformers library, I fine‑tuned a DistilBERT‑based model on our internal user data (anonymized) and deployed it via FastAPI behind an autoscaling Kubernetes cluster. I added a lightweight post‑processing layer that filters out disallowed content and uses a custom scoring function to maintain tone consistency. We ran A/B tests comparing the AI‑generated emails against static templates, measuring open rates, click‑throughs, and support tickets.

**Result** – The AI system increased onboarding conversion from 45 % to 58 % (a 13 pp lift) and reduced average support tickets by 22 %. Latency stayed under 180 ms for 95 % of requests. I learned that blending domain knowledge with generative models, plus rigorous safety checks, can deliver measurable business impact while keeping user trust high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
