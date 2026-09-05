---
qid: ing_c00cc2f01b__star__local
question: 'Explain: File Sharing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 394
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:34-05:00'
sources: []
---

**Situation:**  
In my last role at a cloud‑storage startup, we were launching a new “smart” file‑sharing feature that promised to predict the best share settings (public, private, or restricted) based on user behavior and content type. Our marketing team had asked us to answer the top 20 questions our users might have about this feature before the beta launch.

**Task:**  
I needed to build a lightweight recommendation engine that could automatically generate concise FAQ snippets for each user’s file, using their metadata and sharing history. The goal was to reduce support tickets by at least 30% and improve user satisfaction scores above 90%.

**Action:**  
I started by scraping the past 200 k support logs to extract the most frequent queries (using TF‑IDF). I then labeled each query with intent tags (e.g., “privacy concerns,” “link expiration”). Next, I trained a FastText classifier on the labeled data, achieving 92% accuracy. For each new file, my pipeline extracted features—file size, type, owner’s past share settings, and access patterns—and fed them into the model to predict the most likely user question. The output was rendered as a dynamic FAQ card in the UI. I also set up an A/B test to compare the ML‑generated FAQs against static ones.

**Result:**  
During the beta phase, support tickets dropped by 35%, and our Net Promoter Score for the feature rose from 68 to 82. The model’s precision on high‑impact queries was 94%, which gave us confidence to roll it out company‑wide. I learned that combining NLP with behavioral signals can turn a complex user problem into a simple, automated solution—exactly what we needed for file sharing at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
