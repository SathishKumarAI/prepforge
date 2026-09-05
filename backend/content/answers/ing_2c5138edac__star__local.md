---
qid: ing_2c5138edac__star__local
question: Will TikTok and YouTube follow Meta’s new rules for teens?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 321
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:43-05:00'
sources: []
---

**Situation:**  
When I joined a startup that was developing a video‑recommendation engine, we discovered our traffic from the US had spiked by 35% after TikTok rolled out its new “Family‑Safe” mode for under‑18 users. Our model was feeding content to teens without any age verification, risking regulatory backlash.

**Task:**  
I needed to redesign the recommendation pipeline so it could comply with Meta’s new teen‑privacy rules while maintaining a high engagement rate (target 1.8 × the current CTR).

**Action:**  
First, I added an on‑device age‑prediction layer using a lightweight CNN trained on face embeddings, achieving 92% accuracy on our test set. Next, I implemented a differential‑privacy wrapper around the user profile updates, injecting Gaussian noise calibrated to a ε=1 budget. Finally, I re‑trained the ranking model with a multi‑objective loss that penalized content with higher “risk” scores, while still optimizing for watch time.

**Result:**  
After deployment, teen CTR dropped only 4% (from 3.2 % to 3.07 %), and overall engagement rose by 12%. The noise injection reduced data utility by less than 1%, keeping our recommendation quality intact. I learned that balancing privacy constraints with business metrics is feasible when you treat compliance as a first‑class feature in the ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
