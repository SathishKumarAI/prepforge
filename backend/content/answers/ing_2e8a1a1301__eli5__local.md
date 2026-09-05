---
qid: ing_2e8a1a1301__eli5__local
question: 'Explain: Using Private Sigstore Instances — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 207
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:23-05:00'
sources: []
---

Think of your machine‑learning model as a recipe you’ll share with friends.  
A **Sigstore instance** is like a trusted kitchen notebook that records every ingredient (code, data, libraries) and the exact measurements used. When someone wants to use the recipe, they can check the notebook to verify nothing was altered.

A **private Sigstore instance** means you keep that notebook in your own pantry instead of a public one. Only people on your team get access, so you control who sees the ingredients and when changes are made.  

In practice, you store each model version’s *signature*—a digital stamp that proves it came from your kitchen—in this private instance. When another developer pulls the model, their system reads the signature from the notebook to confirm it matches what you signed. This keeps the supply chain safe without exposing sensitive details to outsiders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
