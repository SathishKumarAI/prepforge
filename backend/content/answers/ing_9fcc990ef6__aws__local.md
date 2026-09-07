---
qid: ing_9fcc990ef6__aws__local
question: 'Q46: How do you manage context window limits with long conversations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 520
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:06-05:00'
sources: []
---

**Situation (S)** – I was leading a project that built a virtual‑assistant for a telecom client. The model used GPT‑4, which had a 32K‑token context limit; our users often had multi‑hour conversations (≈70 k tokens). We risked losing key user intents and saw a 15 % drop in NPS.

**Task (T)** – Design an architecture that preserves long‑term dialogue state while staying within the model’s window, keeping latency <200 ms and cost <$0.02 per turn.

**Action (A)** –  
1. **Chunk & Summarize**: After every 8 turns, a Lambda function ran a lightweight summarizer (OpenAI “text‑davinci‑003”) to condense the history into a 2k‑token summary stored in DynamoDB.  
2. **Hybrid Retrieval**: At each turn, we fetched the latest user utterance + last 4 turns + the summary and passed them to Bedrock’s GPT‑4.  
3. **Cost & Scale** – S3 archived older turns; only active sessions hit Lambda (≈10 k invocations/day). The architecture achieved <200 ms end‑to‑end latency, saved ~30 % of token usage, and cut the NPS drop to 2 %.  

**Result (R)** – Post‑deployment, NPS rose from 78 % to 86 %, while cost per session fell from $0.07 to $0.04. We maintained 99.9 % availability by using a multi‑AZ Lambda and DynamoDB global tables.

---

### Leadership Principles  
- **Customer Obsession**: Prioritized user experience (NPS).  
- **Ownership** & **Dive Deep**: Took full ownership of the latency/cost trade‑off, dissected token usage patterns, and iterated on summarization thresholds.  

### Bar‑raiser cues  
- Demonstrated *ownership* by owning both technical design and business outcome.  
- Showed *depth* through a clear cost/latency analysis and choice of AWS services.  
- Quantified impact with real NPS and cost numbers.  
- Learned from failure (initial 15 % NPS drop) and turned it into a data‑driven solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
