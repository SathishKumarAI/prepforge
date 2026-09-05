---
qid: q003__star__local
question: Explain the difference between supervised, unsupervised, and reinforcement
  learning.
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 298
total_tokens: 537
web_searches: 0
cost_usd: 0.0
sources: []
---

**Situation:**  
During my senior capstone project I was tasked with building a recommendation engine for a local e‑commerce store that had no labeled purchase data, only raw clickstreams.

**Task:**  
I needed to decide how best to learn user preferences from the data we had and then explain that decision to our non‑technical stakeholders who were familiar with basic machine learning but not the nuances of different learning paradigms.

**Action:**  
First I mapped out three possible approaches: supervised learning (training on explicit “liked” or “purchased” labels), unsupervised learning (discovering hidden patterns in click behavior without any labels), and reinforcement learning (learning from delayed rewards such as conversion rates). I ran quick pilots: a logistic regression on a small labeled subset, k‑means clustering on the entire dataset, and a simple bandit algorithm that rewarded clicks. I visualized the results with t‑SNE plots and reward curves to show how each method handled uncertainty.

**Result:**  
The stakeholders chose an unsupervised + reinforcement hybrid: cluster users first (k‑means) then apply a contextual bandit to personalize recommendations in real time. The system boosted conversion by 18% over baseline within two weeks, and I gained confidence in translating complex ML concepts into actionable business stories.
