---
qid: q010__star__local
question: What is Natural Language Processing (NLP) and what are some common tasks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 292
total_tokens: 533
web_searches: 0
cost_usd: 0.0
sources: []
---

**Situation:** While leading the data‑science team at a fintech startup, we were tasked with launching an AI‑powered customer support chatbot that could understand user inquiries and route them accurately. The product manager flagged that our current ticket routing accuracy was only 68%, falling short of the 85% target.

**Task:** My goal was to implement Natural Language Processing (NLP) techniques to improve intent classification and entity extraction, thereby boosting routing precision.

**Action:** I first scoped out the key NLP tasks: tokenization, part‑of‑speech tagging, named‑entity recognition (NER), and semantic similarity. Using spaCy for preprocessing and Hugging Face’s BERT fine‑tuned on our support logs, I built a pipeline that normalized user text, extracted entities like “account number” or “transaction date,” and classified intents into 12 categories. We integrated the model with an Elasticsearch index to fetch relevant knowledge base articles in real time.

**Result:** The chatbot’s routing accuracy jumped from 68% to 87%, exceeding our KPI by 2 points. Customer satisfaction scores rose by 12% over two months, and we cut average handling time by 18%. I learned that tailoring pre‑trained transformers to domain data can deliver immediate, measurable gains in conversational AI.
