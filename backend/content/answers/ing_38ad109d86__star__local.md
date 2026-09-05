---
qid: ing_38ad109d86__star__local
question: The agent answers from a customer's knowledge base, which contains outdated
  and contradictory articles. How do you prevent confidently wrong answers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 301
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:59-05:00'
sources: []
---

**Situation:**  
At my previous firm we built an AI assistant for a large retail client. The bot pulled responses from the company’s knowledge base, but many articles were outdated or contradicted each other—once I saw two pages with different return policies for the same product category.

**Task:**  
I had to reduce the rate of confidently wrong answers so that customers didn’t receive misinformation while still keeping the system fast and self‑serving.

**Action:**  
First, I implemented a lightweight metadata layer: every article now carries an “effective date” and a “source confidence score.” The retrieval engine ranks results not just by semantic similarity but also by recency and source weight. Second, I added a post‑retrieval sanity check that compares top‑k answers against a curated set of “golden rules” encoded in a small rule‑based module; if the retrieved answer violates any rule, we flag it for human review instead of returning it outright. Finally, I set up an automated alert pipeline: whenever new articles are added or existing ones edited, a diff tool flags potential contradictions and sends them to the content team.

**Result:**  
Within three months, the confidence‑wrong rate dropped from 18% to 4%, and customer satisfaction scores rose by 12 points. I learned that combining lightweight metadata with rule‑based sanity checks can keep an AI honest without sacrificing speed or scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
