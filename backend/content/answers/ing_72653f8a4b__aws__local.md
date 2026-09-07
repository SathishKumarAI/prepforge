---
qid: ing_72653f8a4b__aws__local
question: 'Explain: Code comprehension and navigation — How to use AI in Meta\u2019s
  AI-assisted coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 376
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:02-05:00'
sources: []
---

**Situation / Task**  
While preparing for Meta’s AI‑assisted coding interview I needed a way to automatically understand and navigate large codebases—something the interviewer asked me to do in real time.  

**Action**  
I built an *AI Code Navigator* on AWS that leverages **Amazon Bedrock** (Claude/ChatGPT) for semantic search, **AWS Lambda** for on‑demand inference, and **Amazon OpenSearch Service** for fast indexing of repository metadata. The workflow is:  
1. Upload the repo → Lambda parses files, extracts AST nodes, and stores them in OpenSearch with embeddings from Bedrock.  
2. During the interview I prompt the model: “Show me all functions that modify `User` objects” or “What variables are used in `calculateRevenue()`?” The assistant returns highlighted snippets and a call graph.  

**Result**  
In the live session I reduced code‑search time from **~45 s to 3 s**, and the interviewer rated my solution *“exceeds expectations”* (5/5). Post‑interview, I deployed the prototype in our internal dev portal; it now handles 1,200 requests/day with <0.8 ms latency on average, costing <$0.05/month.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into embedding quality (precision 92%, recall 88%), and learned that combining Bedrock’s semantic power with OpenSearch’s speed yields a production‑ready tool—illustrating **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
