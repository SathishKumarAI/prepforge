---
qid: ing_fc5a40d767__star__local
question: 'Explain: Hate Speech Detection — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 302
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:10-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a community forum that grew to over 250,000 active users in six months. Within weeks, moderation complaints spiked—our automated filters were flagging too many posts as hate speech, causing user frustration and slow review times.

**Task:**  
I was tasked with building a real‑time hate‑speech detection model that reduced false positives by at least 30% while keeping true‑positive recall above 85%, all within the existing infra budget.

**Action:**  
First I curated a balanced dataset of 120k posts, tagging nuanced contexts (sarcasm, protected group references). I experimented with transformer architectures; BERT-base fine‑tuned on our data gave 92% accuracy but was too slow. Switching to DistilBERT cut inference latency by 70 %. To mitigate bias, I added a counterfactual augmentation step that re‑ranked predictions for ambiguous phrases using an auxiliary sentiment model. Deployment used TensorFlow Lite in a Kubernetes microservice, scaling automatically with traffic.

**Result:**  
Post‑deployment, false positives dropped from 28% to 18%, improving user satisfaction scores by 12 points on our NPS survey. Recall remained at 87%. I learned that balancing precision and recall requires both model tweaks and thoughtful data augmentation, plus continuous monitoring for drift in real‑world language use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
