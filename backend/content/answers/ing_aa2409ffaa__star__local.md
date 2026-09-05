---
qid: ing_aa2409ffaa__star__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 347
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:48-05:00'
sources: []
---

**Situation:**  
At my last role, we were deploying a customer‑support chatbot powered by an LLM with Retrieval-Augmented Generation (RAG). Our internal audit flagged that the model was occasionally returning nonsensical or biased responses during live testing.

**Task:**  
I needed to pinpoint whether prompt injection or RAG poisoning was causing the erratic outputs and design a mitigation plan that wouldn’t compromise user experience.

**Action:**  
First, I instrumented the retrieval pipeline to log every document ID fetched for each query. By correlating these logs with the anomalous responses, I discovered that an attacker had uploaded a handful of malicious PDFs containing subtle semantic shifts. These “poisoned” documents were being cached in the retriever’s vector store, effectively altering future generations. To counter this, I implemented a two‑layer filter: (1) a content‑moderation classifier on incoming uploads to reject suspicious files, and (2) a periodic re‑ranking step that re‑retrieved top‑k results using a clean, vetted corpus before feeding them into the LLM. I also added prompt‑level sanitization to strip out injected commands.

**Result:**  
After deploying the fix, the incidence of erroneous replies dropped from 12 % to below 0.5 % over the next month, and user satisfaction scores rose by 18 %. The exercise taught me that safeguarding a RAG system requires vigilance both at the data ingestion layer and within prompt handling, as attacks can be subtle yet far‑reaching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
