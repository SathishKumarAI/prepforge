---
qid: ing_dd93c85df9__think__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 530
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:34:57-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   *Assume:* The customer needs a RAG (Retrieval‑Augmented Generation) model, no labelled data, and wants to know how to judge performance before launch and monitor it afterwards.  
   *Clarify:* What “good” means—accuracy, relevance, compliance, latency? Who are the end users? What legal or ethical limits exist?

**2️⃣ Adopt a two‑phase evaluation framework**  
   *Pre‑launch:*  
      - **Synthetic benchmarks:** Generate pseudo‑labelled queries from domain knowledge (e.g., FAQ pairs).  
      - **Human‑in‑the‑loop (HITL) sampling:** Randomly pick documents and let experts rate relevance.  
      - **Coverage & diversity checks:** Use clustering or topic modelling on the corpus to ensure key areas are represented.  
   *Post‑launch:*  
      - **Real‑time logging:** Capture query, retrieved docs, generated answer, response time.  
      - **Continuous human review:** Periodically sample logs for relevance and factual correctness.  
      - **Feedback loops:** Allow users to flag hallucinations or inaccuracies; feed back into retraining.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify key metrics (precision@k, latency, user satisfaction).  
   2. Build a small labelled set via expert annotation or crowdsourcing for calibration.  
   3. Run offline evaluation with that set; iterate on retrieval index and prompt design.  
   4. Deploy in a shadow mode: run the system in parallel to existing solutions, compare outputs.  
   5. After launch, set up dashboards showing drift metrics (e.g., relevance scores over time).

**4️⃣ Common traps to avoid**  
   - Assuming synthetic data perfectly mimics real queries.  
   - Ignoring domain‑specific jargon that skews retrieval.  
   - Overlooking latency as a quality metric.  
   - Relying solely on automated BLEU/ROUGE scores without human judgment.

**5️⃣ Sanity‑check & communicate**  
   • Cross‑validate metrics with a small hold‑out set of real user queries.  
   • Present findings in plain language: “We’re 85% accurate on key support tickets, but need to improve latency for high‑traffic periods.”  
   • Iterate the evaluation plan as new data arrives, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
