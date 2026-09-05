---
qid: ing_5fcd606547__star__local
question: 'Explain: Topic clustering — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 311
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:00-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched an AI‑powered chat assistant that needed rigorous testing before going live. Our QA team was overwhelmed by the sheer volume of user queries, and manual tagging was taking weeks to complete.

**Task:**  
I was tasked with automating the categorization of test cases so we could identify which conversational topics were most problematic and prioritize fixes within a 4‑week sprint.

**Action:**  
I built a topic clustering pipeline using spaCy for tokenization and sentence embeddings from Sentence‑BERT. The embeddings fed into HDBSCAN to discover dense clusters without predefining the number of topics. I then mapped each cluster back to an intuitive label via keyword extraction with RAKE, and integrated the system into our CI/CD workflow so every new test run automatically generated a topic heatmap. This allowed us to spot that 27% of failures clustered around “payment disputes,” a niche area we had under‑tested.

**Result:**  
The automated clustering cut manual labeling time from 5 days to 2 hours, and the focused remediation reduced failure rates on payment dispute queries by 62%, improving overall customer satisfaction scores by 1.4 points on our NPS survey. I learned that combining unsupervised embeddings with lightweight keyword mapping can dramatically accelerate test coverage in conversational AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
