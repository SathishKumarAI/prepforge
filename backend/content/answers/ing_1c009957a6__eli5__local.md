---
qid: ing_1c009957a6__eli5__local
question: 'Explain: Prerequisites — Embed Amazon OpenSearch Service dashboards in
  your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 245
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:31-05:00'
sources: []
---

Imagine you’re a librarian who wants to show visitors the most popular books without letting them leave the library’s main hall.  
To do that, you first need a few things:  

1. **A working OpenSearch cluster** – like a well‑organized shelf where all your data (the books) lives.  
2. **An index with visualizations** – these are pre‑made “maps” of the shelf showing trends and stats.  
3. **The OpenSearch Dashboards app** – think of it as a display screen that can pull those maps from the shelf.  
4. **A web application** – your own “visitor’s desk” where you’ll embed the screen.  

You also need to give the dashboard permission to read the data (roles and security settings) and make sure your web app can talk to OpenSearch over HTTPS. Once those pieces are in place, you simply insert a small piece of code into your page—just like mounting the display on the desk—and visitors can interact with the live visualizations right inside your application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
