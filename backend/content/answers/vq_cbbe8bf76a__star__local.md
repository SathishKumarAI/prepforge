---
qid: vq_cbbe8bf76a__star__local
question: What is the difference between Eigenvectors and Eigenvalues?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 336
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:52-05:00'
sources: []
---

**Situation:**  
During my senior capstone, I was tasked with improving a face‑recognition pipeline that relied on PCA for dimensionality reduction. The team noticed the model’s accuracy plateaued at 78 % despite adding more training data.

**Task:**  
I needed to diagnose why the principal components weren’t capturing enough variance and decide whether to adjust the eigenvalue threshold or rethink the feature extraction method.

**Action:**  
First, I computed the covariance matrix of the pixel intensities and then performed eigendecomposition using NumPy’s `linalg.eig`. The resulting eigenvectors were the directions in pixel space that explained the most variance—essentially the “basis” for our reduced representation. Each eigenvector came with an associated eigenvalue, a scalar indicating how much variance lies along that direction. I plotted the cumulative explained variance curve; it showed that the top 50 eigenvalues captured only ~65 % of total variance. To address this, I increased the retained components to 120 and re‑trained the classifier, which required adjusting memory usage but kept runtime acceptable.

**Result:**  
Accuracy jumped from 78 % to 86 %, a 12 percentage point lift, while inference time increased by just 18 %. The exercise reinforced that eigenvectors define *directions* of importance, whereas eigenvalues quantify the *magnitude* of importance—critical insight when tuning dimensionality reduction in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
