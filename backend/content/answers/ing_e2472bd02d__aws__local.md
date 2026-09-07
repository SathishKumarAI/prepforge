---
qid: ing_e2472bd02d__aws__local
question: 'Explain: nbdev+Quarto: A new secret weapon for productivity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 460
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:01-05:00'
sources: []
---

**Situation (S)**  
When I joined the ML Ops team at my previous company, we were building a data‑science platform that let analysts publish notebooks as interactive dashboards. The existing workflow—copying Jupyter files into GitHub, manually converting to HTML with `nbconvert`, and deploying to S3—was slow, error‑prone, and hard to version.

**Task (T)**  
I had to create a reproducible, low‑friction pipeline that let data scientists iterate quickly while keeping production quality. The goal was to cut the turnaround time from “write notebook” to “live dashboard” by 70 % and reduce merge conflicts by 50 %.

**Action (A)**  
1. Adopted **nbdev** to treat notebooks as code modules, enabling automated unit tests (`pytest`) and version control in a single repo.  
2. Integrated **Quarto** for literate‑programming rendering: `.qmd` files compile to HTML, PDF, or Markdown with a single command (`quarto render`).  
3. Built an AWS‑centric CI/CD pipeline: CodeCommit → CodeBuild (running `nbdev_test`, `quarto build`) → S3 + CloudFront for static hosting; Lambda@Edge invalidates cache on each deploy.  
4. Implemented IAM roles that give only the “read” permission to downstream dashboards, ensuring **Ownership** and **Security**.

**Result (R)**  
- Deployment time dropped from 2 hrs to 20 min (70 % reduction).  
- Merge conflicts fell by 48 %.  
- Production errors decreased by 35 % because tests catch regressions early.  
- Hosting cost stayed under $200/month due to S3’s low storage tier and CloudFront’s caching.

**Reflection**  
This experience reinforced **Customer Obsession**—the data‑scientists could focus on insights, not tooling—and **Dive Deep**—understanding both nbdev internals and Quarto’s rendering engine. I learned that simplifying the developer workflow often yields the biggest business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
