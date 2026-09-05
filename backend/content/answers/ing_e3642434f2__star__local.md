---
qid: ing_e3642434f2__star__local
question: 'Explain: Design a Copilot feature that answers questions over a user''s
  work email, documents, and meetings - without ever leaking content the user can''t
  access.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 332
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:22-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech firm we had an internal productivity suite that integrated with Outlook, SharePoint, and Teams. A senior analyst complained her inbox was cluttered and she spent hours sifting through emails and meeting transcripts to find compliance documents.

**Task:**  
I was tasked with building a “Copilot” assistant that could answer natural‑language queries about her work email, shared docs, and meeting notes—yet never expose any confidential material the user didn’t already have permission for.

**Action:**  
I architected a privacy‑by‑design pipeline. First, every source (mail, docs, transcripts) was tokenized and stored in an encrypted vector database with fine‑grained access tags. The Copilot’s LLM was wrapped in a prompt that first queried the tag index to ensure the user had read permission before retrieving any content. For each query, the system fetched only metadata (sender, subject, doc title) and used a lightweight summarizer to generate an answer; if deeper detail was needed, it prompted the user to grant explicit access via OAuth consent. I also implemented a “content audit” module that logged all LLM outputs for compliance review.

**Result:**  
The feature cut the analyst’s email‑search time by 70 % (from ~15 min to 4 min per day) and reduced accidental data exposure incidents to zero in six months of deployment. I learned how to blend LLM capabilities with strict access control while keeping latency low enough for real‑time assistance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
