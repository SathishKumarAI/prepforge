---
qid: ing_dcdff8187b__star__local
question: 'Explain: Transform your enterprise with intelligent search and gen AI'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 312
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:52-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a legacy knowledge‑base system that handled over 10,000 support tickets per month. Users could only do keyword searches, so the average time to resolve an issue was 4 days and our CSAT hovered at 68%.

**Task:**  
I was tasked with reducing resolution time by 30% and boosting CSAT to 85% within six months by replacing the blunt search engine with a smarter, AI‑driven solution.

**Action:**  
First I integrated Elasticsearch with an NLP pipeline (spaCy + SentenceTransformers) to build semantic embeddings of all tickets and knowledge articles. Then I built a fine‑tuned GPT‑4 model that could generate concise answers from those embeddings, using prompt engineering to keep the tone consistent with our brand guidelines. We deployed this as a microservice behind our support portal, logging every query for continuous retraining. I also set up an A/B test framework in Optimizely to monitor performance and iteratively tweaked the model’s temperature and retrieval rank.

**Result:**  
Within four months we cut average resolution time from 4 days to 1.8 days—a 55% reduction—and CSAT rose to 88%. The AI service also reduced ticket volume by 18%, freeing up our engineers for new feature work. I learned that marrying semantic search with generative AI, while continuously validating with real users, delivers tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
