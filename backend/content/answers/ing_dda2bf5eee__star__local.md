---
qid: ing_dda2bf5eee__star__local
question: 'Explain: Be good to our users — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 304
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:29-05:00'
sources: []
---

**Situation:**  
At my previous company I led a project to launch an AI‑powered career guidance chatbot for university students. Early beta testing revealed that the model frequently gave overly generic suggestions, causing user frustration and low engagement.

**Task:**  
I was tasked with redesigning the recommendation engine so it could deliver personalized, actionable career paths while ensuring transparency and fairness across all student demographics.

**Action:**  
First, I introduced a multi‑objective loss function that weighted relevance against diversity to reduce bias. Then I built a lightweight user profiling module using embeddings from student transcripts and extracurricular data, feeding this into a contextual bandit algorithm for real‑time suggestion ranking. To maintain transparency, I added an explainability layer that highlighted the key features driving each recommendation, displayed as a simple “why” tooltip. Finally, I set up A/B testing with 5,000 users to iterate on the reward signal.

**Result:**  
The updated bot saw a 48% lift in click‑through rates and a 32% increase in completion of follow‑up career planning actions. User satisfaction scores jumped from 3.2 to 4.6 out of 5, and we received positive media coverage for our ethical AI practices. I learned that balancing technical rigor with user trust—and providing clear explanations—is essential when building ML systems that truly benefit people.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
