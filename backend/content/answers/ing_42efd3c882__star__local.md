---
qid: ing_42efd3c882__star__local
question: 'Q: How do you test prompt changes before production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 356
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:41-05:00'
sources: []
---

**Situation:**  
During the rollout of our conversational AI for customer support, a new intent‑recognition prompt was drafted to improve accuracy on product‑related queries. The live system handled ~30k tickets daily, and even a small drop in precision could mean thousands of misrouted conversations.

**Task:**  
I had to validate the new prompt’s performance before deploying it to production, ensuring that precision stayed above 92% while recall did not dip below 88%, all within our SLA of 2‑second response time.

**Action:**  
1. I built a dedicated “prompt test” environment mirroring production data streams and latency constraints.  
2. Using the OpenAI API’s `completions` endpoint, I ran batch evaluations on a held‑out dataset of 5k real customer messages, capturing both prompt output and token counts.  
3. I integrated a custom A/B testing script that fed identical inputs to the old and new prompts, logged metrics in Prometheus, and plotted ROC curves with Grafana dashboards.  
4. For edge cases, I performed manual reviews on a random 200‑message subset, annotating any hallucinations or misclassifications.  
5. Based on the results, I tuned temperature and max tokens, re‑tested until thresholds were met.

**Result:**  
The new prompt achieved 94% precision and 90% recall with an average latency of 1.8 s, exceeding our targets. Deployment went live without service interruptions. I learned that a lightweight, reproducible test harness—coupled with real‑time metrics—is essential for safely iterating on AI prompts at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
