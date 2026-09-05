---
qid: ing_f788d2f203__star__local
question: 'Explain: Advantages and Disadvantages of Clustering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:46-05:00'
sources: []
---

**Situation** – While leading a data‑science sprint at my previous company, we were tasked with segmenting our e‑commerce customers to personalize marketing campaigns. The dataset had 2 million records and 30 behavioral features.

**Task** – I needed to choose a clustering technique that would produce stable, actionable segments without overfitting, while staying within the two‑week sprint deadline.

**Action** – I started with K‑means because of its simplicity and speed on high‑dimensional data. After standardizing features and applying PCA for dimensionality reduction, I used the elbow method and silhouette scores to pick k=6. To mitigate noise and outliers, I ran DBSCAN on a subset to validate cluster shapes; it confirmed that K‑means’ spherical assumption was reasonable here. I also benchmarked runtime against Agglomerative clustering (which would have been too slow). For interpretability, I generated centroid profiles and mapped them back to marketing personas.

**Result** – The final clusters increased campaign click‑through rates by 12 % and lift in conversion by 8 %. However, we discovered that K‑means’ reliance on Euclidean distance made it sensitive to feature scaling, so we documented a rigorous preprocessing pipeline for future projects. I learned the trade‑off: K‑means offers speed and scalability but can miss non‑spherical patterns; validating with a density‑based method balances accuracy and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
