---
qid: ing_68b518b6da__think__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 559
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:56:24-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *Clarify*: Are we comparing the algorithms themselves or their visual outputs?  
- *Assumptions*: The user knows basic dimensionality‑reduction terminology, wants practical guidance on when to pick each method, and is concerned about misinterpretation of resulting plots.

**2️⃣ Mental model / framework**  
Use a three‑axis comparison:  
1. **Purpose & assumptions** – linear vs nonlinear, global vs local structure preservation.  
2. **Computational trade‑offs** – speed, memory, scalability.  
3. **Interpretability & pitfalls** – how distances/cluster shapes translate into real data relationships.

**3️⃣ Step‑by‑step reasoning**  
1. **PCA**: linear, preserves variance → best for exploratory analysis when global structure matters and interpretability of loadings is needed.  
2. **t‑SNE**: highly nonlinear, focuses on local neighborhoods → useful for visualizing clusters in high‑dimensional data; note its sensitivity to perplexity and random seed.  
3. **UMAP**: similar goals to t‑SNE but faster, retains more global structure (manifold preservation) → good when scaling to large datasets or when you need a stable embedding for downstream tasks.  

For each, list typical use cases (e.g., PCA in gene expression preprocessing; t‑SNE for single‑cell RNA‑seq cluster discovery; UMAP for visualizing embeddings from deep nets). Then enumerate common misreads:  
- Assuming distances reflect true similarity (they don't in t‑SNE/UMAP).  
- Mistaking cluster separation as evidence of distinct classes.  
- Overlooking parameter sensitivity.

**4️⃣ Common traps to avoid**  
- Mixing up “global” vs “local” preservation—t‑SNE is local, PCA is global.  
- Ignoring that UMAP can preserve some global structure but still distorts absolute distances.  
- Forgetting that embeddings are *not* a substitute for statistical testing.

**5️⃣ Sanity‑check & communication**  
- Rephrase the answer in plain language: “PCA keeps what matters most overall, t‑SNE zooms into tight neighborhoods, UMAP is a faster, slightly more faithful version of t‑SNE.”  
- Highlight that misinterpretation often comes from treating plots as quantitative maps; emphasize qualitative insights only.  
- End with a quick decision checklist: “If you need speed and large data → UMAP; if you want fine cluster detail and can afford tuning → t‑SNE; if you care about variance explained or loadings → PCA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
