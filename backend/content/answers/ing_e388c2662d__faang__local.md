---
qid: ing_e388c2662d__faang__local
question: An enterprise customer says "Claude hallucinates too much" in their RAG-based
  knowledge assistant. You're the applied engineer on the account. First 48 hours?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 540
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:08-05:00'
sources: []
---

**Clarify**

> *Problem:* A client reports that Claude, running in a Retrieval‑Augmented Generation (RAG) pipeline for an internal knowledge assistant, frequently produces hallucinated facts.  
> *Assumptions to confirm:*  
> – What version of Claude is deployed?  
> – Which retrieval source(s) are used and how fresh/clean the index is?  
> – How is “hallucination” defined (mis‑attribution vs. invented content)?  
> – Are there specific queries or topics that trigger it more often?

**Approach**

1. **Telemetry & Logging** – enable request/response capture, confidence scores, and provenance tags.  
2. **Baseline Analysis** – run a 10‑hour diagnostic query set to quantify hallucination rate and correlate with data sources.  
3. **Data Hygiene Check** – audit the vector store for stale or duplicated documents, and verify that embeddings respect token limits.  
4. **Model & Prompt Tuning** – adjust retrieval context size, add explicit “source must be cited” instruction, and experiment with a 3‑shot prompt on known correct facts.  
5. **Monitoring Dashboards** – set up real‑time alerts for hallucination spikes.

**Depth**

- *Telemetry*: Store each request’s top‑k retrieved docs + scores; parse Claude’s output for citation markers (`[source:…]`).  
- *Baseline*: Compute `hallucination_rate = hallucinated_hits / total_responses`. Aim <5 % initially.  
- *Data hygiene*: Re‑embed after removing duplicates, apply length filtering (<500 tokens).  
- *Prompt tweak*: Add “Answer with evidence; if uncertain, say so.” to reduce overconfidence.  
- Complexity: O(n) per query for logging; retrieval remains O(log n).  

**Edge Cases**

- Highly ambiguous queries may still hallucinate despite prompt changes.  
- If the vector store contains misinformation, the model will inherit it.  
- Over‑filtering could lead to information loss and reduced coverage.

**Optimize & Communicate**

After 48 hrs, present a concise report: current hallucination rate, root causes identified (e.g., stale embeddings), and prioritized fixes (data hygiene + prompt revision). Highlight trade‑offs (slight latency increase vs. higher factuality) and propose A/B testing next week to validate improvements before full rollout. This keeps the client informed, demonstrates data‑driven action, and aligns with FAANG standards for rapid, measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
