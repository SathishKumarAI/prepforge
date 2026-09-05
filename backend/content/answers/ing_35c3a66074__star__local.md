---
qid: ing_35c3a66074__star__local
question: 'Explain: BigLaw Bench: Hallucinations — BigLaw Bench: Hallucinations |
  Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 344
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:41-05:00'
sources: []
---

**Situation:**  
At a legal-tech startup we were building an AI assistant that could draft discovery responses for civil litigation. The beta release had a critical flaw: the model was “hallucinating” facts—producing fabricated citations and dates that made our compliance team panic.

**Task:**  
I needed to reduce hallucinations below 3% while keeping the system’s response time under two seconds, so we could move from internal testing to client deployment without legal liability.

**Action:**  
First, I introduced a “fact-checking” layer: after the language model generated text, a lightweight retrieval‑augmented module queried a vetted database of case law and statutes. If the answer deviated by more than 0.8 cosine similarity from any retrieved passage, the system flagged it for human review. Next, I fine‑tuned the base transformer on a curated corpus of annotated legal documents with an “entity‑aware” loss that penalized invented citations. Finally, I implemented a confidence‑threshold gating mechanism; responses below 0.65 confidence were automatically routed to a senior paralegal.

**Result:**  
Within three weeks, hallucination rates dropped from 12% to 2.7%, and average latency stayed at 1.8 seconds. The product passed our internal audit and was rolled out to the first client, who reported a 30% reduction in manual review time. I learned that combining retrieval augmentation with targeted fine‑tuning can effectively tame hallucinations without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
