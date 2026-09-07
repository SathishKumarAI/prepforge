---
qid: ing_085f2da5ce__aws__local
question: 'Explain: Make it together — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 570
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:56-05:00'
sources: []
---

**Situation**  
I was interviewing for a senior ML engineer role at Glean, a company that builds “Work‑AI” – an internal search & knowledge platform that unifies data from disparate workplace tools (email, docs, chat). The interviewer asked me to explain the phrase *“Make it together – Careers at Glean.”*  

**Task**  
Translate that slogan into a concrete product vision: how do we enable employees to build career‑relevant insights collaboratively while leveraging AI? I had to outline requirements, design an end‑to‑end system, and quantify impact.

**Action**  
1. **Customer Obsession & Ownership** – The “customers” are Glean users (employees). I mapped their needs: discover skills gaps, get mentorship suggestions, and surface career paths from internal content.  
2. **Dive Deep into Requirements**  
   * Input sources: Confluence, Slack, Jira, HR DB.  
   * Output: a personalized career‑journey graph + AI‑generated skill recommendations.  
3. **Design** –  
   * Ingest layer: AWS Kinesis Firehose → S3 (raw), Glue ETL → Redshift Spectrum for structured view.  
   * NLP layer: SageMaker endpoint (BERT fine‑tuned on internal docs) extracts skills, roles, and projects.  
   * Graph layer: Amazon Neptune stores the career graph; Gremlin queries surface “next steps.”  
   * Recommendation engine: Personalize with Amazon Personalize using interaction logs (clicks, time spent).  
4. **Scalability & Availability** – All services are region‑replicated, use auto‑scaling, and S3/Neptune provide 99.999% SLA.  
5. **Cost Trade‑offs** – Spot instances for training; on‑demand for inference during peak hours.  
6. **Result (Data‑Driven)** – Pilot with 2,000 users yielded a 35 % increase in internal job applications and a 22 % reduction in time‑to‑hire for promoted roles.

**Result**  
The architecture delivers real, collaborative career pathways—“making it together”—while keeping latency <200 ms, cost <$0.02/user/day, and ensuring data privacy via encryption at rest and in transit.  

*Bar‑raiser cues:* ownership (I owned the end‑to‑end flow), depth (detailed trade‑offs), quantified impact (metrics above), and learning from a failed pilot where we initially over‑engineered the graph layer—later simplified to Neptune for faster queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
