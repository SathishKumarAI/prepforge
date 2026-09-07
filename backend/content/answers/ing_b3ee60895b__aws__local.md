---
qid: ing_b3ee60895b__aws__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 522
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:48-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – we track metrics that directly impact the user’s search experience.  
*Dive Deep* – each metric tells a different story about relevance and ranking quality.

---

### **Situation / Task**

When launching an AI‑powered product recommendation engine, I needed to validate that users were finding relevant items quickly. The goal was to improve click‑through rate (CTR) by 15 % within three months.

### **Action**

I implemented a **retrieval monitoring pipeline**:

| Metric | What it measures | Why we care |
|--------|------------------|-------------|
| **Recall@k** | Fraction of relevant items that appear in the top *k* results. | Ensures breadth: users see enough useful options. |
| **MRR (Mean Reciprocal Rank)** | Average reciprocal rank of the first relevant item. | Focuses on how early the first hit appears – critical for satisfaction. |
| **nDCG@k** | Normalized Discounted Cumulative Gain, weighting relevance by rank. | Captures both relevance and ranking quality, penalizing lower‑rank hits. |

The pipeline ingested logs in real time (Kinesis → Lambda → Redshift) and refreshed metrics every 30 min. Alerts were sent to the product team when any metric dropped >5 % from baseline.

### **Result**

- **Recall@10** rose from 0.62 to **0.78** after model tuning.  
- **MRR** improved from 0.34 to **0.48**, meaning the first relevant item appeared on average at rank 2 instead of 3.  
- **nDCG@10** increased by **12 %**, correlating with a **15 % lift in CTR** (from 4.1 % to 4.7 %).

These metrics guided iterative improvements and gave stakeholders confidence that the AI system delivered measurable value.

---

### **Bar‑raiser Takeaway**

- **Ownership:** I owned the end‑to‑end monitoring stack and drove cross‑functional fixes.  
- **Dive Deep:** I chose metrics that map directly to user experience and quantified their impact on business KPIs.  
- **Learning from Failure:** Early alerts revealed a drift in model performance; rapid iteration avoided a potential 20 % drop in engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
