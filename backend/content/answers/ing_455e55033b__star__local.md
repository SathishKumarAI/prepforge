---
qid: ing_455e55033b__star__local
question: 'Explain: Every agent, every token — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:29-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were rolling out an AI‑driven chatbot that could handle loan inquiries. The product team noticed that the bot’s responses drifted over time—customers complained about vague answers and irrelevant follow‑ups.

**Task:**  
I was tasked with designing a rigorous testing framework to evaluate every agent (the chatbot instances) and every token (individual words or phrases) for consistency, accuracy, and user satisfaction before each release cycle.

**Action:**  
First, I built an automated pipeline using Python’s `pytest` and `transformers` libraries. Each agent was instantiated with a unique seed and fed a curated test suite of 5,000 real customer queries spanning all loan products. For token‑level evaluation, I integrated Hugging Face’s `datasets` to run fine‑tuned language models against a reference corpus, computing perplexity and BLEU scores for every token. I added an A/B testing layer with Optimizely to surface live traffic results and trigger alerts if any agent’s success rate fell below 92%. Finally, I set up dashboards in Grafana that plotted token drift over time, allowing the devops team to spot problematic words quickly.

**Result:**  
After deployment of this framework, we reduced customer complaints by 38% within two months. The bot’s overall accuracy climbed from 84% to 95%, and we cut manual review effort by 70%. I learned that continuous, granular evaluation—down to individual tokens—is essential for maintaining high‑quality AI interactions at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
