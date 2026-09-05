---
qid: ing_c58000ddf4__star__local
question: 'Explain: Blogging with Jupyter Notebooks — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 378
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:55-05:00'
sources: []
---

**Situation:**  
During my second year of graduate studies, the lab was preparing a demo on transfer learning for a conference presentation. Our slides were static and the audience kept asking “Can we see the code live?” The only thing we had was a long PDF that didn’t capture the iterative nature of our experiments.

**Task:**  
I needed to create an interactive, reproducible showcase that let attendees tweak hyper‑parameters on the fly and immediately see the impact on a neural net’s accuracy—without requiring them to install anything locally.

**Action:**  
I chose Jupyter Notebooks as the medium. Using fast.ai’s high‑level API, I wrapped our ResNet‑50 training loop in a notebook with `interact` widgets for learning rate, batch size, and data augmentation options. I also embedded a small dataset (CIFAR‑10) directly via `fastai.data_loaders.load_data_from_folder`, so the kernel could run on any machine with an internet connection. To keep the notebook lightweight, I used lazy loading (`@delegates`) and cached intermediate results in `/tmp` so that re‑runs were instantaneous. Finally, I exported the notebook to a static HTML file and hosted it on GitHub Pages, ensuring everyone could access it without installing Jupyter.

**Result:**  
During the demo, attendees modified parameters in seconds and saw validation accuracy jump from 85% to 92%, all within the same browser tab. The presentation received the highest engagement score of the conference (average rating 4.7/5). I learned that turning code into an interactive narrative not only demystifies AI but also accelerates collaboration—exactly what fast.ai’s philosophy promotes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
