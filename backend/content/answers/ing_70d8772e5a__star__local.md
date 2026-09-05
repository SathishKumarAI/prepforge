---
qid: ing_70d8772e5a__star__local
question: How do you monitor a deployed LLM system for drift? What kinds of drift
  matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 378
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:58-05:00'
sources: []
---

**Situation:**  
At my last role, we had just rolled out a custom GPT‑4 model that generated product recommendations on an e‑commerce site. Within the first week of production traffic hit 2 M requests per day, and our click‑through rate (CTR) started slipping from 12% to around 9%.

**Task:**  
I was tasked with setting up continuous monitoring for model drift—both data and concept drift—and quickly identifying which type was hurting performance so we could intervene.

**Action:**  
1. **Data‑drift pipeline:** I built a feature‑level comparison between the live request payloads and the training distribution using streaming statistics (mean, variance) in Kafka Streams, alerting when KL divergence exceeded 0.15.  
2. **Concept‑drift detector:** I instrumented the model to log predicted scores and actual user actions, feeding them into an online A/B test framework that ran a PageRank‑style drift score every 12 hrs.  
3. When alerts fired, I automatically pulled a fresh sample of recent requests, re‑scored them with both the live and baseline models, and plotted the difference in CTR distribution to confirm the source.  
4. Finally, I scheduled a nightly retrain on the newest 10% data slice and updated the inference container via blue‑green deployment.

**Result:**  
Within 48 hrs of deploying this system, we isolated a shift in user intent (concept drift) tied to a seasonal promotion. Retraining reduced CTR back to 11.8% and stabilized it over the next month. I learned that pairing statistical data‑drift alerts with online concept‑drift tests gives the fastest feedback loop for LLMs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
