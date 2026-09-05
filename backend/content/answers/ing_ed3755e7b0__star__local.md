---
qid: ing_ed3755e7b0__star__local
question: How do you handle time in retrieval - 'latest' queries, superseded documents,
  and questions about the past?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 366
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:09-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a knowledge‑base chatbot for internal support. Early adopters complained that answers about policy updates were stale, while some users asked “What did the 2019 GDPR compliance report say?” and got confusing results because older documents were still indexed.

**Task:**  
I was tasked with redesigning the retrieval pipeline so it could serve *latest* information for routine queries, correctly flag superseded documents, and still retrieve historical content when explicitly requested—all while keeping latency under 500 ms.

**Action:**  
First, I added a “valid‑until” timestamp to every document in our Elasticsearch index. During query time I constructed a Boolean filter: if the user used terms like “latest”, “current”, or omitted a date, the filter forced `valid_until > now`. For superseded docs, I marked them with a `status:superseded` flag and excluded them unless the query contained an explicit year. To support historical queries, I built a separate “archive” index that stored all past versions; the search layer dynamically routed to it when a date was detected. Finally, I introduced a small pre‑processing step that rewrote ambiguous terms (“what did X say”) into a structured query with a `date_range` clause.

**Result:**  
After deployment, the bot’s accuracy on policy questions rose from 68 % to 92 %. User satisfaction scores increased by 23 %, and average response latency stayed below 450 ms. I learned that combining lightweight metadata filtering with intelligent query rewriting can elegantly balance freshness, correctness, and historical retrieval in real‑time AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
