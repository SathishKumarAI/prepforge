---
qid: ing_96df153b64__star__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 351
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:50-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a customer‑support chatbot that used GPT‑4 for intent classification. Our training set was only 1,000 labeled tickets, so we decided to use few‑shot prompting to improve accuracy on new queries.

**Task:**  
I had to design the prompt template: pick which examples to include, how many, and in what order, so that the model’s predictions stayed within a 90 % precision threshold while keeping token usage low for real‑time responses.

**Action:**  
First, I clustered the historical tickets by intent and sub‑topic using k‑means on TF‑IDF embeddings. From each cluster I selected two representative examples: one with high confidence (verified by human review) and one that highlighted edge cases. I then ordered them by decreasing similarity to the target query, calculated via cosine distance in embedding space, so the model first saw the most relevant context. To avoid prompt bloat I limited the total token count to 350, trimming verbose examples when necessary. Finally, I ran A/B tests against a baseline random‑order prompt and logged precision, recall, and latency.

**Result:**  
The ordered few‑shot approach raised intent classification precision from 82 % to 91 %, with an average latency increase of only 12 ms per request. The experiment also revealed pitfalls: over‑repeating the same high‑confidence example led to “hallucinated” answers, and including too many dissimilar examples confused the model. I learned that careful clustering and similarity‑based ordering are essential for effective few‑shot prompting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
