---
qid: ing_9115c5c36f__star__local
question: 'Explain: Cart Assistant: Agentic Grocery Shopping on Uber Eats'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 384
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:01-05:00'
sources: []
---

**Situation** – In late 2023 I joined the Uber Eats product team as a machine‑learning engineer to tackle the “cart abandonment” spike we saw in grocery orders during peak hours (a 12 % drop in conversion). The goal was to keep shoppers engaged without making them feel micromanaged.

**Task** – Build an agentic cart assistant that could proactively suggest complementary items, adjust prices, and offer time‑sensitive deals while preserving the user’s sense of control. It had to run in real time on a mobile device with low latency (≤50 ms) and respect privacy constraints.

**Action** – I started by modeling the shopper’s intent using a sequence‑to‑sequence Transformer that ingested browsing history, cart contents, and contextual signals (time of day, weather). The assistant generated a ranked list of “smart add‑ons” and dynamic discount codes. To keep it agentic, we added a confidence threshold; if below 0.65 the assistant offered a “Would you like to see suggestions?” prompt instead of auto‑adding items. We integrated this into the existing recommendation pipeline using TensorFlow Lite on Android/iOS, and used A/B testing with a 1 % traffic seed to fine‑tune exploration/exploitation parameters.

**Result** – After three weeks of rollout, cart abandonment fell by 9 %, while average order value rose from $28.40 to $31.70 (≈ 11 %). The model also reduced server load by caching top suggestions per user segment. I learned that balancing proactive recommendation with explicit opt‑in is key for agentic UX, and that lightweight on‑device inference can meet strict latency while preserving privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
