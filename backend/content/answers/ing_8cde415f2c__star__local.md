---
qid: ing_8cde415f2c__star__local
question: How do you choose k in clustering, and how do you evaluate a clustering
  when you have no labels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 315
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:30-05:00'
sources: []
---

**Situation:**  
When I was redesigning the customer segmentation model for a fintech app, our data had grown from 10k to 120k users and we needed to create meaningful clusters without any pre‑existing labels.

**Task:**  
Pick an optimal number of clusters (k) and validate the quality of those clusters so that product teams could tailor features to each segment.

**Action:**  
I started with a k‑means run for k = 2–20, plotting the within‑cluster sum of squares (WCSS). The elbow appeared around 6, but I also computed silhouette scores; they peaked at k = 5. To balance interpretability and separation, I ran hierarchical clustering on a PCA‑reduced subset to confirm that five groups were stable across linkage methods. For evaluation without labels, I used cluster stability (Jaccard similarity over bootstrap samples) and domain checks: each cluster had distinct age, transaction frequency, and churn risk profiles. Finally, I presented the five clusters with visual dashboards to stakeholders.

**Result:**  
The chosen k = 5 increased targeted engagement by 18% in a pilot campaign, and churn dropped 12% for high‑risk segments. I learned that combining quantitative criteria (elbow, silhouette) with bootstrap stability and domain validation yields robust, actionable clusters even when labels are absent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
