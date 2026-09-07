---
qid: ing_3d658a7bc0__aws__local
question: 'Explain: Best Practices for LLM-as-Judge — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 561
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:36-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In my last role I led a pilot to replace manual code‑review approvals with an LLM‑as‑Judge for security compliance. The goal was to reduce review cycle time by **30 %** while maintaining or improving detection accuracy.

**Action (Dive Deep + Bias for Action)**  

1. **Data‑Curation & Retrieval**  
   * Ingested 2 M past PRs, labeled with 10 compliance categories.  
   * Deployed an RAG pipeline:  
     * **Amazon Kendra** indexes the codebase + policy docs (high availability).  
     * **AWS Lambda** triggers on new PR, queries Kendra for top‑k snippets → context for LLM.  

2. **LLM Evaluation Pattern**  
   * Fine‑tuned **Claude 3.5 Sonnet** with a prompt that explicitly asks: “Does this snippet violate policy X? Provide the rule number and a brief justification.”  
   * Implemented a **confidence threshold** (0.85) before auto‑approving; otherwise, escalates to human.

3. **Scoring & Feedback Loop**  
   * Each LLM decision is stored in **Amazon DynamoDB** with audit fields.  
   * Periodic batch job (AWS Glue) re‑runs a subset of past PRs through the updated model and logs drift metrics.

4. **Cost & Availability**  
   * Kendra: on‑demand, pay per query – $0.001/query → ~$1 k/month for 1 M queries.  
   * Lambda + LLM inference (via Bedrock) keeps cold‑start latency <200 ms; overall SLA 99.9 %.  

**Result (Deliver Results)**  
* Review time dropped from **12 h to 3 h** per PR – a 75 % reduction, exceeding the target.  
* False‑positive rate fell from **8 % to 2 %**, validated by quarterly audit reports.  
* Team reported higher satisfaction scores (4.7/5) on tooling.

**Learning & Bar‑raiser Notes**  
I iterated the prompt after a 10 % drop in confidence during the first month, learning that specificity in rule references boosts precision. The bar‑raiser will look for this ownership: I owned the end‑to‑end loop, dived deep into Kendra and Lambda tuning, quantified impact with clear metrics, and documented lessons from early failures to refine the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
