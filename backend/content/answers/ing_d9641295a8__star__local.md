---
qid: ing_d9641295a8__star__local
question: 'Explain: Extended Thinking & Budget Tokens — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:26-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with launching a conversational chatbot that could handle complex loan queries. The model’s token limit meant we couldn’t feed the entire customer history into each request without exceeding budget tokens and latency.

**Task:**  
I needed to design a context‑engineering strategy that kept user intent clear, preserved essential past interactions, and stayed within our monthly token budget of 10 M while keeping response times under 300 ms.

**Action:**  
First, I applied **extended thinking** by pre‑processing conversation logs with a rule‑based summarizer to extract only the most relevant facts (loan amount, payment history, compliance flags). I then built a dynamic prompt template that inserted these key snippets and used a sliding window of 200 tokens for recent turns. To control cost, I introduced **budget tokens**: each request carried a “token budget” header; if the model’s generated response exceeded it, the system truncated non‑essential sections using an adaptive length penalty. I monitored token usage with Prometheus dashboards and iterated on prompt weightings to balance accuracy vs. cost.

**Result:**  
Token consumption dropped 45 % (from ~1.8 M to ~1 M per month), keeping us well below budget while response latency improved by 30 %. Accuracy of intent recognition rose from 82 % to 94 %, and user satisfaction scores increased by 12 points. I learned that marrying domain‑specific summarization with token budgeting turns a raw LLM into an efficient, cost‑aware service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
