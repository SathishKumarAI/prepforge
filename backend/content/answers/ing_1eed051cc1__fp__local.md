---
qid: ing_1eed051cc1__fp__local
question: 'Explain: Your own blog with GitHub Pages and fast_template (4 part tutorial)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 434
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:50-05:00'
sources: []
---

## 1️⃣ Problem & Principle  
A static site generator (SSG) turns plain Markdown into HTML without a server.  
The *fast* part comes from **Jekyll‑style rendering**: the build step is linear, O(n), so each commit produces a new site in seconds.  
Why use GitHub Pages? It runs the same SSG on every push, guaranteeing **exactly reproducible output**—a core tenet of *infrastructure as code*.

## 2️⃣ Set‑up & Repository  
1. Create an empty repo `username.github.io`.  
2. Add a minimal `_config.yml` (site title, theme).  
3. Commit the `fast_template` folder:  
   - `_layouts/default.html` → base layout with Bootstrap CDN.  
   - `_posts/2024-09‑05‑my‑first‑post.md` → front matter + content.  
4. Push; GitHub Pages builds automatically.

## 3️⃣ Template Mechanics  
Fast_template uses **Liquid** templating.  
*Front‑matter variables* are parsed into a context dictionary; Liquid tags inject them (`{{ page.title }}`).  
The build pipeline is: `git clone → Jekyll::Site.new(config) → generate → write`.  
Because the generator only walks the file tree once, adding a new post costs **O(1)** time relative to the number of posts.

## 4️⃣ Deployment & Insight  
Each push triggers a CI job that runs `jekyll build --future`.  
The *non‑obvious insight*: by keeping all content in Markdown and letting GitHub Pages handle rendering, you decouple *content creation* from *deployment logistics*.  
Thus, writers edit `.md` files locally; the only “automation” needed is a Git push.  

Result: an instant, versioned, immutable blog—perfect for reproducible research or personal archives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
