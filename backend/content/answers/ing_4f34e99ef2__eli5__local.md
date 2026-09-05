---
qid: ing_4f34e99ef2__eli5__local
question: 'Explain: II. Dependencies — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:34-05:00'
sources: []
---

**Dependencies – the 12‑Factor “Library Closet”**

Imagine your app is a kitchen where you cook a meal (the software). In this kitchen, every ingredient must come from a clear pantry that lives outside the stove—just like every library or service your code needs must be listed in a separate “dependency file.”  

When you write the recipe (your code), you **declare** which spices (packages) it uses: *“I need pandas 2.0, requests 2.25, and a PostgreSQL driver.”* The kitchen itself does not bake the spice; it simply fetches the right jar from the pantry each time you start cooking.  

This way, if someone else wants to cook your meal in their own kitchen, they can pull the exact same jars by reading your recipe file—no hidden surprises or mismatched flavors. That’s the essence of Dependencies: a tidy, explicit list that keeps every build and deployment identical, no matter where it runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
