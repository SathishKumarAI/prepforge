---
qid: ing_68b518b6da__eli5__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 302
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:45-05:00'
sources: []
---

Imagine you’re a museum curator looking at a huge collection of paintings (your data).  
**PCA** is like arranging the canvases on a wall by their most obvious differences—color palette and brushstroke style—so that similar works sit next to each other. It gives a quick, linear layout but can hide subtle groupings.

**t‑SNE** is more like a detective who rearranges the paintings so that those with similar hidden themes (texture, mood) cluster tightly, even if they look different at first glance. The clusters are vivid, but the overall “distance” between groups isn’t reliable; it’s great for spotting patterns, not measuring true relationships.

**UMAP** is a compromise: it keeps the detective’s eye on local similarities while also preserving some sense of global structure—like grouping by era and then by style within each era. It’s faster than t‑SNE and often more faithful to real distances.

People often mistake these plots for actual measurements: they think “far apart” means truly unrelated or that every cluster is a distinct category. In reality, the layout is an *illustration* of similarity, not a definitive map of cause and effect. Use PCA when you need speed and linear insight, t‑SNE to explore hidden clusters, and UMAP when you want both local detail and a rough sense of overall shape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
