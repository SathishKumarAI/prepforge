---
qid: ing_8aff8c571e__fp__local
question: An agentic research query returns a memo citing a case that was overruled.
  Where does that get caught?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 399
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:19-05:00'
sources: []
---

**Where an “overruled‑case” mistake gets caught**

When a language model generates a memo that cites a case later overruled, the fault surfaces in three linked layers of the AI’s architecture:

| Layer | Function | Why it catches the error |
|-------|----------|---------------------------|
| **Fact‑grounding (retrieval + knowledge base)** | The model pulls documents from an up‑to‑date legal corpus and cross‑checks citations. | A case’s status is a hard attribute; if the retrieval engine sees “overruled” in the metadata, it rejects the claim before the answer reaches the user. |
| **Reasoning graph (symbolic/semantic network)** | The system encodes each case as nodes linked by *is‑about*, *cites*, and *status* relations. | A query for “Case X → Authority” triggers a traversal that will fail if the *status* edge is “overruled,” forcing the reasoning module to backtrack or flag uncertainty. |
| **Self‑monitoring (confidence & anomaly detection)** | The model assigns a confidence score based on consistency across retrieved sources. | When the score dips below a threshold because one source says “cited” while another says “overruled,” an alert is raised and the memo is either revised or withheld. |

**Non‑obvious insight:**  
The *status* attribute acts like a **temporal constraint in a Bayesian network**—it conditions all downstream probabilities. A single overruled entry collapses the posterior of any claim that depends on it, so the system need not re‑evaluate every dependent fact; it propagates uncertainty only through the affected subgraph. This keeps the check efficient while guaranteeing factual integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
