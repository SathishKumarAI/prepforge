---
qid: ing_3ae36b11e6__star__local
question: Your resume says ML Engineer and this role is titled AI Engineer. How do
  you see the difference, and where do you fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 290
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:31-05:00'
sources: []
---

**Situation**  
In my last gig at a fintech startup, we had an existing recommendation engine that churned out product suggestions in under a second but was only 65 % accurate. The marketing team wanted to turn it into an AI‑driven personalization platform before the holiday season.

**Task**  
I needed to re‑architect the model pipeline so it could ingest real‑time user signals, adapt on the fly, and still meet our latency SLA of <200 ms, all while staying within a 10 % budget increase.

**Action**  
First, I evaluated transformer‑based architectures (e.g., BERT‑style embeddings) against lightweight gradient‑boosted trees. I built an experiment framework in Python with PyTorch Lightning and Ray Tune to run hyperparameter sweeps on our GPU cluster. After selecting a distilled model, I deployed it via FastAPI behind a Kubernetes autoscaler, adding a feature‑store layer (Feast) for consistent real‑time features. I also introduced continuous evaluation with A/B testing dashboards in Grafana.

**Result**  
Accuracy jumped to 82 %, latency stayed at 180 ms, and we cut ad spend by 12 % thanks to better targeting. The project demonstrated my ability to blend ML research with production AI engineering—exactly what an AI Engineer role demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
