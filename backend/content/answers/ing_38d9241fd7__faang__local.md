---
qid: ing_38d9241fd7__faang__local
question: 'Explain: Live exercise: here''s our API and a folder of sample support
  tickets. In 60 minutes, build something that would impress a support-team lead.
  Narrate your choices.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 398
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:39-05:00'
sources: []
---

**Clarify**  
The task: ingest the provided REST API (ticket metadata + text) and the local ticket folder (PDF/HTML). Build an MVP that gives a support‑team lead a quick view of priority tickets, sentiment trends, and common issue categories. I’ll assume:  
* API returns JSON with `id`, `created_at`, `status`, `priority`, `tags`.  
* Ticket text files are plain‑text or simple HTML.  
* No strict latency requirement; 60 min for a prototype.

**Approach**  
1. **Data ingestion** – fetch all tickets via paginated API, read local files, merge by `id`.  
2. **Feature extraction** – use spaCy to tokenize, POS‑tag, and run simple rule‑based intent classification (FAQ vs bug).  
3. **Sentiment & priority scoring** – TextBlob for sentiment; combine with API `priority` to produce a heat map.  
4. **Dashboard** – Streamlit app: top 10 urgent tickets, word cloud of common terms, trend line over time.

**Depth**  
* Complexity: O(n) over ticket count.  
* Memory: store only essential fields (id, status, sentiment, category).  
* Trade‑offs: rule‑based classification is fast but less accurate than fine‑tuned transformers; acceptable for a demo.

**Edge Cases**  
* Missing text files → flag “content missing”.  
* API rate limits → exponential backoff.  
* Non‑UTF content → log and skip.  

**Optimize & Communicate**  
I’ll modularize ingestion, NLP, and UI to allow swapping in BERT later. In the demo I’ll highlight how a lead can filter by sentiment or category, showing instant insights. This demonstrates quick turnaround, clean architecture, and clear ROI for support ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
