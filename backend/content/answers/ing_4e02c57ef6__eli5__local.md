---
qid: ing_4e02c57ef6__eli5__local
question: 'Explain: Docker Image — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 289
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:55-05:00'
sources: []
---

Think of a **Docker image** like a ready‑made recipe card that tells your kitchen (the computer) exactly how to bake a cake (run an app).  
1️⃣ **Image** – the recipe itself, a snapshot of code, libraries and settings.  
2️⃣ **Container** – one baked cake: a running instance of the image isolated from other cakes.  
3️⃣ **Layer** – each step in the recipe (add flour, add eggs); layers stack to build the final image.  
4️⃣ **Dockerfile** – the written instructions that create the recipe card.  
5️⃣ **Base image** – the plain cake pan you start with; most images are built on a simple foundation like Ubuntu or Alpine.  
6️⃣ **Registry** – the online pantry where you store and fetch recipes (Docker Hub, GitHub Packages).  
7️⃣ **Tag** – a label for a specific version of a recipe (e.g., `v1.2`).  
8️⃣ **Build cache** – the kitchen’s memory that re‑uses unchanged steps to save time when updating the recipe.  

With these pieces, you can reliably share, run, and update applications anywhere—just like any chef following a clear, reproducible recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
