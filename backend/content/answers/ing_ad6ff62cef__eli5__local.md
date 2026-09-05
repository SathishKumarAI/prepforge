---
qid: ing_ad6ff62cef__eli5__local
question: What is IaC? — How do we manage configurations in a system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 223
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:13-05:00'
sources: []
---

**Infrastructure as Code (IaC)** is like having a recipe book for building and running your whole computer setup.

Imagine you want to bake a cake (your app) in many kitchens (servers). Instead of telling each chef “add flour, stir, bake,” you write down the exact steps in a clear list: *preheat oven 350°F, mix 2 cups flour, add 3 eggs, bake 30 minutes*. Anyone can read that list and follow it exactly, no guessing.

In computing, IaC lets you describe every part of your system—servers, networks, databases—in text files. A tool reads those files and automatically creates or updates the hardware and software to match the recipe. That way, if a new server is needed, you just copy the same file; if you need to change a setting, edit one line and redeploy. It keeps everything consistent, repeatable, and auditable—just like following the same cake recipe every time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
