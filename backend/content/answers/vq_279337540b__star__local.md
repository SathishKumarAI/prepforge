---
qid: vq_279337540b__star__local
question: What is the hierarachical Clustering algorithm?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:30-05:00'
sources: []
---

**Situation**  
During a data‑integration project at my previous company we had to merge customer profiles from three legacy systems. The resulting dataset contained over 500 000 rows with noisy, duplicate entries and no clear segmentation. Our product manager asked us to identify natural groupings of customers for targeted marketing.

**Task**  
I was tasked with building a clustering solution that could discover hierarchical relationships among customers, allowing the marketing team to drill down from broad segments (e.g., “high‑value”) into more granular sub‑segments (e.g., “frequent online shoppers”). The algorithm needed to run on our existing Spark cluster and produce interpretable dendrograms for non‑technical stakeholders.

**Action**  
I implemented a agglomerative hierarchical clustering pipeline in PySpark. First, I engineered features: one‑hot encoded demographics, normalized purchase frequency, and TF‑IDF vectors from recent review texts. After standardizing with StandardScaler, I computed pairwise cosine distances using Spark’s MLlib KMeans to approximate the distance matrix (to keep memory usage manageable). Then I applied SciPy’s linkage function (`average` method) on the sampled distance matrix, producing a dendrogram that I visualized with Plotly. Finally, I automated cut‑off selection by computing silhouette scores at various heights and exposed the resulting clusters in a Delta Lake table for downstream use.

**Result**  
The hierarchical clustering revealed 12 meaningful tiers; marketing leveraged these to launch two campaigns that increased cross‑sell revenue by 18 % within three months. The solution also reduced data duplication errors by 23 %. I learned how to balance algorithmic depth with cluster interpretability, and the importance of sampling strategies when working with large Spark datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
