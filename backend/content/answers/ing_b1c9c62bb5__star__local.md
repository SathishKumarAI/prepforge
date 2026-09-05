---
qid: ing_b1c9c62bb5__star__local
question: 'Can we catch it in production? — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 334
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:09-05:00'
sources: []
---

**Situation:**  
While leading a product‑release for our voice‑assist platform, we noticed that the new generative model was occasionally outputting fabricated facts during user interactions—especially when answering historical queries. This was risky because any misinformation could damage brand trust and violate regulatory compliance.

**Task:**  
I had to design a lightweight, real‑time “hallucination guard” that would flag or correct suspect responses before they reached the end user, without introducing noticeable latency or compromising user experience.

**Action:**  
First, I built an internal metadata tagger that annotated each generated sentence with a confidence score from the model’s log‑probabilities. Next, I trained a secondary lightweight classifier on a curated dataset of known hallucinations to detect high‑risk phrasing patterns. The guard pipeline was deployed as an edge microservice in our Kubernetes cluster; it intercepted every response, applied the classifier, and either appended a disclaimer or triggered a fallback to a static knowledge base. To keep latency low, I used ONNX runtime with GPU batching and set a 50 ms cutoff—any request exceeding that threshold was automatically routed to a human‑in‑the‑loop review queue.

**Result:**  
Within two weeks of rollout, hallucination incidents dropped from 12% to under 1% of all responses. We also reduced the average response time by only 8 ms, keeping UX on target. The exercise taught me that coupling model confidence with a secondary heuristic filter can effectively tame generative AI in production while maintaining performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
